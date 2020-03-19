<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="size=sm/''"
            title="复选框大小"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-checkbox
                    checked
                    classes="margin-sm"
                ></uxt-checkbox>默认
            </label>
            <label>
                <uxt-checkbox
                    checked
                    classes="margin-sm"
                    size="sm"
                ></uxt-checkbox>sm
            </label>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="bg-color=[light-/gradual-]xx"
            title="复选框颜色"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                :bg-color="color"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-checkbox>
            <uxt-checkbox
                :bg-color="color"
                :key="color"
                checked
                classes="margin-sm"
                color="white"
                v-for="color in colors2"
            ></uxt-checkbox>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                :bg-color="`light-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-checkbox>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                :bg-color="`gradual-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="checked disabled"
            title="复选框状态"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-checkbox
                    checked
                    classes="margin-sm"
                ></uxt-checkbox>选中
            </label>
            <label>
                <uxt-checkbox classes="margin-sm"></uxt-checkbox>未选中
            </label>
            <label>
                <uxt-checkbox
                    checked
                    classes="margin-sm"
                    disabled
                ></uxt-checkbox>禁用
            </label>
            <label>
                <uxt-checkbox
                    classes="margin-sm"
                    disabled
                ></uxt-checkbox>禁用
            </label>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="v-model=xx"
            title="v-model绑定(单个)"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-checkbox
                    classes="margin-sm"
                    v-model="checked"
                ></uxt-checkbox>
                {{checked}}
            </label>
            <label>
                <uxt-checkbox
                    :checked="checked"
                    classes="margin-sm"
                    disabled
                ></uxt-checkbox>:checked="checked"
            </label>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="v-model=xx"
            title="v-model绑定(多个)"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <label>
                <uxt-checkbox
                    classes="margin-sm"
                    v-model="checkeds"
                    values="a"
                ></uxt-checkbox>a
            </label>
            <label>
                <uxt-checkbox
                    classes="margin-sm"
                    v-model="checkeds"
                    values="b"
                ></uxt-checkbox>b
            </label>
            <label>
                <uxt-checkbox
                    classes="margin-sm"
                    v-model="checkeds"
                    values="c"
                ></uxt-checkbox>c
            </label>
            <label>
                <uxt-checkbox
                    classes="margin-sm"
                    v-model="checkeds"
                    values="d"
                ></uxt-checkbox>d
            </label>
        </view>
        <view class="bg-white padding-sm solid-bottom text-center">{{checkeds.join(',')}}</view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtCheckbox from '@/uxt/components/uxt-checkbox.vue'

export default {
    components: {
        uxtTitleBar,
        uxtCheckbox
    },
    data() {
        return {
            title: '复选框',
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
            checked: true,
            checkeds: []
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
