<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="size=df/lg/xl"
            title="大小"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="默认"
            ></uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                focus
                placeholder="大lg"
                size="lg"
            ></uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="超大xl"
                size="xl"
            ></uxt-input-box>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="radius/round"
            title="形状"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="radius"
                radius
                size="lg"
            ></uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="round"
                round
                size="lg"
            ></uxt-input-box>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="borderColor=xx/颜色值"
            title="边框颜色"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                border-color="red"
                classes="margin-top-sm"
                placeholder="borderColor=red"
                round
                size="lg"
            ></uxt-input-box>
            <uxt-input-box
                border-color="#0f0"
                classes="margin-top-sm"
                placeholder="borderColor=#0f0"
                round
                size="lg"
            ></uxt-input-box>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bgColor"
            title="背景颜色"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                bg-color="light-blue"
                classes="margin-top-sm"
                placeholder="背景"
                round
                size="lg"
            ></uxt-input-box>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="left slot"
            title="左侧内容"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="left slot"
                radius
                size="lg"
            >
                <template slot="left">
                    <view class="margin-left-xs">姓名：</view>
                </template>
            </uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="left slot"
                round
                size="lg"
            >
                <template slot="left">
                    <uxt-icon
                        classes="margin-left-xs"
                        type="search"
                    ></uxt-icon>
                </template>
            </uxt-input-box>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="right slot"
            title="右侧内容"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="right slot"
                radius
                size="lg"
            >
                <template slot="left">
                    <view
                        class="bg-gray padding-lr-sm flex align-center radius-tl radius-bl solid-right"
                        style="height: 66rpx;"
                    >http://www.</view>
                </template>
                <template slot="right">
                    <view class="margin-right-xs">.com</view>
                </template>
            </uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="right slot"
                round
                size="lg"
            >
                <template slot="right">
                    <uxt-icon
                        classes="margin-right-xs"
                        type="search"
                    ></uxt-icon>
                </template>
            </uxt-input-box>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="v-model"
            title="双向绑定"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                classes="margin-top-sm"
                clearable
                placeholder="v-model"
                round
                size="lg"
                v-model="val"
            ></uxt-input-box>
            <view class="padding-sm">{{val}}</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="radius/round"
            title="输入类型"
        ></uxt-title-bar>
        <view class="bg-white padding-sm">
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="password"
                round
                size="lg"
                type="password"
            ></uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="number"
                round
                size="lg"
                type="number"
            ></uxt-input-box>
            <!-- #ifdef MP -->
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="idcard"
                round
                size="lg"
                type="idcard"
            ></uxt-input-box>
            <uxt-input-box
                classes="margin-top-sm"
                placeholder="digit"
                round
                size="lg"
                type="digit"
            ></uxt-input-box>
            <!-- #endif -->
        </view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtInputBox from '@/uxt/components/uxt-input-box.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

export default {
    components: {
        uxtTitleBar,
        uxtInputBox,
        uxtIcon
    },
    data() {
        return {
            title: '输入框',
            val: ''
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
