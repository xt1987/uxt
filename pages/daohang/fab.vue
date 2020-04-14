<template>
    <uxt-page :title="title">
        <uxt-fab
            :btns="btns"
            :y="`${top + rpx50}px`"
            @itemclick="itemclick"
            bg-color="blue"
            direction="row"
            position="lt"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            :y="`${top + rpx50 + rpx90 + 20}px`"
            @itemclick="itemclick"
            bg-color="olive"
            position="lt"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            :y="`${top + rpx50}px`"
            @itemclick="itemclick"
            bg-color="green"
            direction="row"
            position="rt"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            :y="`${top + rpx50 + rpx90 + 20}px`"
            @itemclick="itemclick"
            bg-color="cyan"
            position="rt"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            @itemclick="itemclick"
            bg-color="red"
            direction="row"
            position="lb"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            :y="`${rpx50 + rpx90 + 20}px`"
            @itemclick="itemclick"
            bg-color="purple"
            position="lb"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            @itemclick="itemclick"
            bg-color="yellow"
            direction="row"
            position="rb"
        ></uxt-fab>
        <uxt-fab
            :btns="btns"
            :y="`${rpx50 + rpx90 + 20}px`"
            @itemclick="itemclick"
            bg-color="orange"
            position="rb"
        ></uxt-fab>
        <view class="center">
            <uxt-fab
                :styles="{position: 'static'}"
                @click="click"
                @getuserinfo="getuserinfo"
                bg-color="mauve"
                open-type="getUserInfo"
            ></uxt-fab>
        </view>
    </uxt-page>
</template>

<script>
import uxtFab from '@xtcoder/uxt/components/uxt-fab.vue'

export default {
    components: {
        uxtFab
    },
    data() {
        return {
            title: '浮动按钮',
            top: this.systemInfo.statusBarHeight + this.systemInfo.navBarHeight,
            rpx50: uni.upx2px(50),
            rpx90: uni.upx2px(90),
            btns: [
                {
                    text: '增',
                    icon: 'plus'
                },
                {
                    text: '删',
                    icon: 'minus'
                },
                {
                    text: '改',
                    icon: 'pencil'
                },
                {
                    text: '查',
                    icon: 'search'
                }
            ]
        }
    },
    methods: {
        itemclick(index) {
            this.uxtToast({ message: `点击了第${index + 1}个子按钮` })
        },
        click() {
            this.uxtToast({ message: `点击了最中间的按钮` })
        },
        getuserinfo(e) {
            this.uxtToast({
                message: `用户 ${
                    e.detail.errMsg === 'getUserInfo:ok' ? '同意' : '拒绝'
                } 了授权`
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.center {
    position: fixed;
    bottom: 50%;
    right: 50%;
    transform: translate3d(50%, 50%, 0);
}
</style>
