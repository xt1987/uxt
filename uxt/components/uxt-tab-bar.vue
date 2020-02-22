<template>
	<view class="tab-bar flex" :class="[
			classes
		]" :style="[
			styles
		]">
		<view class="item flex align-center justify-center" v-for="(item, index) in items2" :key="index" :class="[
				{
					add: item.type === 'add'
				},
				item.cls,
				(item.colorClass || colorClass),
				(item.bgColorClass || bgColorClass)
			]"
		 :style="[
				{
					color: (item.colorStyle || colorStyle),
					backgroundColor: (item.bgColorStyle || bgColorStyle)
				}
			]"
		 @click="onItemClick(index)">
			<uxt-badge v-if="item.type !== 'btn'" :badge="item.badge" classes="padding-lr-sm">
				<view v-if="item.icon" class="icon-img flex align-center justify-center" :class="[
						item.type === 'add' ? item.addBgColorClass : ''
					]"
				 :style="[
						{
							backgroundColor: item.type === 'add' ? item.addBgColorStyle : ''
						}
					]">
					<uxt-icon v-if="item.isIcon" :type="item.icon.type" :color="item.icon.color" :size="item.icon.size || 'xxl'"
					 :animation="item.icon.animation"></uxt-icon>
					<view v-else class="icon flex align-center justify-center">
						<image class="img" :src="item.icon"></image>
					</view>
				</view>
				<view class="text-sm">
					{{item.text}}
				</view>
			</uxt-badge>
			<uxt-button v-else :class="item.round ? '' : 'width-p100 height-p100'" :classes="item.round ? '' : 'width-p100 height-p100'"
			 :round="item.round" :shadow="item.shadow" :bgColor="item.btnBgColor" :color="item.btnColor">
				{{item.text}}
			</uxt-button>
		</view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import uxtBadge from '@/uxt/components/uxt-badge.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';
	import uxtButton from '@/uxt/components/uxt-button.vue';

	export default {
		mixins: [baseMixin],
		components: {
			uxtBadge,
			uxtIcon,
			uxtButton
		},
		props: {
			/**
			 * 选项
			 * [
			 *     {
			 *         type: 选项类型，null/'add'/'btn',
			 *         icon: iconObj/图片地址,
			 *         text: 文字,
			 *         color: 选项前景色,
			 *         bgColor: 选项背景色,
			 *         addBgColor: add选项圆圈背景色,
			 *         btnColor: btn选项前景色,
			 *         btnBgColor: btn选项背景色,
			 *         round: 是否圆弧btn,
			 *         shadow: btn是否有阴影
			 *     },
			 *     ...
			 * ]
			 */
			items: {
				type: Array,
				default () {
					return [];
				},
				required: true
			},
			color: {
				default: 'gray'
			},
			bgColor: {
				default: 'white'
			}
		},
		computed: {
			theme() {
				return this.$store.state.uxtStore.theme;
			},
			items2() {
				const that = this;
				const items = that.items;
				let hasBtn = false;
				for (let item of items) {
					if (item.type === 'btn') {
						hasBtn = true;
						break;
					}
				}

				for (let item of items) {
					item.isIcon = (typeof item.icon === 'object');
					const color = that.getColor(item.color, 1);
					const bgColor = that.getColor(item.bgColor, 2);
					item.colorClass = color.classes;
					item.colorStyle = color.styles;
					item.bgColorClass = bgColor.classes;
					item.bgColorStyle = bgColor.styles;
					item.round = item.round || false;
					// add btn bgColor
					if (item.type === 'add') {
						const addBgColor = that.getColor(item.addBgColor || that.theme, 2);
						item.addBgColorClass = addBgColor.classes;
						item.addBgColorStyle = addBgColor.styles;
					}
					// item width
					if (!hasBtn || item.type === 'btn') {
						item.cls = 'flex-sub';
					} else {
						item.cls = 'padding-lr-sm';
					}
				}

				return items;
			}
		},
		methods: {
			onItemClick(index) {
				this.$emit('itemClick', index);
			}
		}
	};
</script>

<style>
	.tab-bar {
		height: 100rpx;
	}

	.tab-bar .item {
		height: 100%;
		text-align: center;
	}

	.tab-bar .item .icon {
		margin: 0 auto;
	}

	.tab-bar .item .icon .img {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}

	.tab-bar .add {
		position: relative;
		z-index: 888;
		padding-top: 50rpx;
	}

	.tab-bar .add .icon-img {
		position: absolute;
		width: 70rpx;
		z-index: 888;
		height: 70rpx;
		border-radius: 50%;
		line-height: 70rpx;
		font-size: 50rpx;
		top: -84rpx;
		left: 0;
		right: 0;
		margin: auto;
		padding: 0;
	}

	.tab-bar .add::before {
		content: "";
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: -40rpx;
		left: 0;
		right: 0;
		margin: auto;
		box-shadow: 0 -3rpx 8rpx rgba(0, 0, 0, 0.08);
		border-radius: 50rpx;
		background-color: inherit;
	}
</style>
