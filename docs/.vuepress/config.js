// .vuepress/config.js
module.exports = {
  title: 'Articles',
  base: '/articles/',
  description: '教程-总结-思考',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/Menus/' },
      { text: 'Github', link: 'https://github.com/JiangWeixian/articles' },
    ],
    sidebar: {
      '/NZND/': [
        '',
        'Flexible一些应用以及思考',
        'ReactNative',
      ],
      '/I-O/': [
        '',
        'chrome浏览器移动端调试',
        'weex实录'
      ],
      '/Year/': [
        '',
        '2018',
      ],
      '/ProjectSummary/': [
        '',
        '2016-socket.io聊天室大致总结',
        '2018-simplemusic',
        '2018-tensorflow图像分类',
      ],
      '/Tutorial/': [
        '',
        'Linux-SS-PAC',
        '初始化Babel使用',
        '初始化Node项目',
        'Vue-Webpack从零开始',
        '终端实录',
        'GithubBuildBlogSite/GithubBuildBlogSite',
        'GithubBuildBlogSite/前期准备',
        'GithubBuildBlogSite/将代码托管到Github',
        'GithubBuildBlogSite/使用Github托管图片',
      ],
      '/Menus/': [
        ''
      ],
    }
  },
}
