<template>
    <uxt-page :title="title"></uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'

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
