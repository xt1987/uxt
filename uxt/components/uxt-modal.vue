<template>
	<view class="modal flex" :class="[
			classes,
			{
				show: show2,
				'flex-col justify-start': position === 'top',
				'justify-end': position === 'right',
				'flex-col justify-end': position === 'bottom',
				'justify-start': position === 'left',
				'justify-center': position === 'center',
				'align-center': autoWH
			}
		]"
	 :style="[
			styles,
			{
				top: `${top}px`
			}
		]" @click="handleClose(0)">
		<view :class="[
				colorClass,
				bgColorClass,
				animation,
				{
					'full-screen': !autoWH && position === 'center'
				}
			]"
		 :style="{
				color: colorStyle,
				backgroundColor: bgColorStyle
			}" @click.stop="">
			<view v-if="close" class="text-right padding-xs">
				<uxt-icon type="close" @click="handleClose(1)"></uxt-icon>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		mixins: [baseMixin],
		components: {
			uxtIcon
		},
		props: {
			// 是否打开模态
			show: {
				type: Boolean,
				default: false
			},
			// 内容位置 top/right/bottom/left/center
			position: {
				type: String,
				default: 'center',
				validator(value) {
					return ['top', 'right', 'bottom', 'left', 'center'].includes(value);
				}
			},
			// 自动宽高，由内容决定宽度与高度
			autoWH: {
				type: Boolean,
				default: false
			},
			// 关闭按钮
			close: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				top: this.gStatusBarHeight + this.gNavBarHeight,
				show2: this.show,
				animation: ''
			};
		},
		watch: {
			show(newVal, oldVal) {
				this.show2 = newVal;
				if (this.show2) {
					switch (this.position) {
						case 'top':
							this.animation = 'ani-slide-top';
							break;
						case 'right':
							this.animation = 'ani-slide-right';
							break;
						case 'bottom':
							this.animation = 'ani-slide-bottom';
							break;
						case 'left':
							this.animation = 'ani-slide-left';
							break;
						case 'center':
							this.animation = 'ani-fade';
							break;
						default:
							this.animation = '';
							break;
					}
					setTimeout(() => {
						this.animation = '';
					}, 1000);
				}
			}
		},
		methods: {
			handleClose(type) {
				if ((type === 0 && !this.close) || type === 1) {
					this.show2 = false;
					this.$emit('close');
				}
			}
		}
	};
</script>

<style>
	.modal {
		position: fixed;
		/* top: 0; */
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 999;
		opacity: 0;
		outline: 0;
		text-align: center;
		/* -ms-transform: scale(1.185); */
		/* transform: scale(1.185); */
		backface-visibility: hidden;
		perspective: 2000rpx;
		background: rgba(0, 0, 0, 0.6);
		/* transition: all 0.3s ease-in-out 0s; */
		pointer-events: none;
	}

	.modal.show {
		opacity: 1;
		/* transition-duration: 0.3s; */
		/* -ms-transform: scale(1); */
		/* transform: scale(1); */
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}

	.full-screen {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
	}
</style>
