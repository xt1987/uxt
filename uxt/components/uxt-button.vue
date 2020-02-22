<template>
	<button class="btn" :class="[
			classes,
			{
				sm: size === 'sm',
				lg: size === 'lg',
				block: size === 'block',
				radius: radius,
				round: round,
				shadow: shadow,
				disabled: disabled
			},
			hollow,
			(hollow && colorClass ? colorClass.replace('text-', 'border-') : ''),
			(hollow ? '' : bgColorClass),
			colorClass
		]"
	 :style="[
			styles,
			{
				backgroundColor: (hollow ? '' : bgColorStyle),
				color: colorStyle,
				borderColor: (hollow && colorStyle ? colorStyle : '')
			}
		]"
	 :disabled="disabled" type :open-type="openType" @click="handleClick" @getuserinfo="handleGetUserInfo">
		<slot></slot>
	</button>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';

	export default {
		mixins: [baseMixin, rrMixin],
		props: {
			// 大小 'sm'小 ''普通 'lg'大 'block'块状
			size: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'sm', 'lg', 'block'].includes(value);
				}
			},
			// 加阴影
			shadow: {
				type: Boolean,
				default: false
			},
			// 镂空 ''无 'border'细 'borders'粗
			hollow: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'border', 'borders'].includes(value);
				}
			},
			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},
			// 开放能力
			openType: {
				type: String
			},
			bgColor: {
				default: 'df'
			}
		},
		methods: {
			handleClick() {
				this.$emit('click');
			},
			handleGetUserInfo(e) {
				this.$emit('getuserinfo', e);
			}
		}
	};
</script>

<style>
	.btn {
		/* position: relative; */
		/* border: 0rpx; */
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border-radius: 0;
		padding: 0 30rpx;
		font-size: 28rpx;
		height: 64rpx;
		line-height: 1;
		text-align: center;
		text-decoration: none;
		overflow: visible;
		/* margin-left: initial; */
		transform: translate(0rpx, 0rpx);
		/* margin-right: initial; */
	}

	.btn.radius {
		border-radius: 12rpx;
	}

	.btn.round {
		border-radius: 5000rpx;
	}

	.btn::after {
		display: none;
	}

	.btn.sm {
		padding: 0 20rpx;
		font-size: 20rpx;
		height: 48rpx;
	}

	.btn.lg,
	.btn.block {
		padding: 0 40rpx;
		font-size: 32rpx;
		height: 80rpx;
	}

	.btn.block {
		display: flex;
	}

	.btn.border,
	.btn.borders {
		background-color: transparent !important;
	}

	.btn.shadow-blur::before {
		top: 4rpx;
		left: 4rpx;
		filter: blur(6rpx);
		opacity: 0.6;
	}

	.btn.button-hover {
		transform: translate(1rpx, 1rpx);
	}

	.btn.disabled {
		opacity: 0.6;
	}
</style>
