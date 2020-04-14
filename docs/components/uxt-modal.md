
# uxt-modal 模态窗

---

### 属性
|名称|类型|默认值|说明|平台差异|
|-|-|-|-|-|
|classes|String|''|传入组件的class，只支持在App.vue中引入/定义的公共class|
|styles|Object|{}|传入组件的样式|
|color|String|''|前景色，支持[文本类](../style.md#文本类)(无text-前缀)及“#rgba”颜色值|
|bg-color|String|'white'|背景色，支持[背景类](../style.md#背景类)(无bg-前缀)及“#rgba”颜色值|
|value|Boolean|false|v-model绑定，通过该属性值控制模态框的打开和关闭|
|position|String|'center'|弹窗位置，[合法值](#position合法值)|
|width|String,Number||弹窗宽度，只对center,left,right起作用，为Number时单位为rpx，只支持rpx和px|
|height|String,Number||弹窗高度，只对center,top,bottom起作用，为Number时单位为rpx，只支持rpx和px|
|minWidth|String,Number||最小弹窗宽度，只对center,left,right起作用，为Number时单位为rpx，只支持rpx和px|
|minHeight|String,Number||最小弹窗高度，只对center,top,bottom起作用，为Number时单位为rpx，只支持rpx和px|
|maxWidth|String,Number||最大弹窗宽度，只对center,left,right起作用，为Number时单位为rpx，只支持rpx和px|
|maxHeight|String,Number||最大弹窗高度，只对center,top,bottom起作用，为Number时单位为rpx，只支持rpx和px|
|modal|Boolean|true|是否显示遮罩层|
|modal-close|Boolean|true|点击遮罩层是否关闭弹窗|
|opacity|String,Number|0.6|遮罩层透明度|
|title|String||弹窗标题|
|close|Boolean|false|是否显示关闭按钮|
|duration|String,Number|300|显示或关闭时动画持续时间，单位ms|

#### position合法值
|值|说明|平台差异|
|-|-|-|
|center|居中|
|full|全屏|
|left|居左|
|right|居右|
|top|居上|
|bottom|居下|

### 事件
|名称|说明|返回值|平台差异|
|-|-|-|-|
|open|打开窗口时触发，在动画执行前|无|
|opened|打开窗口后触发，在动画执行后|无|
|close|关闭窗口时触发，在动画执行前|无|
|closed|关闭窗口后触发，在动画执行后|无|

### slot
|名称|说明|平台差异|
|-|-|-|
|default|弹窗内容|