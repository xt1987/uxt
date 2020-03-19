<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="size=sm/''"
            title="单选框大小"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-radio
                    checked
                    classes="margin-sm"
                ></uxt-radio>默认
            </label>
            <label>
                <uxt-radio
                    checked
                    classes="margin-sm"
                    size="sm"
                ></uxt-radio>sm
            </label>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="bg-color=[light-/gradual-]xx"
            title="单选框颜色"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-radio
                :bg-color="color"
                :key="color"
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-radio>
            <uxt-radio
                :bg-color="color"
                :key="color"
                classes="margin-sm"
                color="white"
                v-for="color in colors2"
            ></uxt-radio>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-radio
                :bg-color="`light-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-radio>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-radio
                :bg-color="`gradual-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-radio>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="checked disabled"
            title="单选框状态"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-radio
                    checked
                    classes="margin-sm"
                ></uxt-radio>选中
            </label>
            <label>
                <uxt-radio classes="margin-sm"></uxt-radio>未选中
            </label>
            <label>
                <uxt-radio
                    checked
                    classes="margin-sm"
                    disabled
                ></uxt-radio>禁用
            </label>
            <label>
                <uxt-radio
                    classes="margin-sm"
                    disabled
                ></uxt-radio>禁用
            </label>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="v-model=xx"
            title="v-model绑定"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-radio
                    classes="margin-sm"
                    v-model="checked"
                    values="a"
                ></uxt-radio>a
            </label>
            <label>
                <uxt-radio
                    classes="margin-sm"
                    v-model="checked"
                    values="b"
                ></uxt-radio>b
            </label>
            <label>
                <uxt-radio
                    classes="margin-sm"
                    v-model="checked"
                    values="c"
                ></uxt-radio>c
            </label>
            <label>
                <uxt-radio
                    classes="margin-sm"
                    v-model="checked"
                    values="d"
                ></uxt-radio>d
            </label>
        </view>
        <view class="bg-white padding-sm solid-bottom text-center">{{checked}}</view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtRadio from '@/uxt/components/uxt-radio.vue'

export default {
    components: {
        uxtTitleBar,
        uxtRadio
    },
    data() {
        return {
            title: '单选框',
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
                'brown'
            ],
            colors2: ['#f00', '#0f0', '#00f'],
            checked: ''
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
