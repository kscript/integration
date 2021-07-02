---
title: 字符串与Unicode码数组相互转换
categories: js
tag: js
date: 2021/7/2 17:47:18
---

``` js
/**
 * 字符串与Unicode码数组相互转换
 * @func
 * @param a {string|array} 要转换的 字符串 或 Unicode码数组
 */
function code(a){
    return typeof a=='string'?Array.prototype.map.call(a,function(c){return c.charCodeAt(0)}):String.fromCharCode.apply(null,a);
}
```