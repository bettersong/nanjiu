---
title: 探索JavaScript执行机制
author: 南玖
date: 2023-06-21
categories: JavaScript
tags: 
- JS
---
## 前言

不论是工作还是面试，我们可能都经常会碰到需要知道代码的执行顺序的场景，所以打算花点时间彻底搞懂JavaScript的执行机制。

如果这篇文章有帮助到你，❤️关注+点赞❤️鼓励一下作者

想要搞懂JavaScript执行机制，你需要清楚下面这些知识：（以浏览器环境为例，与Node环境不同）

- 进程与线程的概念
- 浏览器原理
- 事件循环（Event-Loop），任务队列（同步任务，异步任务，微任务，宏任务）

## 进程与线程

想必在大学的操作系统原理课上大家都学过什么是进程与线程。那我们一起来回顾一下吧～

我们都知道计算机的核心是CPU，它承担了所有的计算任务；而操作系统是计算机的管理者，它负责任务的调度、资源的分配和管理，统领整个计算机硬件；应用程序则是具有某种功能的程序，程序是运行于操作系统之上的。

### 进程

> 进程是一个具有独立功能的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体 **进程是能拥有资源和独立运行的最小单位，也是程序执行的最小单位。**

**进程具有的特征：**

- 动态性：进程是程序的一次执行过程，是临时的，有生命期的，是动态产生，动态消亡的；
- 并发性：任何进程都可以同其他进程一起并发执行；
- 独立性：进程是系统进行资源分配和调度的一个独立单位；
- 结构性：进程由程序、数据和进程控制块三部分组成。

### 线程

> 线程是程序执行中一个单一的顺序控制流程，是程序执行流的最小单元，是处理器调度和分派的基本单位。一个进程可以有一个或多个线程，各个线程之间共享程序的内存空间(也就是所在进程的内存空间)。一个标准的线程由线程ID、当前指令指针(PC)、寄存器和堆栈组成。而进程由内存空间(代码、数据、进程空间、打开的文件)和一个或多个线程组成。

### 进程与线程的区别

- 线程是程序执行的最小单位，而进程是操作系统分配资源的最小单位；
-  一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线；
- 进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)，进程与进程之间互不可见；
- 调度和切换：线程上下文切换比进程上下文切换要快得多。

### JS为什么是单线程？

JavaScript从它诞生之初就是作为浏览器的脚本语言，主要用来处理用户交互以及操作DOM，这就决定了它只能是单线程的，否则会带来非常复杂的同步问题。

**举个例子🌰：** 如果JS是多线程的，其中一个线程要修改一个DOM元素，另外一个线程想要删除这个DOM元素，这时候浏览器就不知道该听谁的。所以为了避免复杂性，从一诞生，JavaScript就被设计成单线程。

**为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质**

## 浏览器原理

作为前端工程师，浏览器想必都不陌生，并且浏览器是多进程的。

### 浏览器组成部分

- **<font style="color:red">用户界面</font>**：包括地址栏，前进/后退/刷新/书签🔖等按钮
- **<font style="color:red">浏览器引擎</font>**：在用户界面和呈现引擎之间传送指令
- **<font style="color:red">渲染引擎</font>**：用来绘制请求的内容
- **<font style="color:red">网络</font>**：用来完成网络调用，例如http请求，它具有平台无关的接口，可以在不同平台上工作
- **<font style="color:red">JavaScript解释器</font>**：用来解析执行JavaScript代码
- **<font style="color:red">用户界面后端</font>**：用于绘制基本的窗口小部件，比如组合框和窗口，底层使用操作系统的用户接口
- **<font style="color:red">数据存储</font>**：属于持久层，浏览器在硬盘中保存类似cookie的各种数据，HTML5定义了web database技术，这是一种轻量级完整的客户端存储技术

**⚠️注意：与大多数浏览器不同的是，谷歌（Chrome）浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程**

### 浏览器包含哪些进程

**浏览器进程**

- 浏览器的主进程(负责协调、主控)，该进程只有一个
- 负责浏览器界面显示，与用户交互。如前进，后退等
- 负责各个页面的管理，创建和销毁其他进程
- 将渲染(Renderer)进程得到的内存中的Bitmap(位图)，绘制到用户界面上
- 网络资源的管理，下载等

**第三方插件进程**

- 负责管理第三方插件

**GPU进程**

- 负责3D绘制与硬件加速（最多一个）

**渲染进程**

- 负责页面文档解析，执行与渲染

### 渲染进程包含哪些线程

#### GUI渲染线程

- 主要负责解析HTML，CSS，构建DOM树🌲，布局，绘制等
- 该线程与JavaScript引擎线程互斥，当执行JavaScript引擎线程时，GUI渲染线程会被挂起，当任务队列空闲时，主线程才会执行GUI渲染

#### JavaScript引擎线程

- 主要负责处理JavaScript脚本，执行代码（如V8引擎）
- 浏览器同时只能有一个JS引擎线程在运行JS程序，即JS是单线程的
- JS引擎线程与GUI渲染线程是互斥的，所以JS引擎会阻塞页面渲染

#### 定时触发器线程

- 负责执行定时器函数（setTimeout，setInterval）
- 浏览器定时计数器并不是由JS引擎计数的（因为JS是单线程的，如果处于阻塞状态就会影响计数器的准确性）
- 通过单独线程来计时并触发定时(计时完毕后，添加到事件触发线程的事件队列中，等待JS引擎空闲后执行)，这个线程就是定时触发器线程，也叫定时器线程
- W3C在HTML标准中规定，规定要求`setTimeout`中低于4ms的时间间隔算为4ms

#### 事件触发线程

- 负责将准备好的事件交给JS引擎线程执行
- 当事件被触发时，该线程会把对应的事件添加到待处理队列的队尾，等待JS引擎处理

#### 异步请求线程

- 在XMLHttpRequest连接后浏览器会开一个线程
- 检测请求状态变更时，如果有对应的回调函数，异步请求线程就会产生状态变更事件，并把对应的回调函数放入队列中等待JS引擎执行

## 同步与异步

由于JavaScript是单线程的，这就决定了它的任务不可能只有同步任务，那些耗时很长的任务如果也按同步任务执行的话将会导致页面阻塞，所以JavaScript任务一般分为两类：

### 同步任务

> 同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；

### 异步任务

> 异步任务指的是，不进入主线程、而进入"任务队列"（Event queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

**常见的异步任务：** 定时器，ajax，事件绑定，回调函数，promise，async await等

- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
- 当Event Table中指定的事情完成时，会将这个函数移入Event Queue。
- 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
- 上述过程会不断重复，也就是常说的Event Loop(事件循环)。
- 我们不禁要问了，那怎么知道主线程执行栈为空啊？js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数。

### 宏任务与微任务

JavaScript除了广义上的同步任务与异步任务，还有更精细的任务定义：

**宏任务（macro-task）：** 包括全局代码，setTimeout，setInterval

**微任务（micro-task）：** new Promise().then(回调) process.nextTick()

不同类型的任务会进入到不同的任务队列：
![宏微任务.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ddcd714fb0a492fb2a1674450d22e80~tplv-k3u1fbpfcp-watermark.image?)

事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。

## 执行栈与任务队列

### 执行栈

JavaScript代码都是在执行上下文中执行的，在JavaScript中有三种执行上下文：

- 全局执行上下文
- 函数执行上下文，JS函数被调用时都会创建一个函数执行上下文
- eval执行上下文，eval函数产生的上下文（用的较少）

通常来说我们的JS代码都不止一个上下文，那么这些上下文的执行顺序是怎样的呢？

我们都知道**栈**是一种**后进先出**的数据结构，我们JavaScript中的**执行栈**就是一种这样的栈结构，当JS引擎执行代码时，会产生一个全局上下文并把它压入执行栈，每当遇到函数调用时，就会产生函数执行上下文并压入执行栈。引擎从栈顶开始执行函数，执行完后会弹出该执行上下文。

```js
function add(){
  console.log(1)
  foo()
  console.log(3)
}

function foo(){
  console.log(2)
}
add()
```

我们来看下上面这段代码的执行栈是怎样的：

![执行栈.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d55a3c7f4a01455db55680eb5dd7ba81~tplv-k3u1fbpfcp-watermark.image?)

### 任务队列

前面我们说到了JavaScript中所有的任务分为同步任务与异步任务，同步任务，顾名思义就是立即执行的任务，它一般是直接进入到主线程中执行。而我们的异步任务则是进入任务队列等待主线程中的任务执行完再执行。

任务队列是一个事件的队列，表示相关的异步任务可以进入执行栈了。主线程读取任务队列就是读取里面有哪些事件。

队列是一种**先进先出**的数据结构。

上面我们说到异步任务又可以分为宏任务与微任务，所以任务队列也可以分为**宏任务队列**与**微任务队列**

- Macrotask Queue：进行比较大型的工作，常见的有setTimeout，setInterval，用户交互操作，UI渲染等；

- Microtask Queue：进行较小的工作，常见的有Promise，Process.nextTick；

## 事件循环♻️（Event-Loop）

1. 同步任务直接放入到主线程执行，异步任务（点击事件，定时器，ajax等）挂在后台执行，等待I/O事件完成或行为事件被触发。
2. 系统后台执行异步任务，如果某个异步任务事件（或者行为事件被触发），则将该任务添加到任务队列，并且每个任务会对应一个回调函数进行处理。
3. 这里异步任务分为宏任务与微任务，宏任务进入到宏任务队列，微任务进入到微任务队列。
4. 执行任务队列中的任务具体是在执行栈中完成的，当主线程中的任务全部执行完毕后，去读取微任务队列，如果有微任务就会全部执行，然后再去读取宏任务队列
5. 上述过程会不断的重复进行，也就是我们常说的**事件循环（Event-Loop）**。

![同异步.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1d6b12942064ea4bb84cdac1aae2f9d~tplv-k3u1fbpfcp-watermark.image?)

### 例题验证

我们来看道题目进行验证

```js
(async ()=>{
    console.log(1) 
  
    setTimeout(() => {
    console.log('setTimeout1')
    }, 0);
  
    function foo (){
        return new Promise((res,rej) => {
            console.log(2)
            res(3)
        })
    }
  
    new Promise((resolve,reject)=>{
    console.log(4)
    resolve() 
    console.log(5)
    }).then(()=> {
    console.log('6')
    })
  
    const res = await foo();
    console.log(res);
    console.log('7')
  
    setTimeout(_ => console.log('setTimeout2'))
})()
```

**打印顺序是：**`1,4,5,2,6,3,7,setTimeout1,setTimeout2`

**分析：**

- 代码自上而下执行，先遇到`console.log(1)`,直接打印`1`，接着遇到定时器属于宏任务，放入宏任务队列
- 再遇到promise，由于`new Promise`是一个同步任务，所以直接打印`4`，遇到resolve，也就是后面的then函数，放入微任务队列，再打印`5`
- 然后再执行`await foo`,foo函数里面有个`promise`，`new promise`属于同步任务，所以会直接打印`2`，await返回的是一个promise的回调，await后面的任务放入微任务队列
- 最后遇到一个定时器，放入宏任务队列
- 执行栈任务执行完了，先去微任务队列获取微任务执行，先执行第一个微任务，打印`6`，再执行第二个微任务，打印`3，7`
- 微任务执行完，再去宏任务队列获取宏任务执行，打印`setTimeout1,setTimeout2`

## 有趣的定时器

> JavaScript的任务队列中的异步任务还包括定时器事件，即指定某些代码在多长时间后执行。定时器功能主要由`setTimeout()`和`setInterval()`两个函数来完成，他们的内部执行机制完全一样，区别主要在于`setTimeout`是一次执行的过程，`setInterval`则是反复执行的过程。

**setTimeout**函数接受两个参数，第一个是要执行的回调函数，第二个是推迟执行的时间（ms)

如果我们把推迟时间设为0，是不是就会立即执行呢？

```js
setTimeout(()=>{
    console.log(1)
},0)

console.log(2)
```

但事实并不是这样的，上面的打印结果是先打印2，再打印1。是不是觉得很蒙？

我们用上面的事件循环的规则来理解就很清晰了，全局代码执行，遇到定时器`setTimeout`,放入宏任务队列，接着往下执行同步代码，打印2，执行栈任务执行完再去微任务队列，没有微任务再去看宏任务队列，有一个宏任务，执行打印1。

setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。

HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每16毫秒执行一次。这时使用requestAnimationFrame()的效果要好于setTimeout()。

需要注意的是，setTimeout()只是将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在setTimeout()指定的时间执行。

## 推荐阅读

[如何从性能角度选择数组的遍历方式](https://juejin.cn/post/7033578966887694373)     
[这些浏览器面试题，看看你能回答几个？](https://juejin.cn/post/7026536651899797541)   
[这一次带你彻底了解前端本地存储](https://juejin.cn/post/7025416782810710024)    
[面试官：说一说前端路由与后端路由的区别](https://juejin.cn/post/7023932512363610120)    
[JavaScript之原型与原型链](https://juejin.cn/post/7022819667110526989)  
[Javascript深入之作用域与闭包](https://juejin.cn/post/7021337791682314270)       
[this指向与call,apply,bind](https://juejin.cn/post/7019497275772649485)

觉得文章不错，可以点个赞呀^_^ 另外欢迎关注留言交流～
