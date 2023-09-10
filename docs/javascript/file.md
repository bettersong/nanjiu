---
title: 纯前端也可以访问文件系统！
author: 南玖
date: 2023-09-10
categories: JavaScript
tags: 
- JavaScript
---


## 前言

周末逛`github`的时候，发现我们只需要在`github`域名上加上`1s`他就能够打开一个`vscode`窗口来阅读代码，比起在`github`仓库中查看更加方便


![vs0.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0220e5e91d5f4729b239e267cc0cb8f8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1418&s=662472&e=png&b=202020)

然后我就想网页端`vscode`能不能打开我本地的项目呢，带着这个疑惑我打开了网页版`vscode`，它居然真的可以打开我本地的项目代码!


![vs1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f330a2881674cd0ac46b417cc69b007~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2870&h=1430&s=650411&e=png&b=ebe9e9)

难道又出了新的API让前端的能力更进一步了？打开MDN查了一下相关文档，发现了几个新的API

## showOpenFilePicker

> 用来选择文件


![vs-f1.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9a32a13790a49518e790c6195e019e3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1606&h=734&s=141214&e=png&b=fefefe)

### 语法

```js
showOpenFilePicker()
```

### 参数

*   **options**：（可选）包含以下属性
    *   `multiple`：布尔值，默认为`false`。为`true`表示允许用户选择多个文件
    *   `excludeAcceptAllOption`：布尔值，默认为`false`。默认情况下，文件选择器带有一个允许用户选择所有类型文件的过滤选项（展开于文件类型选项中）。设置此选项为 `true` 以使该过滤选项不可用。
    *   `types`：表示允许选择的文件类型的数组

### 返回值

返回一个`promise`对象，会兑现一个包含 [`FileSystemFileHandle`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileSystemFileHandle) 对象的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 数组。

### 体验

```vue
<template>
  <div class="open_file" @click="openFile">打开文件</div>
</template>

<script setup lang="ts">
const openFile = async () => {
  const res = await window.showOpenFilePicker();
  console.log(res);
};
</script>
```

默认只能打开一个文件，可以传入`multiple:true`打开多个文件


![vs3.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddf28c241d3f4c9eb66dbd81219e5510~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2278&h=640&s=127689&e=png&b=ffffff)

## showDirectoryPicker

> 用来选择目录


![vs2.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f3dbcc9c9f648c3acb677fae6c4e6f4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1604&h=686&s=129442&e=png&b=fdfdfd)

### 语法

属于浏览器全局方法，直接调用即可

```js
showDirectoryPicker()
```

### 参数

*   **options**：（可选）包含以下属性
    *   `multiple`：布尔值，默认为`false`。为`true`表示允许用户选择多个文件
    *   `excludeAcceptAllOption`：布尔值，默认为`false`。默认情况下，文件选择器带有一个允许用户选择所有类型文件的过滤选项（展开于文件类型选项中）。设置此选项为 `true` 以使该过滤选项不可用。
    *   `types`：表示允许选择的文件类型的数组

### 返回值

返回一个`promise`对象，会兑现一个包含 [`FileSystemFileHandle`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileSystemFileHandle) 对象的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 数组。

### 体验

```vue
<template>
  <div class="open_file" @click="openFile">打开文件</div>
  <div class="open_file" @click="openDir">打开文件夹</div>
</template>

<script setup lang="ts">
const openFile = async () => {
  const res = await window.showOpenFilePicker({
    // multiple: true,
  });
  console.log(res.length);
};

const openDir = async () => {
  const res = await window.showDirectoryPicker();
  console.log(res);
};
</script>
```


![vs4.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2b1119d83b0404e8adb210bfdd98268~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2316&h=490&s=130249&e=png&b=fefefe)

## 扩展

### FileSystemFileHandle

`FileSystemFileHandle`提供了一些方法可以用来获取和操作文件

*   `getFile`：返回一个`Promise`对象，用于获取文件；

*   `createSyncAccessHandle`：返回一个`FileSystemSyncAccessHandle`对象，用于同步访问文件；

*   `createWritable`：返回一个`Promise`对象，用于创建一个可写流，用于写入文件；

### FileSystemDirectoryHandle

`FileSystemDirectoryHandle`对象是一个代表文件系统中的目录的对象，它同样提供了方法来获取和操作目录

*   `entries`：返回一个`AsyncIterable`对象，用于获取目录中的所有文件和目录；
*   `keys`：返回一个`AsyncIterable`对象，用于获取目录中的所有文件和目录的名称；
*   `values`：返回一个`AsyncIterable`对象，用于获取目录中的所有文件和目录的`FileSystemHandle`对象；
*   `getFileHandle`：返回一个`Promise`对象，用于获取目录中的文件；
*   `getDirectoryHandle`：返回一个`Promise`对象，用于获取目录中的目录；
*   `removeEntry`：返回一个`Promise`对象，用于删除目录中的文件或目录；
*   `resolve`：返回一个`Promise`对象，用于获取目录中的文件或目录；

`entries`、`keys`、`values`这三个方法都是用来获取目录中的所有文件和目录的，它们返回的都是一个`AsyncIterable`对象，我们可以通过`for await...of`语法来遍历它。

### 开发编辑器

了解完这些知识点，我们就可以来开发一个简陋网页版编辑器了，初期只包含打开文件、打开文件夹、查看文件、切换文件

编辑器大概长这样：


![vs5.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f20e1d668e99499faa853cec567a7011~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2878&h=1604&s=477143&e=png&b=292c33)

#### 打开文件夹

```js
const openDir = async () => {
  const res = await window.showDirectoryPicker({});
  const detalAction = async (obj: any) => {
    if (obj.entries) {
      const dirs = obj.entries();
      for await (const entry of dirs) {
        if (entry[1].entries) {
          // 文件夹，递归处理
          detalAction(entry[1]);
        } else {
          // 文件
          fileList.value.push({
            name: entry[0],
            path: obj.name,
            fileHandle: entry[1],
          });
        }
      }
    }
  };
  await detalAction(res);
  showCode(fileList.value[0], 0);
  console.log("--fileList--", fileList);
};
```

这里主要是递归处理文件夹，返回一个文件列表

#### 读取文件内容

```js
const showCode = async (item: any, index: number) => {
  const file = await item.fileHandle.getFile();
  const text = await file.text();
  codeText.value = text;
  currentIndex.value = index;
};
```

#### 展示文件内容

使用`highlight.js`来高亮展示代码

```html
<div class="show_code">
  <pre v-highlight>
        <code class="lang-dart">
            {{ codeText }}
        </code>
   </pre>
</div>
```

最终效果如下：


![vs6.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/841788e2901a4e0cb685c85e1667398e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1422&h=791&s=299134&e=gif&f=47&b=292c34)

想不到吧，这种功能现在纯前端就能够实现了，当然还可以做的更复杂一点，包括修改保存等功能，保存可以使用`showSaveFilePicker`API，它可以写入文件，同样是返回一个`promise`。感兴趣的可以试着完善编辑器的功能。
