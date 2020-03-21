<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="基本用法"
        ></uxt-title-bar>
        <uxt-swipe-action v-model="close1">
            <template
                class="height-p100 flex"
                slot="left"
            >
                <view
                    @click="close(1)"
                    class="height-p100 bg-green padding-lr flex justify-center align-center"
                >选择</view>
            </template>
            <uxt-cell
                @click="close(1)"
                title="单元格"
                value="内容"
            ></uxt-cell>
            <template
                class="height-p100 flex"
                slot="right"
            >
                <view
                    @click="close(1)"
                    class="height-p100 bg-red padding-lr flex justify-center align-center"
                >删除</view>
                <view
                    @click="close(1)"
                    class="height-p100 bg-blue padding-lr flex justify-center align-center"
                >收藏</view>
            </template>
        </uxt-swipe-action>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="异步关闭"
        ></uxt-title-bar>
        <uxt-swipe-action v-model="close2">
            <view class="padding flex bg-white align-center">
                <image src="../../static/logo.png" style="width: 40px; height: 40px;"></image>
                <view class="flex-sub">
                    <view class="padding-xs text-bold">uxt - 丰富的uniapp组件库</view>
                    <view class="padding-xs text-grey">by xtcoder</view>
                </view>
            </view>
            <template
                class="height-p100 flex"
                slot="right"
            >
                <view
                    @click="close(2)"
                    class="height-p100 bg-red padding-lr flex justify-center align-center"
                >删除</view>
            </template>
        </uxt-swipe-action>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtSwipeAction from '@/uxt/components/uxt-swipe-action.vue'
import uxtCell from '@/uxt/components/uxt-cell.vue'

export default {
    components: {
        uxtTitleBar,
        uxtSwipeAction,
        uxtCell
    },
    data() {
        return {
            title: '滑动操作',
            close1: false,
            close2: false
        }
    },
    methods: {
        async close(index) {
            if (index === 1) {
                !this.close1 && (this.close1 = true)
            } else if (index === 2) {
                let res = await this.uxtDialog.confirm({
                    message: '确定删除吗？'
                })
                this.close2 = true
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
