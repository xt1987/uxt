<template>
    <uxt-layout
        :back="layout.back"
        :footer-height="layout.footerHeight"
        :header-height="layout.headerHeight"
        :show-side="layout.showSide"
        :side-position="layout.sidePosition"
        :title="title"
        @sideclosed="layout.showSide = false"
    >
        <template
            slot="footer"
            v-if="layout.footer"
        >
            <uxt-tab-bar :items="bottomItems"></uxt-tab-bar>
        </template>
        <template slot="side">
            <view class="padding-tb-xl">
                <uxt-cell
                    right-arrow
                    title="菜单1"
                ></uxt-cell>
                <uxt-cell
                    right-arrow
                    title="菜单2"
                ></uxt-cell>
                <uxt-cell
                    right-arrow
                    title="菜单3"
                ></uxt-cell>
            </view>
        </template>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="顶部"
        ></uxt-title-bar>
        <uxt-cell
            @click="setLayout({})"
            right-arrow
            title="默认"
        ></uxt-cell>
        <uxt-cell
            @click="setLayout({ headerHeight: 0 })"
            right-arrow
            title="无导航栏"
        ></uxt-cell>
        <uxt-cell
            @click="setLayout({ back: false })"
            right-arrow
            title="无返回按钮"
        ></uxt-cell>
        <uxt-cell
            @click="go('/pages/jichu/layout-header')"
            right-arrow
            title="自定义顶部内容"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="底部"
        ></uxt-title-bar>
        <uxt-cell
            @click="setLayout({ footerHeight: 100, footer: true })"
            right-arrow
            title="底部自定义内容"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="侧边栏"
        ></uxt-title-bar>
        <uxt-cell
            @click="setLayout({ showSide: true })"
            right-arrow
            title="弹出侧边栏"
        ></uxt-cell>
        <uxt-cell
            @click="setLayout({ showSide: true, sidePosition: 'right' })"
            right-arrow
            title="右侧弹出"
        ></uxt-cell>
        <uxt-cell
            @click="setLayout({ showSide: true, autoCloseSide: true })"
            right-arrow
            title="3秒后自动关闭"
        ></uxt-cell>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtCell from '@/uxt/components/uxt-cell.vue'
import uxtTabBar from '@/uxt/components/uxt-tab-bar.vue'

export default {
    components: {
        uxtTitleBar,
        uxtCell,
        uxtTabBar
    },
    data() {
        let dfLayout = {
            headerHeight: '',
            back: true,
            footerHeight: '',
            header: false,
            footer: false,
            side: false,
            showSide: false,
            sidePosition: 'left',
            autoCloseSide: true
        }
        return {
            title: '布局组件',
            dfLayout,
            layout: dfLayout,
            bottomItems: [
                {
                    icon: '/static/tabbar/basics_active.png',
                    text: '元素',
                    color: 'df'
                },
                {
                    icon: '/static/tabbar/component.png',
                    text: '组件'
                },
                {
                    icon: '/static/tabbar/plugin.png',
                    text: '扩展',
                    badge: '99'
                },
                {
                    icon: '/static/tabbar/about.png',
                    text: '关于',
                    badge: '-'
                }
            ]
        }
    },
    methods: {
        setLayout(opt) {
            let t = 0
            if (this.header) {
                this.layout.header = true
                t = 10
            }
            setTimeout(() => {
                this.layout = Object.assign({}, this.dfLayout, opt)
            }, t)
            if (opt.autoCloseSide === true) {
                setTimeout(() => {
                    this.layout.showSide = false
                }, 3000)
            }
        },
        go(url) {
            uni.navigateTo({
                url
            })
        }
    }
}
</script>

<style>
</style>
