<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            classes="margin-top-sm"
            title="默认标题"
        ></uxt-title-bar>
        <uxt-title-bar
            :icon="{type: 'home', color: 'red'}"
            classes="margin-top-sm"
            title="标题图标"
        ></uxt-title-bar>
        <uxt-title-bar
            classes="margin-top-sm"
            title="标题文字大小"
            titleSize="xl"
        ></uxt-title-bar>
        <uxt-title-bar
            classes="margin-top-sm"
            title="加粗标题"
            titleBold
        ></uxt-title-bar>
        <uxt-title-bar
            classes="margin-top-sm"
            subTitle="副标题"
            title="主标题"
        ></uxt-title-bar>
        <uxt-title-bar
            classes="margin-top-sm"
            enTitle="title"
            title="标题"
        ></uxt-title-bar>
        <uxt-title-bar
            classes="margin-top-sm"
            title="下划线"
            underline
            underlineColor="red"
        ></uxt-title-bar>
        <uxt-title-bar
            classes="margin-top-sm"
            color="blue"
            shadow
            title="阴影"
        ></uxt-title-bar>
    </uxt-layout>
</template>

<script>
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'

export default {
    components: {
        uxtTitleBar
    },
    data() {
        return {
            title: '标题栏'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
