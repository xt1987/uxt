<template>
    <uxt-page
        :header-height="150"
        :title="title"
    >
        <template slot="header">
            <view class="bg-green padding" style="height: 150rpx;">自定义的顶部内容，可以换成任何你想要的内容，这些内容一直显示在页面内容的前面</view>
        </template>

        <navigator
            class="bg-theme padding margin round text-center"
            open-type="navigateBack"
        >返回</navigator>
    </uxt-page>
</template>

<script>
export default {
    data() {
        return {
            title: '自定义头部内容'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
