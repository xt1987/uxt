<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-xx"
            title="文字大小"
        ></uxt-title-bar>
        <view class="bg-white padding-lr">
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">60</view>
                <view class="flex-sub text-xsl padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>xsl
                </view>
            </view>
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">40</view>
                <view class="flex-sub text-sl padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>sl
                </view>
            </view>
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">22</view>
                <view class="flex-sub text-xxl padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>xxl
                </view>
            </view>
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">18</view>
                <view class="flex-sub text-xl padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>xl
                </view>
            </view>
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">16</view>
                <view class="flex-sub text-lg padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>lg
                </view>
            </view>
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">14</view>
                <view class="flex-sub text-df padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>df
                </view>
            </view>
            <view class="solid-bottom padding-xs flex align-center">
                <view class="padding">12</view>
                <view class="flex-sub text-sm padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>sm
                </view>
            </view>
            <view class="padding-xs flex align-center">
                <view class="padding">10</view>
                <view class="flex-sub text-xs padding">
                    <uxt-icon type="roundcheckfill"></uxt-icon>xs
                </view>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-xx"
            title="文字颜色"
        ></uxt-title-bar>
        <view class="grid col-5 padding-sm">
            <view
                :key="index"
                class="padding-sm"
                v-for="(item, index) in colors"
            >
                <view
                    :class="[`text-${item}`]"
                    class="text-center text-xl"
                >{{item}}</view>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-shadow"
            title="文字阴影"
        ></uxt-title-bar>
        <view class="grid col-5 padding-sm">
            <view
                :key="index"
                class="padding-sm"
                v-for="(item, index) in colors"
            >
                <view
                    :class="[`text-${item}`]"
                    class="text-center text-shadow text-xl"
                >{{item}}</view>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-cut"
            title="文字截断"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view
                class="text-cut padding bg-grey radius"
                style="width:220px"
            >我于杀戮之中绽放, 亦如黎明中的花朵</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-(left/center/right)"
            title="文字对齐"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="text-left">我于杀戮之中绽放, 亦如黎明中的花朵</view>
            <view class="text-center">我于杀戮之中绽放, 亦如黎明中的花朵</view>
            <view class="text-right">我于杀戮之中绽放, 亦如黎明中的花朵</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-content(行高1.6)"
            title="文本内容"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="text-content">我于杀戮之中绽放, 亦如黎明中的花朵</view>
            <view class="text-content">我于杀戮之中绽放, 亦如黎明中的花朵</view>
            <view class="text-content">我于杀戮之中绽放, 亦如黎明中的花朵</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-bold"
            title="文字加粗"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <view class="text-bold padding">我于杀戮之中绽放, 亦如黎明中的花朵</view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="text-xx"
            title="特殊文字"
        ></uxt-title-bar>
        <view class="padding text-center">
            <view class="padding-lr bg-white">
                <view class="solid-bottom padding">
                    <text class="text-price">80.00</text>
                </view>
                <view class="padding">价格文本(text-price)</view>
            </view>
            <view class="padding-lr bg-white margin-top">
                <view class="solid-bottom padding">
                    <text class="text-Abc">test1 test2</text>
                </view>
                <view class="padding">首字母大写(text-Abc)</view>
            </view>
            <view class="padding-lr bg-white margin-top">
                <view class="solid-bottom padding">
                    <text class="text-ABC">test1 test2</text>
                </view>
                <view class="padding">全部字母大写(text-ABC)</view>
            </view>
            <view class="padding-lr bg-white margin-top">
                <view class="solid-bottom padding">
                    <text class="text-abc">TEST1 TEST2</text>
                </view>
                <view class="padding">全部字母小写(text-abc)</view>
            </view>
        </view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

export default {
    components: {
        uxtTitleBar,
        uxtIcon
    },
    data() {
        return {
            title: '文本',
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
