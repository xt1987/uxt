<template>
	<view class="title-bar padding-sm" :class="[
			classes,
			bgColorClass
		]" :style="[
			styles,
			{
				backgroundColor: bgColorStyle
			}
		]">
		<uxt-icon v-if="icon" :type="icon.type" :color="icon.color || theme" :size="icon.size || 'xl'"
		 :animation="icon.animation" :bgColor="icon.bgColor" :round="icon.round" :hollow="icon.hollow"></uxt-icon>
		<view class="title">
			<text :class="[
					colorClass, 
					titleSizeClass, 
					{
						'text-bold': titleBold
					}
				]" :style="{
					color: colorStyle, 
					fontSize: titleSizeStyle
				}">{{title}}</text>
			<!-- 英文标题阴影 -->
			<text v-if="enTitle" class="underline shadow en-title text-ABC text-shadow" :class="[
					enTitleColorClass, 
					titleSizeClass, 
					{
						'text-bold': titleBold
					}
				]"
			 :style="{
					color: enTitleColorStyle, 
					width: `${title.length}em`
				}">{{enTitle}}</text>
			<!-- 下划线 -->
			<text v-else-if="underline" class="underline" :class="underlineColorClass" :style="{
					backgroundColor: underlineColorStyle, 
					width: `${title.length}em`
				}"></text>
			<!-- 阴影 -->
			<text v-else-if="shadow" class="underline shadow" :class="shadowColorClass" :style="{
					backgroundColor: shadowColorStyle, 
					width: `${title.length}em`
				}"></text>
			<!-- 副标题 -->
			<text v-if="subTitle" class="sub-title text-gray margin-left-sm">{{subTitle}}</text>
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
			// 图标 iconObj
			icon: {
				type: Object,
				default () {
					return {
						type: 'title'
					};
				}
			},
			// 标题
			title: {
				type: String,
				default: '标题'
			},
			// 标题大小
			titleSize: {
				type: [Number, String]
			},
			// 标题是否加粗
			titleBold: {
				type: Boolean,
				default: false
			},
			// 副标题
			subTitle: {
				type: String
			},
			// 英文标题
			enTitle: {
				type: String
			},
			// 是否下划线
			underline: {
				type: Boolean,
				default: false
			},
			// 下划线样式，支持渐变class
			underlineColor: {
				type: String
			},
			// 是否阴影
			shadow: {
				type: Boolean,
				default: false
			},
			bgColor: {
				default: 'white'
			}
		},
		computed: {
			theme() {
				return this.$store.state.uxtStore.theme;
			},
			enTitleColorClass() {
				return this.getColor(this.color, 1).classes;
			},
			enTitleColorStyle() {
				return this.getColor(this.color, 1).styles;
			},
			underlineColorClass() {
				return this.getColor((this.underlineColor || this.color), 2).classes;
			},
			underlineColorStyle() {
				return this.getColor((this.underlineColor || this.color), 2).styles;
			},
			shadowColorClass() {
				return this.getColor(this.color, 2).classes;
			},
			shadowColorStyle() {
				return this.getColor(this.color, 2).styles;
			},
			titleSizeClass() {
				return this.getSize(this.titleSize).classes;
			},
			titleSizeStyle() {
				return this.getSize(this.titleSize).styles;
			}
		}
	};
</script>

<style>
	.title-bar {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		max-width: 100%;
	}

	.title-bar .title {
		display: inline-block;
		position: relative;
	}

	.title-bar .underline {
		position: absolute;
		bottom: -0.3em;
		height: 4rpx;
		left: 0;
	}

	.title-bar .underline.shadow {
		bottom: -0.2em;
		height: 0.6em;
		opacity: 0.3;
		border-radius: 6rpx;
		left: 0.5em;
		box-shadow: none;
	}

	.title-bar .underline.shadow.en-title {
		bottom: -0.1em;
	}

	.title-bar .underline.sub-title {
		bottom: -0.6em;
		height: 1em;
	}
</style>
