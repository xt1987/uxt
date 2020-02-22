<template>
	<view v-if="isCapsule" class="capsule border" :class="[
			classes,
			{
				radius: radius,
				round: round
			},
			(bgColorClass ? bgColorClass.replace('-gradual', '').replace('bg-', 'border-') : '')
		]"
	 :style="[styles]">
		<view class='tag' :class="[
				bgColorClass, 
				colorClass, 
				{
					sm: size === 'sm',
					'radius-tl radius-bl': radius,
					'round-tl round-bl': round
				}
			]" :style="{
				backgroundColor: bgColorStyle, 
				color: colorStyle, 
				borderColor: (bgColorStyle ? bgColorStyle : '')
			}">
			<uxt-icon v-if="isCapsuleIcon" :type="capsule.type" :color="capsule.color" :size="capsule.size" :animation="capsule.animation"
			 :bgColor="capsule.bgColor" :round="capsule.round" :hollow="capsule.hollow"></uxt-icon>
			<text v-else>{{capsule}}</text>
		</view>
		<view class="tag right" :class="{sm: size === 'sm'}">
			<slot></slot>
		</view>
	</view>
	<view v-else class="tag" :class="[
			classes,
			{
				radius: radius,
				round: round,
				sm: size === 'sm'
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
		]">
		<slot></slot>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		mixins: [baseMixin, rrMixin],
		components: {
			uxtIcon
		},
		props: {
			// 大小 ''普通 'sm'小
			size: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'sm'].includes(value);
				}
			},
			// 镂空 ''无 'border'细 'borders'粗
			hollow: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'border', 'borders'].includes(value);
				}
			},
			// 胶囊
			capsule: {
				type: [Object, String]
			},
			bgColor: {
				default: 'df'
			}
		},
		computed: {
			isCapsule() {
				return this.capsule ? true : false;
			},
			isCapsuleIcon() {
				return typeof this.capsule === 'object';
			}
		}
	};
</script>

<style>
	.tag {
		font-size: 24rpx;
		display: inline-flex;
		vertical-align: middle;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0rpx 16rpx;
		height: 48rpx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;
	}

	.tag.sm {
		font-size: 20rpx;
		padding: 0rpx 12rpx;
		height: 32rpx;
	}

	.tag.border,
	.tag.borders {
		background-color: transparent !important;
	}

	.capsule {
		display: inline-flex;
		vertical-align: middle;
	}

	.capsule .tag {
		margin: 0;
	}
</style>
