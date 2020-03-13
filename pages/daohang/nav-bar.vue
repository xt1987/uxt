<template>
    <uxt-layout :title="title">
        <uxt-nav-bar classes="margin-top-sm">默认</uxt-nav-bar>
        <uxt-nav-bar
            :back="false"
            classes="margin-top-sm"
        >无返回按钮</uxt-nav-bar>
        <uxt-nav-bar classes="margin-top-sm">
            <template slot="left">返回</template>
            带返回文字说明
        </uxt-nav-bar>
        <uxt-nav-bar
            :back="false"
            classes="margin-top-sm"
        >
            <template slot="left">
                <view class="padding-sm inline-block">
                    <uxt-icon type="home"></uxt-icon>
                </view>首页
            </template>
            自定义左侧内容
        </uxt-nav-bar>
        <uxt-nav-bar
            :back="false"
            classes="margin-top-sm"
        >
            <template slot="left">
                <view class="padding-sm inline-block">
                    <uxt-icon type="close"></uxt-icon>
                </view>关闭
            </template>
            左侧关闭
        </uxt-nav-bar>
        <uxt-nav-bar
            :back="false"
            classes="margin-top-sm"
        >
            <template slot="left">
                <uxt-avatar
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    classes="margin-left-sm"
                    round
                ></uxt-avatar>
            </template>
            超长标题超长标题超长标题超长标题超长标题
        </uxt-nav-bar>
        <uxt-nav-bar classes="margin-top-sm">
            自定义右侧内容
            <template slot="right">
                右侧
                <view class="padding-sm inline-block">
                    <uxt-icon type="more"></uxt-icon>
                </view>
            </template>
        </uxt-nav-bar>
        <uxt-nav-bar
            bg-color="green"
            classes="margin-top-sm"
        >
            深色背景
            <template slot="right">
                深圳
                <view class="padding-xs inline-block">
                    <uxt-icon type="triangledownfill"></uxt-icon>
                </view>
            </template>
        </uxt-nav-bar>
        <uxt-nav-bar
            bg-color="light-red"
            classes="margin-top-sm"
        >
            浅色背景
            <template slot="right">
                <uxt-icon
                    classes="margin-right-sm"
                    color="grey"
                    type="cardboardfill"
                ></uxt-icon>
                <uxt-icon
                    classes="margin-right-sm"
                    color="red"
                    type="recordfill"
                ></uxt-icon>
            </template>
        </uxt-nav-bar>
        <uxt-nav-bar
            bg-color="gradual-pink"
            classes="margin-top-sm"
        >渐变背景</uxt-nav-bar>
        <uxt-nav-bar
            :back="false"
            bg-color="red"
            classes="margin-top-sm"
            search
        >
            <template slot="left">
                <uxt-avatar
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    classes="margin-left-sm"
                    round
                ></uxt-avatar>
            </template>
            <uxt-input-box
                bg-color="white"
                placeholder="搜索"
                radius
                size="lg"
            >
                <template slot="left">
                    <uxt-icon
                        classes="margin-left-sm"
                        type="search"
                    ></uxt-icon>
                </template>
            </uxt-input-box>
        </uxt-nav-bar>
        <uxt-nav-bar
            :back="false"
            :search="{shape: 'round', placeholder: '搜索图片、文章、视频'}"
            bg-color="cyan"
            classes="margin-top-sm"
        >
            <uxt-input-box
                bg-color="white"
                placeholder="搜索图片/文章/视频"
                round
                size="lg"
            >
                <template slot="left">
                    <uxt-icon
                        classes="margin-left-sm"
                        type="search"
                    ></uxt-icon>
                </template>
            </uxt-input-box>
            <template slot="right">
                <uxt-icon type="close"></uxt-icon>
                <view class="margin-right-sm">取消</view>
            </template>
        </uxt-nav-bar>
    </uxt-layout>
</template>

<script>
import uxtNavBar from '@/uxt/components/uxt-nav-bar.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'
import uxtAvatar from '@/uxt/components/uxt-avatar.vue'
import uxtInputBox from '@/uxt/components/uxt-input-box.vue'

export default {
    components: {
        uxtNavBar,
        uxtIcon,
        uxtAvatar,
        uxtInputBox
    },
    data() {
        return {
            title: '顶部导航栏'
        }
    }
}
</script>

<style>
</style>
