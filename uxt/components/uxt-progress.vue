<template>
	<view class="progress" :class="[
			classes,
			{
				sm: size === 'sm',
				xs: size === 'xs',
				radius: radius,
				round: round,
				striped: striped,
				animation: animation
			}
		]"
	 :style="[styles]">
		<view v-if="!groupMode" class="loading" :class="[
				colorClass,
				bgColorClass
			]" :style="{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				width: `${loading}%`
			}">
			<text class="text" v-if="size !== 'sm' && size !== 'xs' && showLoading">{{loading}}%</text>
		</view>
		<block v-else>
			<view class="loading" v-for="(p, index) in progressGroup" :key="index" :class="[
					getColor(p.color, 1).classes,
					getColor(p.bgColor, 2).classes
				]"
			 :style="{
					color: getColor(p.color).styles,
					backgroundColor: getColor(p.bgColor).styles,
					width: `${p.loading}%`
				}">
				<text class="text" v-if="size !== 'sm' && size !== 'xs' && showLoading">{{p.loading}}%</text>
			</view>
		</block>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';

	export default {
		mixins: [baseMixin, rrMixin],
		props: {
			// 当前进度 0-100
			loading: {
				type: Number,
				default: 0
			},
			showLoading: {
				type: Boolean,
				default: true
			},
			// 大小 ''普通 'sm'较小 'xs'小
			size: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'sm', 'xs'].includes(value);
				}
			},
			// 条纹
			striped: {
				type: Boolean,
				default: false
			},
			// 动画
			animation: {
				type: Boolean,
				default: false
			},
			// 进度组
			progressGroup: {
				type: Array
			},
			bgColor: {
				default: 'df'
			}
		},
		computed: {
			groupMode() {
				return this.progressGroup instanceof Array && this.progressGroup.length > 0;
			}
		}
	};
</script>

<style>
	.progress {
		overflow: hidden;
		height: 28rpx;
		background-color: #ebeef5;
		display: inline-flex;
		align-items: center;
		width: 100%;
	}

	.progress.xs {
		height: 10rpx;
	}

	.progress.sm {
		height: 20rpx;
	}

	.progress .loading {
		width: 0;
		height: 100%;
		align-items: center;
		display: flex;
		justify-items: flex-end;
		justify-content: space-around;
		font-size: 20rpx;
		transition: width 0.6s ease;
	}

	.progress.striped .loading {
		background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
		background-size: 72rpx 72rpx;
	}

	.progress.animation .loading {
		animation: progress-stripes 2s linear infinite;
	}

	@keyframes progress-stripes {
		from {
			background-position: 72rpx 0;
		}

		to {
			background-position: 0 0;
		}
	}
</style>
