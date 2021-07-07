---
title: CSS过渡效果导致元素抖动
categories: css
tag: css
date: 2021/6/22 10:46:14
---
在设置了过渡效果的元素上, 加上样式:
``` css
element {
  backface-visibility: hidden;
}
```