<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="size=sm/lg/block"
            title="按钮大小"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-button size="sm">sm</uxt-button>
            <uxt-button classes="margin-left">默认</uxt-button>
            <uxt-button
                classes="margin-left"
                size="lg"
            >lg</uxt-button>
            <uxt-button
                classes="margin-top"
                size="block"
            >block</uxt-button>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="radius/round"
            title="按钮形状"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-button>默认</uxt-button>
            <uxt-button
                classes="margin-left"
                radius
            >radius</uxt-button>
            <uxt-button
                classes="margin-left"
                round
            >round</uxt-button>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=xx/颜色值"
            title="深色按钮"
        ></uxt-title-bar>
        <view class="padding text-center grid col-3">
            <view class="padding-sm">
                <uxt-button size="block">df</uxt-button>
            </view>
            <view
                :key="color"
                class="padding-sm"
                v-for="color in colors"
            >
                <uxt-button
                    :bg-color="color"
                    size="block"
                >{{color}}</uxt-button>
            </view>
            <view
                :key="color"
                class="padding-sm"
                v-for="color in colors2"
            >
                <uxt-button
                    :bg-color="color"
                    color="white"
                    size="block"
                >{{color}}</uxt-button>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=light-xx"
            title="浅色按钮"
        ></uxt-title-bar>
        <view class="padding text-center grid col-3">
            <block
                :key="index"
                v-for="(color, index) in colors"
            >
                <view
                    class="padding-sm"
                    v-if="index < colors.length - 3"
                >
                    <uxt-button
                        :bg-color="`light-${color}`"
                        radius
                        size="block"
                    >{{color}}</uxt-button>
                </view>
            </block>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=gradual-xx"
            title="渐变按钮"
        ></uxt-title-bar>
        <view class="padding grid col-3 text-center">
            <block
                :key="index"
                v-for="(color, index) in colors"
            >
                <view
                    class="padding-sm"
                    v-if="index < colors.length - 3"
                >
                    <uxt-button
                        :bg-color="`gradual-${color}`"
                        round
                        size="block"
                    >{{color}}</uxt-button>
                </view>
            </block>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="hollow=xx/颜色值"
            title="镂空按钮"
        ></uxt-title-bar>
        <view class="padding text-center grid col-3">
            <view class="padding-sm">
                <uxt-button
                    hollow="df"
                    size="block"
                >随系统</uxt-button>
            </view>
            <view class="padding-sm">
                <uxt-button
                    hollow="red"
                    radius
                    size="block"
                >内置</uxt-button>
            </view>
            <view class="padding-sm">
                <uxt-button
                    hollow="#0f0"
                    round
                    size="block"
                >自定义</uxt-button>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="shadow=xx"
            title="按钮阴影"
        ></uxt-title-bar>
        <view class="padding text-center grid col-3">
            <view
                :key="color"
                class="padding-sm"
                v-for="color in colors"
            >
                <uxt-button
                    :bg-color="color"
                    :shadow="color"
                    radius
                    size="block"
                >{{color}}</uxt-button>
            </view>
            <view
                :key="color"
                class="padding-sm"
                v-for="color in colors2"
            >
                <uxt-button
                    :bg-color="color"
                    :shadow="color"
                    color="white"
                    radius
                    size="block"
                >{{color}}</uxt-button>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="disabled"
            title="禁用按钮"
        ></uxt-title-bar>
        <view class="padding">
            <uxt-button
                disabled
                round
                size="block"
            >disabled</uxt-button>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="图标按钮"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-button
                hollow="orange"
                size="block"
            >
                <uxt-icon type="upload"></uxt-icon>upload
            </uxt-button>
            <uxt-button
                bg-color="blue"
                classes="margin-top"
                radius
                size="block"
            >
                <uxt-icon
                    animation="spin"
                    type="loading"
                ></uxt-icon>loading
            </uxt-button>
            <uxt-button
                bg-color="green"
                classes="margin-top"
                round
                size="block"
            >
                <uxt-icon
                    animation="pulse"
                    type="loading2"
                ></uxt-icon>loading2
            </uxt-button>
        </view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtButton from '@/uxt/components/uxt-button.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

export default {
    components: {
        uxtTitleBar,
        uxtButton,
        uxtIcon
    },
    data() {
        return {
            title: '按钮',
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
            ],
            colors2: ['#ff0000', '#00ff00', '#0000ff']
        }
    }
}
</script>

<style lang="scss" scoped>
.a {
    margin-left: 20rpx;
}
</style>
