<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-xx"
            title="深色背景"
        ></uxt-title-bar>
        <view class="grid col-3 padding-sm">
            <view
                :key="index"
                class="padding-sm"
                v-for="(item, index) in colors"
            >
                <view
                    :class="[`bg-${item}`]"
                    class="padding radius text-center"
                >{{item}}</view>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-light-xx"
            title="浅色背景"
        ></uxt-title-bar>
        <view class="grid col-3 padding-sm">
            <block
                :key="index"
                v-for="(item, index) in colors"
            >
                <view
                    class="padding-sm"
                    v-if="index < colors.length - 3"
                >
                    <view
                        :class="[`bg-light-${item}`]"
                        class="padding radius text-center"
                    >{{item}}</view>
                </view>
            </block>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-gradual-xx"
            title="渐变背景"
        ></uxt-title-bar>
        <view class="grid col-2 padding-sm">
            <block
                :key="index"
                v-for="(item, index) in colors"
            >
                <view
                    class="padding-sm"
                    v-if="index < colors.length - 3"
                >
                    <view
                        :class="[`bg-gradual-${item}`]"
                        class="padding radius text-center"
                    >{{item}}</view>
                </view>
            </block>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="shadow-xx bg-xx"
            title="背景阴影"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="margin-sm padding-sm text-center shadow-green bg-green radius">shadow-green bg-green</view>
            <view class="margin-sm padding-sm text-center shadow-wrap-blue bg-blue radius">shadow-wrap-blue bg-blue</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-img[ bg-mask]"
            title="图片背景"
        ></uxt-title-bar>
        <view
            class="bg-img bg-mask flex align-center"
            style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414rpx;"
        >
            <view class="padding-xl text-white">
                <view class="padding-xs text-xxl text-bold">钢铁之翼</view>
                <view class="padding-xs text-lg">Only the guilty need fear me.</view>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-video[ bg-mask]"
            title="视频背景"
        ></uxt-title-bar>
        <view
            class="bg-video bg-mask flex align-center"
            style="height: 422rpx;"
        >
            <video
                :controls="false"
                :show-play-btn="false"
                autoplay
                loop
                muted
                objectFit="cover"
                src="https://yz.lol.qq.com/v1/assets/videos/aatrox-splashvideo.webm"
            ></video>
            <cover-view class="padding-xl text-white">
                <cover-view class="padding-xs text-xxl text-bold">暗裔剑魔</cover-view>
                <cover-view class="padding-xs">我必须连同希望一起毁坏……</cover-view>
            </cover-view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-shadeTop/bg-shadeBottom"
            title="透明背景(文字层)"
        ></uxt-title-bar>
        <view class="grid col-2">
            <view
                class="bg-img padding-bottom-xl"
                style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 207upx;"
            >
                <view class="bg-shadeTop padding padding-bottom-xl">上面开始</view>
            </view>
            <view
                class="bg-img padding-top-xl flex align-end"
                style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 207upx;"
            >
                <view class="bg-shadeBottom padding padding-top-xl flex-sub">下面开始</view>
            </view>
        </view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'

export default {
    components: {
        uxtTitleBar
    },
    data() {
        return {
            title: '背景',
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
