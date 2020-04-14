
# 快速上手

---

## 安装
1. `npm init -y`初始化您的uniapp项目。
2. `npm install @xtcoder/uxt`安装uxt包，版本请查看[版本日志](./update)。

## 项目配置
1. App.vue中导入全局样式。
    ``` scss
	// App.vue
    <style lang="scss">
    @import '@xtcoder/uxt/uxt.scss';
    </style>
    ```
1. main.js中导入uxt。
    ``` js
	// main.js
    import uxt from '@xtcoder/uxt/uxt.js'
    import uxtPage from '@xtcoder/uxt/components/uxt-page.vue'

    Vue.component('uxt-page', uxtPage) // 建议全局注册该组件
    Vue.use(uxt)
    ```
1. pages.json关闭原生导航栏。
    ``` json
    "globalStyle": {
		"navigationStyle": "custom"
	}
    ```

## 使用组件
- 页面中使用组件与您的自定义组件完全一致，只是引入路径不同。建议每个页面都用uxt-page组件包裹。
    ``` vue
    <template>
        <uxt-page :title="title">
            <uxt-xxx prop1="" prop2="">
            </uxt-xxx>
        </uxt-page>
    </template>

    <script>
    import uxtXXX from '@xtcoder/uxt/components/uxt-xxx.vue'

    export default {
        components: {
            uxtXXX
        },
        data() {
            return {
                title: '页面标题'
            }
        }
    }
    </script>

    <style lang="scss" scoped>
    </style>
    ```

## 更改主题
-	很多组件中带有默认主题色(默认为绿色)，如需更换默认主题颜色，可在uni.scss文件中增加如下变量。
	``` scss
	$theme-color: #0081ff; // 主背景色
	$theme-color-text: #fff; // 主背景色对应的文本色
	$theme-color-light: #cce6ff; // 亮背景色
	$theme-color-gradual1: #0081ff; // 渐变开始颜色
	$theme-color-gradual2: #1cbbb4; // 渐变结束颜色
	```