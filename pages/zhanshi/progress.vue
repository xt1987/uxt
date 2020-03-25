<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="size=sm/xs"
            title="进度条大小"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress :loading="60"></uxt-progress>
            <uxt-progress
                :loading="60"
                classes="margin-top-sm"
                size="sm"
            ></uxt-progress>
            <uxt-progress
                :loading="60"
                classes="margin-top-sm"
                size="xs"
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="radius/round"
            title="进度条形状"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress :loading="60"></uxt-progress>
            <uxt-progress
                :loading="60"
                classes="margin-top-sm"
                radius
            ></uxt-progress>
            <uxt-progress
                :loading="60"
                classes="margin-top-sm"
                round
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=xx/颜色值"
            title="深色进度条"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress
                :bg-color="color"
                :key="color"
                :loading="60"
                classes="margin-top-sm"
                v-for="color in colors"
            ></uxt-progress>
            <uxt-progress
                :bg-color="color"
                :key="color"
                :loading="60"
                classes="margin-top-sm"
                color="white"
                v-for="color in colors2"
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=light-xx"
            title="浅色进度条"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress
                :bg-color="`light-${color}`"
                :key="index"
                :loading="60"
                classes="margin-top-sm"
                radius
                v-for="(color, index) in colors"
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=gradual-xx"
            title="渐变进度条"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress
                :bg-color="`gradual-${color}`"
                :key="index"
                :loading="60"
                classes="margin-top-sm"
                round
                v-for="(color, index) in colors"
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="striped"
            title="进度条条纹"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress
                :loading="60"
                bg-color="red"
                striped
            ></uxt-progress>
            <uxt-progress
                :loading="60"
                bg-color="green"
                classes="margin-top-sm"
                radius
                striped
            ></uxt-progress>
            <uxt-progress
                :loading="60"
                bg-color="blue"
                classes="margin-top-sm"
                round
                striped
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="animation"
            title="进度条动画条纹"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress
                :loading="60"
                animation
                bg-color="red"
                striped
            ></uxt-progress>
            <uxt-progress
                :loading="60"
                animation
                bg-color="green"
                classes="margin-top-sm"
                radius
                striped
            ></uxt-progress>
            <uxt-progress
                :loading="60"
                animation
                bg-color="blue"
                classes="margin-top-sm"
                round
                striped
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="progressGroup"
            title="进度条组"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-progress
                :progress-group="[
					{bgColor: 'red', loading: 30}, 
					{bgColor: 'green', loading: 30}, 
					{bgColor: 'blue', loading: 40}
				]"
                animation
                striped
            ></uxt-progress>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="进度条布局"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="flex">
                <uxt-progress
                    :loading="60"
                    class="flex-sub"
                    round
                ></uxt-progress>
                <uxt-icon
                    bg-color="theme"
                    class="margin-left-sm"
                    round
                    type="roundcheck"
                ></uxt-icon>
            </view>
            <view class="flex margin-top-sm">
                <uxt-progress
                    :loading="60"
                    :show-loading="false"
                    class="flex-sub"
                    round
                ></uxt-progress>
                <view class="margin-left-sm">60%</view>
            </view>
        </view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtProgress from '@xtcoder/uxt/components/uxt-progress.vue'
import uxtIcon from '@xtcoder/uxt/components/uxt-icon.vue'

export default {
    components: {
        uxtTitleBar,
        uxtProgress,
        uxtIcon
    },
    data() {
        return {
            title: '进度条',
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
                'grey'
            ],
            colors2: ['#ff0000', '#00ff00', '#0000ff']
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
