<template>
    <uxt-page :title="title">
        <uxt-bar
            @click="showNotify({ message: '主要通知', type: 'primary' })"
            classes="margin-top-sm"
            desc="type=primary"
            arrow
            title="主要通知"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '成功消息', type: 'success' })"
            desc="type=success"
            arrow
            title="成功消息"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '警告消息', type: 'warn' })"
            desc="type=warn"
            arrow
            title="警告消息"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '危险消息', type: 'danger' })"
            desc="type=danger"
            arrow
            title="危险消息"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '自定义颜色', bgColor: 'light-green' })"
            desc="bgColor=xx"
            arrow
            title="自定义颜色"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '5秒后关闭', type: 'warn', duration: 5000 })"
            desc="duration=xx"
            arrow
            title="自定义时长"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '自定义图标', type: 'success', icon: 'bq-weixiao' })"
            desc="icon=xx"
            arrow
            title="自定义图标"
        ></uxt-bar>
        <uxt-bar
            @click="showNotify({ message: '点击消息关闭', close: true, duration: 0 })"
            desc="notify.click=func + notify.close()"
            arrow
            title="外部点击关闭"
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
            title: '消息通知'
        }
    },
    methods: {
        showNotify(p) {
            let notify = this.uxtNotify(
                Object.assign(
                    {
                        type: '',
                        duration: 3000,
                        color: '',
                        bgColor: 'theme'
                    },
                    p
                )
            )
            if (p.close) {
                notify.click = () => {
                    notify.close()
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
