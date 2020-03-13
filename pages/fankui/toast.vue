<template>
    <uxt-layout :title="title">
        <uxt-cell
            @click="showToast({ message: '提示内容' })"
            classes="margin-top-sm"
            right-arrow
            title="文字提示"
        ></uxt-cell>
        <uxt-cell
            @click="showToast({ message: '这是一段很长的提示内容，太长了就会换行。' })"
            right-arrow
            title="长文字提示"
        ></uxt-cell>
        <uxt-cell
            @click="showToast({ message: '加载中...', type: 'loading' })"
            desc="type=loading toast.close()"
            right-arrow
            title="加载提示(必须手动调用close关闭)"
        ></uxt-cell>
        <uxt-cell
            @click="showToast({ message: '操作成功', type: 'success' })"
            desc="type=success"
            right-arrow
            title="成功提示"
        ></uxt-cell>
        <uxt-cell
            @click="showToast({ message: '操作失败', type: 'fail' })"
            desc="type=fail"
            right-arrow
            title="失败提示"
        ></uxt-cell>
        <uxt-cell
            @click="showToast({ message: '自定义图标', icon: 'info' })"
            desc="icon=xx"
            right-arrow
            title="自定义图标"
        ></uxt-cell>
        <uxt-cell
            @click="showToast({ type: 'loading', dynamic: true, duration: 5000 })"
            desc="toast.message=xx duration=5000"
            right-arrow
            title="动态更新提示+自定义时长"
        ></uxt-cell>
    </uxt-layout>
</template>

<script>
import uxtCell from '@/uxt/components/uxt-cell.vue'

export default {
    components: {
        uxtCell
    },
    data() {
        return {
            title: '消息通知'
        }
    },
    methods: {
        showToast(p) {
            let toast = this.uxtToast(
                Object.assign(
                    {
                        message: '',
                        type: '',
                        duration: 3000,
                        icon: ''
                    },
                    p
                )
            )
            if (p.type === 'loading') {
                setTimeout(() => {
                    toast.close()
                }, 5000)
            }
            if (!p.dynamic) {
                return
            }
            let second = 5
            toast.message = `剩余${second}秒`
            const timer = setInterval(() => {
                second--
                if (second) {
                    toast.message = `剩余${second}秒`
                } else {
                    clearInterval(timer)
                }
            }, 1000)
        }
    }
}
</script>

<style></style>
