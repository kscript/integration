---
title: element-ui弹框嵌套引发的遮罩bug
date: 2021/7/13 16:40:25
path: \js\element-ui弹框嵌套引发的遮罩bug.md
---

### 问题
在element-ui组件库中, Dialog 对话框、MessageBox 弹框也算是比较常用的组件了, 当我们在一个**处于相对定位元素下**的Dialog组件中, 打开MessageBox 弹框时, 可能会遇到下面例子中, 遮罩层覆盖到Dialog之上的bug
<iframe height="300" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/kscript/embed/vYmywEE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kscript/pen/vYmywEE">
  </a> by kscript (<a href="https://codepen.io/kscript">@kscript</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 解决方案
``` js
import PopupManager from 'element-ui/lib/utils/popup/popup-manager'
const modal = PopupManager.modalStack.pop();
PopupManager.openModal(modal.id, modal.zIndex, el);
```