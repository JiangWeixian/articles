(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{187:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"chrome浏览器移动端调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome浏览器移动端调试","aria-hidden":"true"}},[t._v("#")]),t._v(" chrome浏览器移动端调试")]),t._v(" "),a("blockquote",[a("p",[t._v("土豪版本")])]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("作为前端开发者，移动端调试少不了。")]),t._v(" "),a("p",[a("code",[t._v("google")]),t._v("是个良心企业，调试工具非常好用。无奈，大家都懂得。在看这一片之前，"),a("strong",[t._v("要确保能够科学上网")]),t._v("。")]),t._v(" "),a("p",[t._v("教程在"),a("code",[t._v("liunx")]),t._v("平台实现。")]),t._v(" "),a("h2",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),a("p",[t._v("浏览器除了"),a("code",[t._v("F12")]),t._v("进入调试界面。点击移动调试按钮选择移动设备之外，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/%E7%A7%BB%E5%8A%A8%E8%B0%83%E8%AF%95F12.png",alt:"移动调试界面"}})]),t._v(" "),a("p",[t._v("这个能够满足大部分要求。不过和真机还是有区别的，因此我们需要进入真实调试界面。也就是一部手机！")]),t._v(" "),a("p",[t._v("没有看错，我们的确需要一部手机（还有数据线）。")]),t._v(" "),a("h3",{attrs:{id:"step-1-adb-devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-adb-devices","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 1. adb devices")]),t._v(" "),a("p",[t._v("此外我们还需要Android工具"),a("code",[t._v("adb")]),t._v("，在"),a("code",[t._v("linux")]),t._v("平台安装也就一条命令的事情。（具体不太记得了，大家百度一下吧...）")]),t._v(" "),a("p",[t._v("连接上手机，手机端开启"),a("code",[t._v("USB调试")]),t._v("。在控制台输入：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("adb devices\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果出现没有权限，输入")]),t._v("\nadb kill-server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" adb start-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 出现一下就是成功了")]),t._v("\nList of devices attached \nHT69K0207609\tdevice\n")])])]),a("p",[t._v("我基本上每次连手机，都要这么来一遍。")]),t._v(" "),a("p",[a("strong",[t._v("不靠谱的来了，我电脑是安装了andriod studio。如果大家还是出错了，就下一遍andriod studio(没有科学上网玩不了这个)")])]),t._v(" "),a("h3",{attrs:{id:"step-2-chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-chrome","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 2. chrome")]),t._v(" "),a("p",[t._v("以上工作已经完成了大半。其次还需要在手机上安装"),a("code",[t._v("chrome")]),t._v("浏览器。")]),t._v(" "),a("p",[t._v("浏览器地址输入："),a("code",[t._v("chrome://inspect/#devices")]),t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/chrome-inspect.png",alt:"chrome-inspect"}})]),t._v(" "),a("ul",[a("li",[t._v("我是在webstorm上写的代码，所以端口基本就是8080。所以在portforwad那一栏，写上")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/portforwd.png",alt:"portforward"}})]),t._v(" "),a("p",[t._v("然后下面输入栏目写下地址，如果是开发页面就是"),a("code",[t._v("localhost:8080")])]),t._v(" "),a("p",[a("strong",[t._v("要使用这个功能，第一次的时候需要下载一些东西。如果运气好，不翻墙也可以。翻墙了也要一点时间，希望大家能够等待。")])])])}],!1,null,null,null);e.default=r.exports}}]);