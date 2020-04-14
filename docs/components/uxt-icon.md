
# uxt-icon 图标

---

### 属性
|名称|类型|默认值|说明|平台差异|
|-|-|-|-|-|
|classes|String|''|传入组件的class，只支持在App.vue中引入/定义的公共class|
|styles|Object|{}|传入组件的样式|
|color|String|''|前景色，支持[文本类](../style.md#文本类)(无text-前缀)及“#rgba”颜色值|
|bg-color|String|''|背景色，支持[背景类](../style.md#背景类)(无bg-前缀)及“#rgba”颜色值|
|radius|Boolean|false|是否小圆角|
|round|Boolean|false|是否大圆角|
|type|String||图标类型，必填，支持的图标请查阅demo|
|size|String,Number|''|图标大小，[合法值](#size合法值)||
|animation|String||旋转动画，可选值`spin` `pulse`|
|hollow|String||镂空色，支持内置的15种颜色及“#rgba”颜色值，此时前景色和背景色均无效|

#### size合法值
|值|说明|平台差异|
|-|-|-|
|xs|20rpx|
|sm|24rpx|
|df|28rpx|
|lg|32rpx|
|xl|36rpx|
|xxl|44rpx|
|sl|80rpx|
|xsl|120rpx|
|数字|单位为rpx|
|数字rpx||
|数字px||

### 事件
|名称|说明|返回值|平台差异|
|-|-|-|-|
|click|点击时触发|$event，可通过data-方式协带数据|
