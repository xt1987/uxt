<template>
	<!-- 模态加载 -->
	<block v-if="modal">
		<view v-show="state === 'load'" class="modal radius">
			<image class="logo" src="/static/logo.png"></image>
			{{loadText}}
		</view>
	</block>
	<!-- 进度条加载 -->
	<block v-else-if="progress">
		<view v-show="loading > 0" class="load-progress flex flex-col" :style="{top: progressTop}">
			<uxt-progress :styles="{position: 'absolute', height: '4rpx'}" :showLoading="false" :bgColor="bgColor" :loading="loading"></uxt-progress>
			<uxt-icon :styles="{position: 'absolute', right: '10rpx'}" type="icloading" animation="pulse" :color="bgColor"></uxt-icon>
		</view>
	</block>
	<!-- 普通加载框 -->
	<view v-else class="loading" :class="[
			classes,
			(state === 'error' ? '' : colorClass),
			(state === 'error' ? 'bg-red' : bgColorClass)
		]"
	 :style="[
			styles,
			{
				color: (state === 'error' ? '' : colorStyle),
				backgroundColor: (state === 'error' ? '' : bgColorStyle)
			}
		]">
		<block v-if="state === 'load'">
			<slot name="load">
				<uxt-icon :type="loadIcon.type" :color="loadIcon.color" :size="loadIcon.size" animation="spin" :bgColor="loadIcon.bgColor"
				 :round="loadIcon.round" :hollow="loadIcon.hollow"></uxt-icon>
				{{loadText}}
			</slot>
		</block>
		<block v-else-if="state === 'over'">
			<slot name="over">
				<uxt-icon :type="overIcon.type" :color="overIcon.color" :size="overIcon.size" :bgColor="overIcon.bgColor" :round="overIcon.round"
				 :hollow="overIcon.hollow"></uxt-icon>
				{{overText}}
			</slot>
		</block>
		<block v-else-if="state === 'error'">
			<slot name="error">
				<uxt-icon :type="errorIcon.type" :color="errorIcon.color" :size="errorIcon.size" :bgColor="errorIcon.bgColor"
				 :round="errorIcon.round" :hollow="errorIcon.hollow"></uxt-icon>
				{{errorText}}
			</slot>
		</block>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';
	import uxtProgress from '@/uxt/components/uxt-progress.vue';

	export default {
		mixins: [baseMixin, rrMixin],
		components: {
			uxtIcon,
			uxtProgress
		},
		props: {
			// 加载中图标
			loadIcon: {
				type: Object,
				default () {
					return {
						type: 'icloading'
					};
				}
			},
			// 加载中文本
			loadText: {
				type: String,
				default: '加载中...'
			},
			// 加载完成图标
			overIcon: {
				type: Object,
				default () {
					return {
						type: 'emoji'
					};
				}
			},
			// 加载完成文本
			overText: {
				type: String,
				default: '没有更多了'
			},
			// 加载失败图标
			errorIcon: {
				type: Object,
				default () {
					return {
						type: 'roundclosefill'
					};
				}
			},
			// 加载失败文本
			errorText: {
				type: String,
				default: '加载失败'
			},
			// 状态 load/over/error
			state: {
				type: String,
				default: 'load',
				validator(value) {
					return ['load', 'over', 'error'].includes(value);
				}
			},
			// 模态
			modal: {
				type: Boolean,
				default: false
			},
			// 进度条
			progress: {
				type: Boolean,
				default: false
			},
			bgColor: {
				default: 'df'
			}
		},
		data() {
			return {
				loading: 0,
				progressTop: `${this.gStatusBarHeight + this.gNavBarHeight}px`,
				tid: 0
			};
		},
		watch: {
			state(newVal, oldVal) {
				if (newVal !== oldVal) {
					switch (newVal) {
						case 'load':
							this.start();
							break;
						default:
							this.end();
							break;
					}
				}
			}
		},
		methods: {
			start(ms) {
				const that = this;
				that.loading += 100.0 * 100 / (ms || 5000);
				if (that.loading < (ms > 0 ? 100 : 91)) {
					that.tid = setTimeout(() => {
						that.start(ms);
					}, 100);
				} else if (ms > 0) {
					that.loading = 0;
				}
			},
			end() {
				clearTimeout(this.tid);
				this.start(1000);
			}
		}
	};
</script>

<style>
	.loading {
		display: block;
		line-height: 3em;
		text-align: center;
	}

	.modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 260rpx;
		height: 260rpx;
		background-color: #ffffff;
		box-shadow: 0 0 0rpx 2000rpx rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		font-size: 28rpx;
		z-index: 999;
		line-height: 2.4em;
	}

	/* .loading.modal .icon {
		font-size: 60rpx;
	} */

	.modal .logo {
		width: 70rpx;
		height: 70rpx;
	}

	.modal::after {
		content: "";
		position: absolute;
		background-color: #ffffff;
		border-radius: 50%;
		width: 200rpx;
		height: 200rpx;
		font-size: 10px;
		border-top: 6rpx solid rgba(0, 0, 0, 0.05);
		border-right: 6rpx solid rgba(0, 0, 0, 0.05);
		border-bottom: 6rpx solid rgba(0, 0, 0, 0.05);
		border-left: 6rpx solid #f37b1d;
		animation: icon-spin 1s infinite linear;
		z-index: -1;
	}

	@keyframes icon-spin {
		0% {
			-webkit-transform: rotate(0);
			transform: rotate(0);
		}

		100% {
			-webkit-transform: rotate(359deg);
			transform: rotate(359deg);
		}
	}

	.load-progress {
		pointer-events: none;
		top: 0;
		position: fixed;
		width: 100%;
		left: 0;
	}
</style>
