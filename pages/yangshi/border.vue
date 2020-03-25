<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="solid[s]/dashed[s][-top/right/bottom/left]"
            title="边框位置"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="margin-sm solid padding-sm text-center">solid[s]</view>
            <view class="margin-sm solid-top padding-sm text-center">solid[s]-top</view>
            <view class="margin-sm solid-right padding-sm text-center">solid[s]-right</view>
            <view class="margin-sm solid-bottom padding-sm text-center">solid[s]-bottom</view>
            <view class="margin-sm solid-left padding-sm text-center">solid[s]-left</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="solid[s]/dashed[s][-...]"
            title="边框粗细"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="margin-sm solid padding-sm text-center">solid</view>
            <view class="margin-sm solids padding-sm text-center">solids</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="solid/dashed[ round/radius]"
            title="边框样式"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="margin-sm solid padding-sm text-center">solid</view>
            <view class="margin-sm solid radius padding-sm text-center">solid radius</view>
            <view class="margin-sm solid round padding-sm text-center">solid round</view>
            <view class="margin-sm dashed padding-sm text-center">dashed</view>
            <view class="margin-sm dashed radius padding-sm text-center">dashed radius</view>
            <view class="margin-sm dashed round padding-sm text-center">dashed round</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="solid-xx"
            title="边框颜色"
        ></uxt-title-bar>
        <view class="padding">
            <view
                :class="[`solid-${item}`]"
                :key="index"
                class="margin-sm padding-sm text-center"
                v-for="(item, index) in colors"
            >{{item}}</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="shadow[-wrap]"
            title="边框阴影"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view
                :class="[`text-theme`]"
                class="margin-sm padding-sm text-center shadow"
            >shadow</view>
            <view
                :class="[`text-theme`]"
                class="margin-sm margin-top-lg padding-sm text-center shadow-wrap"
            >shadow-wrap</view>
        </view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'

export default {
    components: {
        uxtTitleBar
    },
    data() {
        return {
            theme: this.gTheme,
            title: '边框',
            colors: [
                'red',
                'orange',
                'yellow',
                'olive',
                'green',
                'cyan',
                'blue',
                'purple',
                'mauve',
                'pink',
                'brown',
                'grey',
                'gray',
                'black',
                'white'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
