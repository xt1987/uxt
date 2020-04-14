<template>
    <uxt-page :title="title">
        <uxt-bar
            @click="showDialog({ message: '提示内容', type: 'alert' })"
            classes="margin-top-sm"
            desc="uxtDialog.alert"
            arrow
            title="提示框"
        ></uxt-bar>
        <uxt-bar
            @click="showDialog({ message: '确定要删除该记录吗？', type: 'confirm' })"
            desc="uxtDialog.confirm"
            arrow
            title="确认框"
        ></uxt-bar>
        <uxt-bar
            @click="showDialog({ message: '确定要删除该记录吗？', icon: 'question-o', type: 'confirm' })"
            arrow
            title="带图标"
        ></uxt-bar>
    </uxt-page>
</template>

<script>
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'

export default {
    components: {
        uxtBar
    },
    data() {
        return {
            title: '对话框'
        }
    },
    methods: {
        async showDialog(p) {
            let dialogRes = await this.uxtDialog[p.type](
                Object.assign(
                    {
                        title: '提示',
                        message: '提示内容',
                        icon: ''
                    },
                    p
                )
            )
            if (dialogRes.ok) {
                this.uxtToast({
                    message: '点击了确定'
                })
            } else {
                this.uxtToast({
                    message: '点击了取消'
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
