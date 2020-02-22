<template>
	<view class="divider padding-tb-sm flex align-center" :class="[
			classes
		]" :style="[
			styles
		]">
		<view class="line flex-sub" :class="bgColorClass" :style="{backgroundColor: bgColorStyle}"></view>
		<view v-if="$slots.default" class="text-sm margin-lr-sm" :class="colorClass" :style="{color: colorStyle}">
			<slot></slot>
		</view>
		<view class="line flex-sub" :class="bgColorClass" :style="{backgroundColor: bgColorStyle}"></view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';

	export default {
		mixins: [baseMixin],
		props: {
			// 文字颜色
			color: {
				default: 'df'
			},
			//divider颜色
			bgColor: {
				default: 'df'
			}
		}
	};
</script>

<style>
	.divider {
		width: 100%;
		overflow: hidden;
	}

	.line {
		height: 2rpx;
		transform: scaleY(0.5);
	}
</style>
