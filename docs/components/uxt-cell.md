
# uxt-bar 单元格

---

### 属性
|名称|类型|默认值|说明|平台差异|
|-|-|-|-|-|
|classes|String|''|传入组件的class，只支持在App.vue中引入/定义的公共class|
|styles|Object|{}|传入组件的样式|
|color|String|''|前景色，支持[文本类](../style.md#文本类)(无text-前缀)及“#rgba”颜色值|
|bg-color|String|'white'|背景色，支持[背景类](../style.md#背景类)(无bg-前缀)及“#rgba”颜色值|
|title|String|''|左侧标题|
|value|String|''|右侧内容|
|desc|String|''|左下方说明文字|
|arrow|Boolean|false|是否显示右侧箭头|
|url|String||点击打开页面url|

### 事件
|名称|说明|返回值|平台差异|
|-|-|-|-|
|click|点击时触发|$event，可通过data-方式协带数据|

### slot
|名称|说明|平台差异|
|-|-|-|
|left|左侧内容，在title前面|
|right|右侧内容，在value和右箭头中间|

