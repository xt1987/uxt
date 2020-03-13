<template>
    <view
        :class="[
			classes
		]"
        :style="[
			styles
		]"
        class="tab-bar"
    ></view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'

export default {
    mixins: [baseMixin],
    props: {
        // 列数
        col: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {}
    }
}
</script>

<style>
</style>
