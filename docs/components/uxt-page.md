
# uxt-page 页面容器

---

### 属性
|名称|类型|默认值|说明|平台差异|
|-|-|-|-|-|
|headerHeight|String,Number||顶部高度, 默认为导航栏+状态栏高度，无header slot时默认显示导航栏，传0不显示顶部，为Number时单位为rpx，只支持rpx和px|
|headerBgColor|String|'theme'|顶部背景颜色，支持[背景类](../style.md#背景类)(无bg-前缀)及“#rgba”颜色值|
|title|String||页面标题|
|back|Boolean|true|是否显示返回按钮图标|
|footerHeight|String,Number||底部高度，为Number时单位为rpx，只支持rpx和px|
|show-side|Boolean|false|是否显示侧边栏，外部可通过该属性值控制侧边栏的显示与隐藏|
|side-position|String|'left'|侧边栏位置，可选值还有`right`|

### 事件
|名称|说明|返回值|平台差异|
|-|-|-|-|
|sideopened|打开侧边栏后触发|无|
|sideclosed|关闭侧边栏后触发|无|

### slot
|名称|说明|平台差异|
|-|-|-|
|default|按钮内容|