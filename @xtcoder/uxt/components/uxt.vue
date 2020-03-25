<template>
	<view :class="[classes, colorClass, bgColorClass]" :style="[styles, {
		color: colorStyle,
		backgroundColor: bgColorClass
	}]" class="steps">
		
	</view>
</template>

<script>
import baseMixin from '../mixins/base.js'

export default {
	mixins: [baseMixin],
	props: {}
}
</script>

<style lang="scss" scoped>
.steps {
	position: relative;
}
</style>
