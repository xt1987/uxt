<template>
    <uxt-page :title="title">
        <uxt-cell
            @click="showDialog({ message: '提示内容', type: 'alert' })"
            classes="margin-top-sm"
            desc="uxtDialog.alert"
            right-arrow
            title="提示框"
        ></uxt-cell>
        <uxt-cell
            @click="showDialog({ message: '确定要删除该记录吗？', type: 'confirm' })"
            desc="uxtDialog.confirm"
            right-arrow
            title="确认框"
        ></uxt-cell>
        <uxt-cell
            @click="showDialog({ message: '确定要删除该记录吗？', icon: 'questionfill', type: 'confirm' })"
            right-arrow
            title="带图标"
        ></uxt-cell>
    </uxt-page>
</template>

<script>
import uxtCell from '@xtcoder/uxt/components/uxt-cell.vue'

export default {
    components: {
        uxtCell
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
