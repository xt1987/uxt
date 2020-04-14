<template>
    <uxt-page :title="title">
        <uxt-bar
            @click="showActionSheet({})"
            classes="margin-top-sm"
            arrow
            title="基本用法"
        ></uxt-bar>
        <uxt-bar
            @click="showActionSheet({ cancel: true })"
            arrow
            title="取消按钮"
        ></uxt-bar>
        <uxt-bar
            @click="showActionSheet({ title: '这里是标题' })"
            arrow
            title="标题"
        ></uxt-bar>
        <uxt-bar
            @click="showActionSheet({ title: '这里是标题', bgColor: 'light-blue' })"
            arrow
            title="蓝色标题栏"
        ></uxt-bar>
        <uxt-bar
            @click="showActionSheet({ title: '这里是标题', close: true })"
            arrow
            title="关闭按钮"
        ></uxt-bar>
        <uxt-bar
            @click="showActionSheet({ title: '分享到', actions: [], userContent: true })"
            arrow
            title="自定义内容"
        ></uxt-bar>
        <uxt-action-sheet
            :actions="actionSheet.actions"
            :bg-color="actionSheet.bgColor"
            :cancel="actionSheet.cancel"
            :close="actionSheet.close"
            :title="actionSheet.title"
            @itemclick="itemclick"
            v-model="show"
        >
            <view
                class="bg-white padding"
                style="height: 200rpx;"
                v-if="actionSheet.userContent"
            >在这里可以自定义内容</view>
        </uxt-action-sheet>
    </uxt-page>
</template>

<script>
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtActionSheet from '@xtcoder/uxt/components/uxt-action-sheet.vue'

export default {
    components: {
        uxtBar,
        uxtActionSheet
    },
    data() {
        return {
            title: '上拉菜单',
            show: false,
            actionSheet: {},
            actions: [
                {
                    text: '选项1'
                },
                {
                    text: '选项2',
                    disabled: true
                },
                {
                    text: '选项3',
                    sub: '副文本'
                }
            ]
        }
    },
    methods: {
        showActionSheet(p) {
            this.actionSheet = Object.assign(
                {
                    title: '',
                    cancel: false,
                    actions: this.actions,
                    bgColor: 'gray',
                    close: false,
                    userContent: false
                },
                p
            )
            this.show = true
        },
        itemclick(index) {
            console.log(`选择了第${index + 1}项`)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
