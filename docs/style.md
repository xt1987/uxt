# 内置样式

---

[[toc]]

### 色彩
> UXT内置15种色彩(继承自colorui)

<div class="colors">
    <div class="red">red</div>
    <div class="orange">orange</div>
    <div class="yellow">yellow</div>
    <div class="olive">olive</div>
    <div class="green">green</div>
    <div class="cyan">cyan</div>
    <div class="blue">blue</div>
    <div class="purple">purple</div>
    <div class="mauve">mauve</div>
    <div class="pink">pink</div>
    <div class="brown">brown</div>
    <div class="grey">grey</div>
    <div class="gray">gray</div>
    <div class="black">black</div>
    <div class="white">white</div>
</div>

<style scoped>
.colors {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    background-color: #ccc;
    border-radius: 5px;
}
.colors > div {
    width: 80px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
}
.colors > .red {
    background-color: #e54d42;
}
.colors > .orange {
    background-color: #f37b1d;
}
.colors > .yellow {
    color: #333;
    background-color: #fbbd08;
}
.colors > .olive {
    background-color: #8dc63f;
}
.colors > .green {
    background-color: #39b54a;
}
.colors > .cyan {
    background-color: #1cbbb4;
}
.colors > .blue {
    background-color: #0081ff;
}
.colors > .purple {
    background-color: #6739b6;
}
.colors > .mauve {
    background-color: #9c26b0;
}
.colors > .pink {
    background-color: #e03997;
}
.colors > .brown {
    background-color: #a5673f;
}
.colors > .grey {
    background-color: #aaa;
}
.colors > .gray {
    color: #333;
    background-color: #f0f0f0;
}
.colors > .black {
    background-color: #333;
}
.colors > .white {
    color: #666;
    background-color: #fff;
}
</style>

### 背景类
> bg-开头
``` vue
<!-- 跟随主题色 -->
<view class="bg-theme"></view>

<!-- bg-xx(15种内置颜色) -->
<view class="bg-red"></view>
<view class="bg-green"></view>
<view class="bg-blue"></view>

<!-- 亮色背景 bg-light-xx(除gray,black,white外的12种内置颜色) -->
<view class="bg-light-red"></view>
<view class="bg-light-green"></view>
<view class="bg-light-blue"></view>

<!-- 渐变背景 bg-gradual-xx(除gray,black,white外的12种内置颜色) -->
<view class="bg-gradual-red"></view>
<view class="bg-gradual-green"></view>
<view class="bg-gradual-blue"></view>

<!-- 背景增加蒙层 -->
<view class="bg-mask"></view>

<!-- 用于图片背景 -->
<view class="bg-img bg-mask" style="background-image: url(xxx.png);"></view>

<!-- 用于视频背景 -->
<view class="bg-video bg-mask">
    <video></video>
</view>

<!-- 用于图片或视频背景上的文字效果 -->
<view class="bg-shadeTop"></view>
<view class="bg-shadeBottom"></view>
```

### 文本类
> text-开头
``` vue
<!-- 文本颜色 跟随主题 -->
<view class="text-theme"></view>

<!-- 文本颜色 text-xx(15种内置颜色) -->
<view class="text-red"></view>
<view class="text-green"></view>
<view class="text-blue"></view>

<!-- 文本大小 -->
<view class="text-xs">20rpx</view>
<view class="text-sm">24rpx</view>
<view class="text-df">28rpx</view>
<view class="text-lg">32rpx</view>
<view class="text-xl">36rpx</view>
<view class="text-xxl">44rpx</view>
<view class="text-sl">80rpx</view>
<view class="text-xsl">120rpx</view>

<!-- 文本阴影 -->
<view class="text-red text-shadow"></view>

<!-- 首字母大写 -->
<view class="text-Abc">abc->Abc</view>
<!-- 全大写 -->
<view class="text-ABC">abc->ABC</view>
<!-- 全小写 -->
<view class="text-abc">ABC->abc</view>

<!-- 金额(¥80) -->
<view class="text-price">80</view>

<!-- 截断 -->
<view class="text-cut">显示...</view>

<!-- 加粗 -->
<view class="text-bold"></view>

<!-- 位置 -->
<view class="text-left">居左</view>
<view class="text-center">居中</view>
<view class="text-right">居右</view>
```

### 圆角&圆形
> radius/round开头
``` vue
<!-- 圆角 -->
<view class="radius"></view>
<!-- 左上圆角 -->
<view class="radius-lt"></view>
<!-- 右上圆角 -->
<view class="radius-rt"></view>
<!-- 左下圆角 -->
<view class="radius-lb"></view>
<!-- 右下圆角 -->
<view class="radius-rb"></view>

<!-- 圆形 -->
<view class="round"></view>
<!-- 左上圆形 -->
<view class="round-lt"></view>
<!-- 右上圆形 -->
<view class="round-rt"></view>
<!-- 左下圆形 -->
<view class="round-lb"></view>
<!-- 右下圆形 -->
<view class="round-rb"></view>
```

### 边框类
> solid/dashed开头
``` vue
<!-- 实线边框 -->
<view class="solid">细</view>
<view class="solids">粗</view>

<!-- 虚线边框 -->
<view class="dashed">细</view>
<view class="dasheds">粗</view>

<!-- 边框位置，solids,dashed,dasheds类似 -->
<view class="solid-top">上</view>
<view class="solid-bottom">下</view>
<view class="solid-left">左</view>
<view class="solid-right">右</view>

<!-- 边框颜色 跟随主题，solids,dashed,dasheds类似 -->
<view class="solid-theme"></view>
<!-- 边框颜色 solid-xx(15种内置颜色)，solids,dashed,dasheds类似 -->
<view class="solid-red"></view>
<view class="solid-top-green"></view>
<view class="solid-bottom-blue"></view>
<view class="solid-left-yellow"></view>
<view class="solid-right-cyan"></view>
```

### 阴影类
> shadow开头
``` vue
<!-- 阴影类型，不带颜色时默认颜色为前景色 -->
<view class="shadow">右下阴影</view>
<view class="shadow-wrap">发散阴影</view>

<!-- 随影颜色 跟随主题，，shadow-wrap类似 -->
<view class="solid-theme"></view>
<!-- 阴影颜色 shadow-xx(15种内置颜色)，shadow-wrap类似 -->
<view class="shadow-red"></view>
<view class="shadow-green"></view>
<view class="shadow-blue"></view>
```

### 布局类
``` vue
<!-- flex布局，默认横向 -->
<view class="flex">
    <view>1</view>
    <view>2</view>
</view>

<!-- 内联flex布局，默认横向 -->
<view class="flex-line">
    <view>1</view>
    <view>2</view>
</view>

<!-- 纵向flex布局，也可配合flex-line -->
<view class="flex flex-col">
    <view>1</view>
    <view>2</view>
</view>

<!-- 反转横向flex布局，也可配合flex-line -->
<view class="flex flex-reverse">
    <view>2</view>
    <view>1</view>
</view>

<!-- 反转纵向flex布局，也可配合flex-line -->
<view class="flex flex-col">
    <view>2</view>
    <view>1</view>
</view>

<!-- 内容超宽后自动换行 -->
<view class="flex flex-wrap">
    <view>1</view>
    ...
    <view>n</view>
</view>

<!-- 子元素占比 -->
<view class="flex">
    <view class="flex-sub">1</view>
    <view class="flex-twice">2</view>
    <view class="flex-treble">3</view>
</view>

<!-- 子元素占比 -->
<view class="flex">
    <view class="flex-sub">1</view>
    <view class="flex-twice">2</view>
    <view class="flex-treble">3</view>
</view>

<!-- 主轴比例 -->
<view class="flex flex-wrap">
    <view class="basis-xs">20%</view>
    <view class="basis-sm">40%</view>
    <view class="basis-df">50%</view>
    <view class="basis-lg">60%</view>
    <view class="basis-xl">80%</view>
</view>

<!-- 主轴对齐方式 -->
<view class="flex justify-end">
    <view>1</view>
    <view>2</view>
</view>
<view class="flex justify-center">
    <view>1</view>
    <view>2</view>
</view>
<view class="flex justify-between">
    <view>1</view>
    <view>2</view>
</view>
<view class="flex justify-around">
    <view>1</view>
    <view>2</view>
</view>

<!-- 交叉轴对齐方式 -->
<view class="flex align-start">
    <view>1</view>
    <view>2</view>
</view>
<view class="flex align-end">
    <view>1</view>
    <view>2</view>
</view>
<view class="flex align-center">
    <view>1</view>
    <view>2</view>
</view>
<view class="flex align-baseline">
    <view>1</view>
    <view>2</view>
</view>

<!-- 子元素单独设置交叉轴对齐方式 -->
<view class="flex">
    <view class="self-start">1</view>
    <view>2</view>
</view>
<view class="flex">
    <view class="self-end">1</view>
    <view>2</view>
</view>
<view class="flex">
    <view class="self-center">1</view>
    <view>2</view>
</view>
<view class="flex">
    <view class="self-baseline">1</view>
    <view>2</view>
</view>
<view class="flex">
    <view class="self-stretch">1</view>
    <view>2</view>
</view>

<!-- grid布局 col-(1-5) -->
<view class="grid col-3">
    <view>1</view>
    ...
    <view>n</view>
</view>

<!-- grid正方形 -->
<view class="grid col-3 grid-square">
    <view>1</view>
    ...
    <view>n</view>
</view>

<!-- 浮动 -->
<view class="cf">
    <view class="fl"></view>
    <view class="fr"></view>
</view>
```

### 内外边距类
> margin/padding开头
``` vue
<!-- 外边距 -->
<view class="margin"></view>
<!-- 内边距 -->
<view class="padding"></view>

<!-- 边距位置,padding类似 -->
<view class="margin-top">上</view>
<view class="margin-bottom">下</view>
<view class="margin-left">左</view>
<view class="margin-right">右</view>
<view class="margin-tb">上下</view>
<view class="margin-lr">左右</view>

<!-- 边距大小,padding类似 -->
<view class="margin-0"></view>
<view class="margin-xs"></view>
<view class="margin-top-sm"></view>
<view class="margin-left-lg"></view>
<view class="margin-tb-xl"></view>
```

### 动画类
> ani-开头
``` vue
<!-- 动画类型 -->
<view class="ani-fade"></view>
<view class="ani-shake"></view>
<view class="ani-scale-up"></view>
<view class="ani-scale-down"></view>
<view class="ani-slide-top"></view>
<view class="ani-slide-bottom"></view>
<view class="ani-slide-left"></view>
<view class="ani-slide-right"></view>

<!-- 反转动画 -->
<view class="ani-fade ani-reverse"></view>
```