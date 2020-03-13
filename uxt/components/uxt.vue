<template>
    <view
        :class="[
			classes,
		]"
        :style="[
			styles,
			{
				
			}
		]"
        class="cell-group"
    ></view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'

export default {
    mixins: [baseMixin],
    props: {}
}
</script>

<style lang="scss">
.cell-group {
    position: relative;
}
</style>
