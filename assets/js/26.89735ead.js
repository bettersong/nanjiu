(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{443:function(t,a,s){"use strict";s.r(a);var n=s(2),p=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在小程序的日常迭代中，有一些场景我们可能需要在小程序发布后，用户能够马上感知并更新，比如上线新活动、修复高危漏洞等，如果用户因为各种原因未能及时更新小程序，这就可能导致一些功能无法正常使用或者存在安全隐患，因此，实现小程序的强制更新功能就显得尤为重要。本文将探讨小程序如何做到强制更新，以确保用户始终使用最新、最安全的小程序版本。")]),t._v(" "),a("h2",{attrs:{id:"小程序的运行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序的运行机制"}},[t._v("#")]),t._v(" 小程序的运行机制")]),t._v(" "),a("p",[t._v("在这之前，我们得先来了解一下小程序的生命周期，从启动到销毁它都是如何进行的")]),t._v(" "),a("h3",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57d0f1737815482eaaa3b4fd83bc3a3f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=398&h=812&s=37415&e=png&b=ffffff",alt:"wx-1.png"}})]),t._v(" "),a("h3",{attrs:{id:"小程序的启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序的启动"}},[t._v("#")]),t._v(" 小程序的启动")]),t._v(" "),a("p",[t._v("广义的小程序启动可以分为两种情况，一种是"),a("strong",[t._v("冷启动")]),t._v("，一种是"),a("strong",[t._v("热启动")]),t._v("。")]),t._v(" "),a("p",[t._v("从小程序生命周期的角度来看，我们一般讲的「"),a("strong",[t._v("启动")]),t._v("」专指冷启动，热启动一般被称为后台切前台。")]),t._v(" "),a("ul",[a("li",[t._v("冷启动：如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。")]),t._v(" "),a("li",[t._v("热启动：如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。")])]),t._v(" "),a("h3",{attrs:{id:"前台与后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台与后台"}},[t._v("#")]),t._v(" 前台与后台")]),t._v(" "),a("ul",[a("li",[t._v("前台：小程序的「"),a("strong",[t._v("前台")]),t._v("」状态一般指的是小程序处于打开状态，页面正在展示给用户")]),t._v(" "),a("li",[t._v("后台：当用户关闭小程序时小程序并没有真正被关闭，而是进入了「"),a("strong",[t._v("后台")]),t._v("」状态")])]),t._v(" "),a("p",[t._v("切后台的方式包括但不限于以下几种：")]),t._v(" "),a("ul",[a("li",[t._v("点击右上角胶囊按钮离开小程序")]),t._v(" "),a("li",[t._v("iOS 从屏幕左侧右滑离开小程序")]),t._v(" "),a("li",[t._v("安卓点击返回键离开小程序")]),t._v(" "),a("li",[t._v("小程序前台运行时直接把微信切后台（手势或 Home 键）")]),t._v(" "),a("li",[t._v("小程序前台运行时直接锁屏")])]),t._v(" "),a("h3",{attrs:{id:"挂起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂起"}},[t._v("#")]),t._v(" 挂起")]),t._v(" "),a("p",[t._v("小程序进入「后台」状态一段时间后（目前是 5 秒），微信会停止小程序 JS 线程的执行，小程序进入「"),a("strong",[t._v("挂起")]),t._v("」状态。此时小程序的内存状态会被保留，但开发者代码执行会停止，事件和接口回调会在小程序再次进入「前台」时触发。")]),t._v(" "),a("p",[t._v("当开发者使用了"),a("strong",[t._v("后台音乐播放")]),t._v("、"),a("strong",[t._v("后台地理位置")]),t._v("等能力时，小程序可以在 "),a("strong",[t._v("「后台」")]),t._v(" 持续运行，不会进入到 "),a("strong",[t._v("「挂起」")]),t._v(" 状态")]),t._v(" "),a("h3",{attrs:{id:"销毁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁"}},[t._v("#")]),t._v(" 销毁")]),t._v(" "),a("p",[t._v("当小程序进入后台或被挂起时，它并不会一直保留在后台，当满足以下两点时，小程序会被销毁")]),t._v(" "),a("ul",[a("li",[t._v("当小程序进入后台并被「挂起」后，如果很长时间（目前是 30 分钟）都未再次进入前台，小程序会被销毁。")]),t._v(" "),a("li",[t._v("当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。")])]),t._v(" "),a("h2",{attrs:{id:"小程序的更新机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序的更新机制"}},[t._v("#")]),t._v(" 小程序的更新机制")]),t._v(" "),a("p",[t._v("小程序默认的更新机制可以分为两类："),a("strong",[t._v("启动时同步更新")]),t._v("、"),a("strong",[t._v("启动时异步更新")])]),t._v(" "),a("h3",{attrs:{id:"启动时同步更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动时同步更新"}},[t._v("#")]),t._v(" 启动时同步更新")]),t._v(" "),a("p",[t._v("在以下情况下，小程序启动时会同步更新代码包。同步更新会阻塞小程序的启动流程，影响小程序的启动耗时。")]),t._v(" "),a("ul",[a("li",[t._v("定期检查发现版本更新，微信运行时定时检查下载更新，如果有更新，下次小程序启动时会同步进行更新，更新到最新版本后再打开小程序")]),t._v(" "),a("li",[t._v("用户长时间未使用小程序，会强制同步更新")])]),t._v(" "),a("h3",{attrs:{id:"启动时异步更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动时异步更新"}},[t._v("#")]),t._v(" 启动时异步更新")]),t._v(" "),a("ul",[a("li",[t._v("即使启动前未发现更新，小程序每次冷启动时，都会异步检查是否有更新版本。如果发现有新版本，将会异步下载新版本的代码包。但当次启动仍会使用客户端本地的旧版本代码，即新版本的小程序需要等下一次冷启动才会使用")])]),t._v(" "),a("h3",{attrs:{id:"强制更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制更新"}},[t._v("#")]),t._v(" 强制更新")]),t._v(" "),a("p",[t._v("在启动时异步更新的情况下，如果开发者希望立刻进行版本更新，可以使用 "),a("code",[t._v("wx.getUpdateManager")]),t._v("API 进行处理，该API会返回一个"),a("code",[t._v("UpdateManager")]),t._v("实例")]),t._v(" "),a("p",[a("code",[t._v("UpdateManager")]),t._v(" 对象为小程序提供了四种关键的方法，用于管理和监控小程序的更新过程。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("UpdateManager.applyUpdate()")]),t._v("：在小程序新版本已经下载完成的情况下（即接收到 "),a("code",[t._v("onUpdateReady")]),t._v(" 回调后），此方法用于强制小程序重启并启用新版本。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("UpdateManager.onCheckForUpdate(function callback)")]),t._v("：此方法用于监听向微信后台发起的更新检查结果事件。微信小程序在冷启动时会自动进行更新检查，开发者无需主动触发。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("UpdateManager.onUpdateReady(function callback)")]),t._v("：此方法用于监听小程序的新版本更新就绪事件。一旦新版本可用，客户端会自动触发下载过程（无需开发者额外操作），并在下载成功后调用此回调函数。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("UpdateManager.onUpdateFailed(function callback)")]),t._v("：此方法用于监听小程序更新失败的事件。当小程序有新版本且客户端尝试自动下载更新时（同样无需开发者干预），如果因网络问题或其他原因导致下载失败，将会触发此回调函数。")])])]),t._v(" "),a("p",[t._v("根据以上API，我们就能够在小程序法版后，通知用户进行强制更新")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canIUse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getUpdateManager'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" updateManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCheckForUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onCheckForUpdate===='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小程序已更新")]),t._v("\n          updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateReady")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'更新提示'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showCancel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("confirmText")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'立即重启'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新版本已经上线，是否重启小程序以应用新版本？'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 applyUpdate 应用新版本并重启")]),t._v("\n                  updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新失败")]),t._v("\n          updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateFailed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'更新失败'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新版本下载失败，请删除当前小程序后重新打开。'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 版本过低")]),t._v("\n      taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a28c4eda3df144f7a0553e91ab74366b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=936&h=644&s=837037&e=gif&f=114&b=21272c",alt:"wx-2.gif"}})]),t._v(" "),a("p",[t._v("因为小程序的开发版和体验版没有版本的概念，所以无法在开发版和体验版上测试更版本更新情况，但可以通过微信开发者工具 => 添加编译模式 => 编译设置 => 下次编译时模拟更新来进行调试")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c7a60b2dbce4d868abbd1520e644de3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1238&h=978&s=192066&e=png&b=2a2d32",alt:"wx-3.png"}})])])}),[],!1,null,null,null);a.default=p.exports}}]);