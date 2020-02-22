<template>
	<view class="tab-bar" :class="[
			classes
		]" :style="[
			styles
		]">
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';

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
			return {

			};
		}
	};
</script>

<style>
</style>
