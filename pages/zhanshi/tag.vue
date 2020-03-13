<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="size=sm"
            title="标签大小"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-tag
                classes="margin-right"
                size="sm"
            >sm</uxt-tag>
            <uxt-tag>默认</uxt-tag>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="radius/round"
            title="标签形状"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-tag classes="margin-right">默认</uxt-tag>
            <uxt-tag
                classes="margin-right"
                radius
            >radius</uxt-tag>
            <uxt-tag round>round</uxt-tag>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=xx/颜色值"
            title="深色标签"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-tag
                :bg-color="color"
                :key="color"
                classes="margin-right margin-bottom"
                radius
                v-for="color in colors"
            >{{ color }}</uxt-tag>
            <uxt-tag
                :bg-color="color"
                :key="color"
                classes="margin-right margin-bottom"
                color="white"
                radius
                v-for="color in colors2"
            >{{ color }}</uxt-tag>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=light-xx"
            title="浅色标签"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <view
                :key="index"
                classes="inline-block margin-right margin-bottom"
                v-for="(color, index) in colors"
            >
                <uxt-tag
                    :bg-color="`light-${color}`"
                    round
                    v-if="index < colors.length - 3"
                >{{ color }}</uxt-tag>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=gradual-xx"
            title="渐变标签"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <view
                :key="index"
                classes="inline-block margin-right margin-bottom"
                v-for="(color, index) in colors"
            >
                <uxt-tag
                    :bg-color="`gradual-${color}`"
                    v-if="index < colors.length - 3"
                >{{ color }}</uxt-tag>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="hollow=xx/颜色值"
            title="镂空标签"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-tag
                classes="margin-right"
                hollow="df"
            >随系统</uxt-tag>
            <uxt-tag
                classes="margin-right"
                hollow="red"
                radius
            >内置</uxt-tag>
            <uxt-tag
                classes="margin-right"
                hollow="#0f0"
                round
            >自定义</uxt-tag>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="capsule=iconObj/文字"
            title="胶囊标签"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <view>
                <uxt-tag
                    :capsule="{ type: 'likefill' }"
                    classes="margin-right"
                >12</uxt-tag>
                <uxt-tag
                    :capsule="{ type: 'likefill' }"
                    bg-color="red"
                    classes="margin-right"
                    radius
                >12</uxt-tag>
                <uxt-tag
                    bg-color="#0f0"
                    capsule="说明"
                    color="white"
                    round
                >12</uxt-tag>
            </view>
            <view class="margin-top">
                <uxt-tag
                    :capsule="{ type: 'likefill' }"
                    classes="margin-right"
                    size="sm"
                >12</uxt-tag>
                <uxt-tag
                    :capsule="{ type: 'likefill' }"
                    bg-color="red"
                    classes="margin-right"
                    radius
                    size="sm"
                >12</uxt-tag>
                <uxt-tag
                    bg-color="#0f0"
                    capsule="说明"
                    color="white"
                    round
                    size="sm"
                >12</uxt-tag>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="uxt-badge"
            title="角标"
        ></uxt-title-bar>
        <view class="flex justify-around padding bg-white">
            <uxt-badge
                :badge="item.toString()"
                :key="index"
                classes="bg-blue padding-xl"
                v-for="(item, index) in [1, 2, 3]"
            ></uxt-badge>
            <uxt-badge classes="bg-blue padding-xl"></uxt-badge>
        </view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtTag from '@/uxt/components/uxt-tag.vue'
import uxtBadge from '@/uxt/components/uxt-badge.vue'

export default {
    components: {
        uxtTitleBar,
        uxtTag,
        uxtBadge
    },
    data() {
        return {
            title: '标签',
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

<style></style>
