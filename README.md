# uxt

#### 介绍
[uniapp](https://uniapp.dcloud.io/)组件库

#### 软件架构
参考color-ui封装为组件库。

#### 安装教程

1.  下载当前项目。
2.  将根目录下的uxt目录拷贝至你自己的项目下。
3.  App.vue中导入样式，如果你没有使用scss，请使用css语法导入`/uxt/uxt.css`。
    ``` scss
    <style lang="scss">
    @import '/uxt/uxt.scss';
    </style>
    ```
4.  main.js中导入uxt。
    ``` js
    import uxt from '@/uxt/uxt.js'
    import uxtLayout from '@/uxt/components/uxt-layout.vue'

    Vue.component('uxt-layout', uxtLayout)
    Vue.use(uxt)
    ```
5.  pages.json关闭原生导航栏。
    ``` json
    "globalStyle": {
		"navigationStyle": "custom"
	}
    ```

#### 使用说明

编写中，敬请期待。

#### 先睹为快

![](./h5.png)

H5 (请使用手机浏览器扫码体验)

![](./wx.png)

微信小程序 (请使用微信扫一扫功能扫码体验)

![](./apk.png)

Android (请使用手机浏览器扫码下载安装后体验)