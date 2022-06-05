module.exports = {
  title: '轱辘 UI',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://baidu.com' },
    ],
    sidebar: [
      
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/'
        ],
      },
      {
        title: '组件',
        children: [
          '/components/button'
        ],
      },
    ]
  }
}