<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="有/无文字"
        ></uxt-title-bar>
        <view class="bg-white">
            <uxt-divider>分隔线</uxt-divider>
            <uxt-divider></uxt-divider>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=xx/颜色值"
            title="分隔线颜色"
        ></uxt-title-bar>
        <view>
            <view>
                <uxt-divider
                    :bg-color="color"
                    :color="color"
                    :key="index"
                    v-for="(color, index) in colors"
                >{{color}}</uxt-divider>
            </view>
            <view>
                <block
                    :key="index"
                    v-for="(color, index) in colors"
                >
                    <uxt-divider
                        :bg-color="`gradual-${color}`"
                        :color="color"
                        v-if="index < colors.length - 3"
                    >{{color}}</uxt-divider>
                </block>
            </view>
            <view>
                <uxt-divider
                    :bg-color="color"
                    :color="color"
                    :key="index"
                    v-for="(color, index) in colors2"
                >{{color}}</uxt-divider>
            </view>
        </view>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtDivider from '@/uxt/components/uxt-divider.vue'

export default {
    components: {
        uxtTitleBar,
        uxtDivider
    },
    data() {
        return {
            title: '分隔线',
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
