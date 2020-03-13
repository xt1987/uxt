<template>
    <uxt-layout :title="title"></uxt-layout>
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

<style>
</style>
