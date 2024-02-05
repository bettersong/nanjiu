(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{445:function(e,t,s){"use strict";s.r(t);var v=s(2),a=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"脚手架-nestjs-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架-nestjs-cli"}},[e._v("#")]),e._v(" 脚手架 NestJS CLI")]),e._v(" "),t("p",[e._v("与其它框架一样，NestJS也有自己的脚手架，它可帮助我们快速初始化Nest项目以及开发和维护 Nest 应用程序。")]),e._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("绝大多数人可能会选择全局安装，因为方便，但需要注意的是，全局安装"),t("strong",[e._v("任何")]),t("code",[e._v("npm")]),e._v("软件包都会将确保它们运行正确版本的责任留给我们开发者自身。这还意味着，如果你有不同的项目，每个项目都将运行"),t("strong",[e._v("相同")]),e._v("版本的 CLI。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-g")]),e._v(" @nestjs/cli\n")])])]),t("p",[e._v("⚠️这里需要注意Node版本，可能会遇到脚手架安装成功了但初始化项目时报错，这里建议使用高版本node，我这里用是node版本是"),t("code",[e._v("16.19.0")])]),e._v(" "),t("p",[e._v("当然你也可以不选择全局安装，"),t("code",[e._v("Nest")]),e._v("提供了"),t("code",[e._v("@nestjs/cli")]),e._v("包同样可以使用"),t("code",[e._v("nest")]),e._v("命令")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("npx @nestjs/cli@latest\n")])])]),t("h3",{attrs:{id:"nest命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nest命令"}},[e._v("#")]),e._v(" nest命令")]),e._v(" "),t("p",[e._v("安装完脚手架之后我们可以通过"),t("code",[e._v("nest --help")]),e._v("看看它都有哪些命令：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dded2b07a5044603956b9e43fc84aa1f~tplv-k3u1fbpfcp-watermark.image",alt:"nest-1.png"}})]),e._v(" "),t("h4",{attrs:{id:"new-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-n"}},[e._v("#")]),e._v(" new|n")]),e._v(" "),t("p",[e._v("该命令是用来初始化一个"),t("code",[e._v("Nest")]),e._v("项目的")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nest new project-name\n")])])]),t("p",[e._v("该命令表示初始化一个名为"),t("code",[e._v("project-name")]),e._v("的"),t("code",[e._v("Nest")]),e._v("项目，并且会帮你安装好所有必要的依赖，简直就是一步到位，非常棒~")]),e._v(" "),t("p",[e._v("上图中我们可以看到"),t("code",[e._v("new|n")]),e._v("，"),t("code",[e._v("n")]),e._v("代表"),t("code",[e._v("new")]),e._v("的别名，所以为了方便，你也可以这样使用：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nest n project-name\n")])])]),t("h4",{attrs:{id:"generate-g"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-g"}},[e._v("#")]),e._v(" generate|g")]),e._v(" "),t("p",[e._v("该命令可以为我们生成各种代码，其中包括：控制器Controller、服务service、模块module等。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成控制器")]),e._v("\nnest generate controller controller-name\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成服务")]),e._v("\nnest generate "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" service-name\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成模块")]),e._v("\nnest generate module module-name\n")])])]),t("p",[e._v("当你觉得一个一个生成很麻烦时，可以使用下面这个命令")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nest g resource filename\n")])])]),t("p",[e._v("当你执行这个命令时，它会让你选择生成那种类型的代码：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0dd833c2d0d4d0198a8778cad04b129~tplv-k3u1fbpfcp-watermark.image?",alt:"nest-2.png"}})]),e._v(" "),t("p",[e._v("这里我们直接选择"),t("code",[e._v("REST API")]),e._v("，它会再问你是否需要生成CURD代码")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a0b263f237f4d438cd8a372bae45a05~tplv-k3u1fbpfcp-watermark.image?",alt:"nest-3.png"}})]),e._v(" "),t("p",[e._v("我们选择是就好了，这个它就为我们生成了一个完整的CURD代码。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a346ad21a7ba41b2b63336c7fa957928~tplv-k3u1fbpfcp-watermark.image?",alt:"nest-4.png"}})]),e._v(" "),t("p",[e._v("我们会发现生成的文件中可能会有一些测试文件，当我们不需要这些文件时，可以直接删除掉，或者在生成时加上"),t("code",[e._v("--no-spec")]),e._v("表示不生成测试文件")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nest g resource filename --no-spec\n")])])]),t("p",[e._v("当然它还可以生成更多类型的代码，可以通过以下命令查看：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nest g "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--help")]),e._v("\n")])])]),t("h4",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" start")]),e._v(" "),t("p",[e._v("该命令用于启动开发服务，支持 watch 和调试")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动")]),e._v("\nnest start\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动并监听文件变动")]),e._v("\nnest start "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--watch")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#启动并调试")]),e._v("\nnest start "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--debug")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--watch")]),e._v("\n")])])]),t("p",[e._v("这些命令可以在"),t("code",[e._v("package.json")]),e._v("文件中找到")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7e743abaed149a690f8df766ec6703b~tplv-k3u1fbpfcp-watermark.image?",alt:"nest-5.png"}})]),e._v(" "),t("p",[e._v("所以我们本地开发一般使用"),t("code",[e._v("npm run start:dev")]),e._v("启动项目")]),e._v(" "),t("h4",{attrs:{id:"build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" build")]),e._v(" "),t("p",[e._v("该命令用于项目打包")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nest build\n")])])]),t("p",[e._v("它有两种编译方式可选："),t("code",[e._v("--wepback")]),e._v(" 和 "),t("code",[e._v("--tsc")]),e._v(" ，默认是 tsc 编译，也可以切换成 webpack。")]),e._v(" "),t("p",[e._v("区别在于"),t("code",[e._v("tsc")]),e._v("模式并不会将"),t("code",[e._v("node_modules")]),e._v("模块打包进去，而"),t("code",[e._v("webpack")]),e._v("模式则会将node模块打包成单文件")]),e._v(" "),t("h2",{attrs:{id:"脚手架配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架配置文件"}},[e._v("#")]),e._v(" 脚手架配置文件")]),e._v(" "),t("p",[t("code",[e._v("Nest")]),e._v("脚手架与其它脚手架不同的是，它生成的项目下会有一个脚手架配置文件"),t("code",[e._v("nest-cli.json")]),e._v("，上面我们用的命令的很多选项都可以在这个文件中直接配置。")]),e._v(" "),t("p",[e._v("该文件的顶级属性如下：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"collection"')]),e._v("：指向用于生成组件的原理图集合；（最好不要改）")]),e._v(" "),t("li",[t("code",[e._v('"sourceRoot"')]),e._v("：指向标准模式结构中单个项目的源代码根目录，或monorepo 模式结构中的"),t("em",[e._v("默认项目")])]),e._v(" "),t("li",[t("code",[e._v('"compilerOptions"')]),e._v("：编译相关的配置选项")]),e._v(" "),t("li",[t("code",[e._v('"generateOptions"')]),e._v("：全局生成相关的配置选项")]),e._v(" "),t("li",[t("code",[e._v('"monorepo"')]),e._v("：（仅限 monorepo）对于 monorepo 模式结构，该值始终为"),t("code",[e._v("true")])]),e._v(" "),t("li",[t("code",[e._v('"root"')]),e._v("：（仅限 monorepo）指向"),t("em",[e._v("默认项目的项目根目录")])])]),e._v(" "),t("h3",{attrs:{id:"全局编译选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局编译选项"}},[e._v("#")]),e._v(" 全局编译选项")]),e._v(" "),t("p",[e._v("这些属性指定要使用的编译器以及影响"),t("strong",[e._v("任何")]),e._v("编译步骤的各种选项，无论是作为"),t("code",[e._v("nest build")]),e._v("或的一部分"),t("code",[e._v("nest start")]),e._v("，也不考虑编译器，无论"),t("code",[e._v("tsc")]),e._v("是还是 webpack。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("webpack")])]),e._v(" "),t("td",[e._v("如果是"),t("code",[e._v("true")]),e._v("，使用webpack编译。如果"),t("code",[e._v("false")]),e._v("存在或不存在，请使用"),t("code",[e._v("tsc")]),e._v(". 在 monorepo 模式下，默认为"),t("code",[e._v("true")]),e._v("(use webpack)，在标准模式下，默认为"),t("code",[e._v("false")]),e._v("(use "),t("code",[e._v("tsc")]),e._v(")。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("tsConfigPath")])]),e._v(" "),t("td",[e._v("("),t("strong",[e._v("仅 monorepo")]),e._v(" ) 指向包含在不带选项的情况下调用或调用"),t("code",[e._v("tsconfig.json")]),e._v("时将使用的设置的文件（例如，当构建或启动默认项目时）。"),t("code",[e._v("nest build``nest start``project")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("webpackConfigPath")])]),e._v(" "),t("td",[e._v("指向 webpack 选项文件。如果未指定，Nest 会查找文件"),t("code",[e._v("webpack.config.js")]),e._v(". 请参阅下面的更多细节。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("deleteOutDir")])]),e._v(" "),t("td",[e._v("如果"),t("code",[e._v("true")]),e._v("，则每当调用编译器时，它都会首先删除编译输出目录（如 中配置"),t("code",[e._v("tsconfig.json")]),e._v("，默认为"),t("code",[e._v("./dist")]),e._v("）。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("assets")])]),e._v(" "),t("td",[e._v("每当编译步骤开始时，启用自动分发非 TypeScript 资源（在增量编译模式下不会发生"),t("strong",[e._v("资源")]),t("code",[e._v("--watch")]),e._v("分发）。详情请参阅下文。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("watchAssets")])]),e._v(" "),t("td",[e._v("如果"),t("code",[e._v("true")]),e._v("，则以监视模式运行，监视"),t("strong",[e._v("所有")]),e._v("非 TypeScript 资源。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("manualRestart")])]),e._v(" "),t("td",[e._v("如果，则启用手动重新启动服务器的"),t("code",[e._v("true")]),e._v("快捷方式。"),t("code",[e._v("rs")]),e._v("默认值为"),t("code",[e._v("false")]),e._v("。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("builder")])]),e._v(" "),t("td",[e._v("指示 CLI 使用什么"),t("code",[e._v("builder")]),e._v("来编译项目（"),t("code",[e._v("tsc")]),e._v("、"),t("code",[e._v("swc")]),e._v("或"),t("code",[e._v("webpack")]),e._v("）。要自定义构建器的行为，您可以传递包含两个属性的对象："),t("code",[e._v("type")]),e._v("( "),t("code",[e._v("tsc")]),e._v("、"),t("code",[e._v("swc")]),e._v("或"),t("code",[e._v("webpack")]),e._v(") 和"),t("code",[e._v("options")]),e._v("。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("typeCheck")])]),e._v(" "),t("td",[e._v("如果"),t("code",[e._v("true")]),e._v("，则启用 SWC 驱动项目的类型检查（当"),t("code",[e._v("builder")]),e._v("为时"),t("code",[e._v("swc")]),e._v("）。默认值为"),t("code",[e._v("false")]),e._v("。")])])])]),e._v(" "),t("h3",{attrs:{id:"全局生成选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局生成选项"}},[e._v("#")]),e._v(" 全局生成选项")]),e._v(" "),t("p",[e._v("这些属性指定命令使用的默认生成选项"),t("code",[e._v("nest generate")]),e._v("。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("spec")])]),e._v(" "),t("td",[e._v("如果值为布尔值，则默认情况下"),t("code",[e._v("true")]),e._v("启用"),t("code",[e._v("spec")]),e._v("生成，值为 则"),t("code",[e._v("false")]),e._v("禁用生成。CLI 命令行上传递的标志会覆盖此设置，项目特定的"),t("code",[e._v("generateOptions")]),e._v("设置也会覆盖此设置（更多内容见下文）。如果该值是一个对象，则每个键代表一个原理图名称，并且布尔值确定是否为该特定原理图启用/禁用默认规范生成。")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("flat")])]),e._v(" "),t("td",[e._v("如果为 true，则所有生成命令都将生成平面结构")])])])]),e._v(" "),t("p",[t("strong",[e._v("本系列文章会持续更新哦，关注前端南玖，敬请期待吧~")])])])}),[],!1,null,null,null);t.default=a.exports}}]);