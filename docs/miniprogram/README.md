---
title: 基于taro搭建小程序多项目框架
author: 南玖
date: 2024-1-30
categories: 小程序
tags:
 - 小程序
---

## 前言

为什么需要这样一个框架，以及这个框架带来的好处是什么？

从字面意思上理解：该框架可以用来同时管理多个小程序，并且可以抽离公用组件或业务逻辑供各个小程序使用。当你工作中面临这种同时维护多个小程序的业务场景时，可以考虑使用这种模式。灵感来自最近`webpack`的多项目打包构建

## 起步

首先你得先安装好`taro`脚手架，然后基于该脚手架生成一个`taro`项目

### 初始化taro项目

```shell
taro init miniApp
```


![taro-1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfbe833bbe2c4783bb669b62541102c3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2860&h=1256&s=3404782&e=png&b=090425)

这是我选择的初始化配置，你当然也可以选择其它模版，只要编译工具选择`webpack`就可以，下面的步骤基本相同

### 打开项目安装依赖

```shell
pnpm install
```


![taro-2.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af58227d685a4484a064e4f343fc1e07~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2828&h=1166&s=2990246&e=png&b=070322)

这样一个基本的taro项目就生成好了，但这样只是生成了一个小程序，那我们如果有许多个小程序是不是还要按上面这些步骤继续生成，当然不需要，这样不仅费时间，而且难以维护。

下面我们就来把这个框架改造成支持同时管理多个小程序。

## 改造（支持多小程序）

此时的项目结构是这样的：


![taro-3.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d582c7731e9849428101bff807deb83c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1750&s=459755&e=png&b=272933)

*   `config`下面是一些小程序以及`webpack`的配置
*   `src`下面是我们小程序的项目代码
*   `project.config.json`是当前小程序配置文件
*   ...

### 改造目录

在`src`目录下新增目录：`apps`、`common`

*   `apps`：小程序目录，存放各个小程序的代码
*   `common`：公用目录，存放公用组件及业务逻辑代码

#### apps

这里每个小程序对应一个文件夹，里面存放对应小程序的代码

这里需要把根目录下的`project.config.json`放到小程序目录下，因为每个小程序都需要自己的配置文件

比如：nanjiu、nanjiu\_notebook两个小程序


![taro-4.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cb2ed52a6504bdf87240e4f22d42dfa~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1536&h=1336&s=290786&e=png&b=282a35)

#### common

这里主要是存放公用代码：组件、业务、请求


![taro-5.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f842e3738bf0499bbb1ce65b38108a22~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1484&h=830&s=218854&e=png&b=272833)

### 修改配置

#### config/index.js

```js

import path from 'path'
const app = process.env.APP

const config = {
  projectName: 'mini_app',
  date: '2024-1-21',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: `src/apps/${app}`, // 项目源码目录
  outputRoot: `${app.toUpperCase()}APP`,  // 打包产物目录
  alias: {
    '@/common': path.resolve(__dirname, '..', 'src/common'), // 别名配置
  },
// ....

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

```

这里需要注意的是`sourceRoot`，因为要支持多小程序，那么这里就不能固定写死了，我们可以在启动时通过传参来区分当前启动或打包哪个小程序。

### 自定义构建脚本

在项目根目录新建文件夹`build`存放构建脚本

```js
// cli.js
const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')


const action = process.argv[2]
let app =  process.argv[3]
const runType = action == 'dev' ? '启动': '打包'

function start() {
  // 处理配置文件
  process.env.APP = app
  console.log(`🚀🚀🚀🚀🚀🚀正在${runType}小程序：${app}`)
  let cmd = ''
  if(action == 'dev') {

    cmd = `taro build --type weapp --watch --app ${app}`

  } else {

    cmd = `taro build --type weapp --app ${app}`

  }

  const child = shell.exec(cmd, {async:true})
  child.stdout.on('data', function() {
    // console.log(data)
  })
}
// ...

start()

```

### 配置脚本命令

```json
//package.json

// ...

"scripts": {
  "start": "node build/cli.js dev",
  "build": "node build/cli.js build",
}
```

### 验证

所有工作完成后，可以来看看这个框架能不能满足我们的需求


![taro-6.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d9713380a5b4673b5a252c7e5575c37~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1624&h=598&s=127377&e=png&b=282a35)

命令执行成功，项目根目录下会生成对应的小程序代码


![taro-7.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/166ff3fd4d714054b7296ec4ca99899b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1750&s=520542&e=png&b=272933)

再把该产物使用小程序开发者工具看是否能跑起来


![taro-8.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/725541cfaec447c3bf806b2391dc1971~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2774&h=1750&s=531319&e=png&b=23272c)

这边能够跑起来，就说明打包没有问题了，同样可以验证其它的小程序

### 优化构建脚本

多小程序架构搭建完，有同事反馈启动报错，我心想：不能吧，我自己都验证过了，从报错信息上看他应该是启动时没输入需要启动的小程序，直接`pnpm start`了，这样的话就不知道应该启动哪个小程序了。其实启动命令已经在项目文档上写了，可能是没注意看。

那就只能优化优化，尽量避免这种情况，这里主要的逻辑是如果没有输入指定的的小程序，通过`inquirer`开启交互式命令，让他选择要启动哪个小程序。

```js
// cli.js
const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const action = process.argv[2]
let app =  process.argv[3]
const runType = action == 'dev' ? '启动': '打包'

if(!app) {
  openInquirer()
  return
}

// 未输入项目名称则开启交互命令行
function openInquirer() {
  const projectList = fs.readdirSync(path.resolve(__dirname, '../src/apps'))
  // 过滤隐藏文件
  projectList.forEach((item, index) => {
    if(item.indexOf('.') == 0) {
      projectList.splice(index, 1)
    }
  })
  const promptList = [
    {
      type: 'list',
      message: '🚗请选择启动的小程序:',
      name: 'pro',
      choices: [...projectList],
    },
  ]
  inquirer.prompt(promptList).then((answers) => {
    app = answers.pro
    start()
  })
}
function start() {
  // 处理配置文件
  process.env.APP = app
  console.log(`🚀🚀🚀🚀🚀🚀正在${runType}小程序：${app}`)
  let cmd = ''
  if(action == 'dev') {

    cmd = `taro build --type weapp --watch --app ${app}`

  } else {

    cmd = `taro build --type weapp --app ${app}`

  }

  const child = shell.exec(cmd, {async:true})
  child.stdout.on('data', function() {
    // console.log(data)
  })
}

start()
```


![taro-9.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef7326f2ef94436cb56e1acafde9dd8c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1064&h=322&s=46113&e=png&b=282a35)

这样就大功告成了！！！
