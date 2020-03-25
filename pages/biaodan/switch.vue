<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="radius/round"
            title="开关形状"
        ></uxt-title-bar>
        <view class="bg-white padding-sm flex flex-wrap">
            <uxt-switch classes="margin-sm"></uxt-switch>
            <uxt-switch
                classes="margin-sm"
                radius
            ></uxt-switch>
            <uxt-switch
                classes="margin-sm"
                round
            ></uxt-switch>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="[light-/gradual-]xx"
            title="开关颜色"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-switch
                :bg-color="color"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-switch>
            <uxt-switch
                :bg-color="color"
                :key="color"
                checked
                classes="margin-sm"
                color="white"
                v-for="color in colors2"
            ></uxt-switch>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-switch
                :bg-color="`light-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                round
                v-for="color in colors"
            ></uxt-switch>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-switch
                :bg-color="`gradual-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                radius
                v-for="color in colors"
            ></uxt-switch>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="checkedIcon uncheckedIcon"
            title="开关图标"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-switch
                :checkedIcon="{type: 'check'}"
                :uncheckedIcon="{type: 'close'}"
                classes="margin-sm"
                radius
            ></uxt-switch>
            <uxt-switch
                :checkedIcon="{type: 'male'}"
                :uncheckedIcon="{type: 'female'}"
                classes="margin-sm"
                round
            ></uxt-switch>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="disabled"
            title="禁用开关"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-switch
                checked
                classes="margin-sm"
                disabled
                radius
            ></uxt-switch>
            <uxt-switch
                classes="margin-sm"
                disabled
                round
            ></uxt-switch>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="v-model=xx"
            title="v-model绑定"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap align-center">
            <uxt-switch
                classes="margin-sm"
                radius
                v-model="checked"
            ></uxt-switch>
            {{checked}}
            <uxt-switch
                :checked="checked"
                classes="margin-sm"
                disabled
                round
            ></uxt-switch>
        </view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtSwitch from '@xtcoder/uxt/components/uxt-switch.vue'

export default {
    components: {
        uxtTitleBar,
        uxtSwitch
    },
    data() {
        return {
            title: '开关',
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
            checked: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
