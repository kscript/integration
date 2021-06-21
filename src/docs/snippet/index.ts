const list: MenuList = [
  {
    title: 'CSS',
    menu: [
      {
        title: 'CSS省略号',
        path: 'CSS省略号.md',
        content: require('./CSS省略号.md').default.render()
      },
      {
        title: 'CSS夜间主题',
        path: 'CSS夜间主题.md',
        content: require('./CSS夜间主题.md').default.render()
      },
      {
        title: 'CSS灰色效果',
        path: 'CSS灰色效果.md',
        content: require('./CSS灰色效果.md').default.render()
      },
      {
        title: 'CSS过渡效果导致元素抖动',
        path: 'CSS过渡效果导致元素抖动.md',
        content: require('./CSS过渡效果导致元素抖动.md').default.render()
      },
    ]
  },
];
export default list