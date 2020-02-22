<template>
	<view class="avatar" :class="[
			classes,
			{
				radius: radius,
				round: round
			},
			size,
			bgColorClass,
			colorClass
		]"
	 :style="[
			styles,
			{
				backgroundImage: (avatar ? `url(${avatar})` : ''),
				backgroundColor: bgColorStyle,
				color: colorStyle
			}
		]">
		<slot></slot>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';

	export default {
		mixins: [baseMixin, rrMixin],
		props: {
			// 头像地址
			avatar: {
				type: String
			},
			// 尺寸 'sm'小 ''默认 'lg'大 'xl'超大
			size: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'sm', 'lg', 'xl'].includes(value);
				}
			},
			bgColor: {
				default: 'df'
			}
		}
	};
</script>

<style>
	.avatar {
		font-variant: small-caps;
		/* margin: 0; */
		/* padding: 0; */
		display: inline-flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		/* position: relative; */
		width: 64rpx;
		height: 64rpx;
		background-size: cover;
		background-position: center;
		vertical-align: middle;
		font-size: 1.4em;
	}

	.avatar.sm {
		width: 48rpx;
		height: 48rpx;
		font-size: 1em;
	}

	.avatar.lg {
		width: 96rpx;
		height: 96rpx;
		font-size: 1.8em;
	}

	.avatar.xl {
		width: 128rpx;
		height: 128rpx;
		font-size: 2em;
	}
</style>
