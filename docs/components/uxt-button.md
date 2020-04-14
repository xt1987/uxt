
# uxt-button 按钮

---

### 属性
|名称|类型|默认值|说明|平台差异|
|-|-|-|-|-|
|classes|String|''|传入组件的class，只支持在App.vue中引入/定义的公共class|
|styles|Object|{}|传入组件的样式|
|color|String|''|前景色，支持[文本类](../style.md#文本类)(无text-前缀)及“#rgba”颜色值|
|bg-color|String|'theme'|背景色，支持[背景类](../style.md#背景类)(无bg-前缀)及“#rgba”颜色值|
|radius|Boolean|false|是否小圆角|
|round|Boolean|false|是否大圆角|
|size|String|''|大小，[合法值](#size合法值)|
|shadow|String||阴影，支持内置的15种颜色及“#rgba”颜色值|
|hollow|String||镂空按钮，此时color,bg-color无效，支持内置的15种颜色及“#rgba”颜色值|
|disabled|Boolean|false|是否禁用|
|form-type|String|''|触发uxt-form组件submit/reset，[合法值](#form-type合法值)|
|open-type|String|''|开放能力，[合法值](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)|微信小程序|
> 与微信小程序开放能力相关的属性请查阅[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

#### size合法值
|值|说明|平台差异|
|-|-|-|
|sm|小|
|lg|大|
|block|块状按钮，占父容器整行|

#### form-type合法值
|值|说明|平台差异|
|-|-|-|
|submit|提交表单|
|reset|重置表单|


### 事件
|名称|说明|返回值|平台差异|
|-|-|-|-|
|click|点击时触发|$event，可通过data-方式协带数据|
> 与微信小程序开放能力相关的回调事件请查阅[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

### slot
|名称|说明|平台差异|
|-|-|-|
|default|按钮内容|