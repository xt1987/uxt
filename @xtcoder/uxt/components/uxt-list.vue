<template>
    <view
        :class="[
			classes
		]"
        :style="[
			styles
		]"
        class="list"
    ></view>
</template>

<script>
import baseMixin from '../mixins/base.js'

export default {
    mixins: [baseMixin],
    props: {
        // 列数
        // col: {
        //     type: Number,
        //     default: 1
        // }
		
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.list {
	
}
</style>
