<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="size=sm/lg/xl"
            title="头像大小"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
                size="sm"
            >sm</uxt-avatar>
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
            >df</uxt-avatar>
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
                size="lg"
            >lg</uxt-avatar>
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
                size="xl"
            >xl</uxt-avatar>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="radius/round"
            title="头像形状"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
            ></uxt-avatar>
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
                radius
            ></uxt-avatar>
            <uxt-avatar
                avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                class="margin-sm"
                round
            ></uxt-avatar>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="内嵌图标/文字"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-avatar
                class="margin-sm"
                radius
            >
                <uxt-icon type="people"></uxt-icon>
            </uxt-avatar>
            <uxt-avatar
                class="margin-sm"
                radius
            >港</uxt-avatar>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=xx/颜色值"
            title="深色头像"
        ></uxt-title-bar>
        <view class="padding grid col-5">
            <view class="padding-xs">
                <uxt-avatar>深</uxt-avatar>
            </view>
            <view
                :key="color"
                class="padding-xs"
                v-for="color in colors"
            >
                <uxt-avatar :bg-color="color">深</uxt-avatar>
            </view>
            <view
                :key="color"
                class="padding-xs"
                v-for="color in colors2"
            >
                <uxt-avatar
                    :bg-color="color"
                    color="white"
                >深</uxt-avatar>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=light-xx"
            title="浅色头像"
        ></uxt-title-bar>
        <view class="bg-white padding grid col-5">
            <view
                :key="index"
                class="padding-xs"
                v-for="(color, index) in colors"
            >
                <uxt-avatar
                    :bg-color="`light-${color}`"
                    radius
                    v-if="index < colors.length - 3"
                >浅</uxt-avatar>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=gradual-xx"
            title="渐变头像"
        ></uxt-title-bar>
        <view class="bg-white padding grid col-5">
            <view
                :key="index"
                class="padding-xs"
                v-for="(color, index) in colors"
            >
                <uxt-avatar
                    :bg-color="`gradual-${color}`"
                    round
                    v-if="index < colors.length - 3"
                >渐</uxt-avatar>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="uxt-avatar-group"
            title="头像组"
        ></uxt-title-bar>
        <view class="bg-white padding">
            <uxt-avatar-group size="sm">
                <uxt-avatar
                    :key="i"
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    size="sm"
                    v-for="i in 4"
                ></uxt-avatar>
            </uxt-avatar-group>
            <uxt-avatar-group>
                <uxt-avatar
                    :key="i"
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    v-for="i in 4"
                ></uxt-avatar>
            </uxt-avatar-group>
            <uxt-avatar-group size="lg">
                <uxt-avatar
                    :key="i"
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    size="lg"
                    v-for="i in 4"
                ></uxt-avatar>
            </uxt-avatar-group>
            <uxt-avatar-group size="xl">
                <uxt-avatar
                    :key="i"
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    size="xl"
                    v-for="i in 4"
                ></uxt-avatar>
            </uxt-avatar-group>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="uxt-badge"
            title="头像标签"
        ></uxt-title-bar>
        <view class="bg-white padding flex align-center">
            <uxt-badge class="margin-sm">
                <template slot="badge">
                    <uxt-icon
                        bg-color="pink"
                        round
                        type="male"
                    ></uxt-icon>
                </template>
                <uxt-avatar
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    size="sm"
                ></uxt-avatar>
            </uxt-badge>
            <uxt-badge class="margin-sm">
                <template slot="badge">
                    <uxt-icon
                        bg-color="blue"
                        round
                        type="female"
                    ></uxt-icon>
                </template>
                <uxt-avatar
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                ></uxt-avatar>
            </uxt-badge>
            <uxt-badge class="margin-sm">
                <template slot="badge">
                    <uxt-icon
                        bg-color="pink"
                        round
                        type="male"
                    ></uxt-icon>
                </template>
                <uxt-avatar
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    size="lg"
                ></uxt-avatar>
            </uxt-badge>
            <uxt-badge class="margin-sm">
                <template slot="badge">
                    <uxt-icon
                        bg-color="blue"
                        round
                        type="female"
                    ></uxt-icon>
                </template>
                <uxt-avatar
                    avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
                    round
                    size="xl"
                ></uxt-avatar>
            </uxt-badge>
        </view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtAvatar from '@xtcoder/uxt/components/uxt-avatar.vue'
import uxtIcon from '@xtcoder/uxt/components/uxt-icon.vue'
import uxtAvatarGroup from '@xtcoder/uxt/components/uxt-avatar-group.vue'
import uxtBadge from '@xtcoder/uxt/components/uxt-badge.vue'
import uxtTag from '@xtcoder/uxt/components/uxt-tag.vue'

export default {
    components: {
        uxtTitleBar,
        uxtAvatar,
        uxtIcon,
        uxtAvatarGroup,
        uxtBadge,
        uxtTag
    },
    data() {
        return {
            title: '头像',
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
</style>
