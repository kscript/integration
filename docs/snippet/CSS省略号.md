---
title: CSS省略号
categories: css
tag: css
date: 2021/6/22 10:46:14
---
单行显示省略:
``` css
element {
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

多行显示省略
``` css
element {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /*省略行数*/
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```