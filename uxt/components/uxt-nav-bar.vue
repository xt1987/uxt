<template>
	<view class="nav-bar flex justify-between align-center" :class="[
			classes,
			colorClass,
			bgColorClass
		]"
	 :style="[
			styles,
			{
				height: `${navBarHeight}px`,
				color: colorStyle,
				backgroundColor: bgColorStyle
			}
		]">
		<view class="height-p100 flex align-center">
			<view v-if="back" class="padding-sm" @click="backPage">
				<uxt-icon type="back" size="lg"></uxt-icon>
			</view>
			<slot name="left"></slot>
		</view>
		<view v-if="search" class="flex-sub margin-lr-sm">
			<uxt-input-box size="lg" :radius="searchObj.shape === 'radius'" :round="searchObj.shape === 'round'" :placeholder="searchObj.placeholder"
			 bgColor="white" borderColor="">
				<template #left>
					<uxt-icon classes="margin-left-sm" type="search"></uxt-icon>
				</template>
			</uxt-input-box>
		</view>
		<view v-else class="center flex align-center text-lg">
			<view class="width-p100 text-center text-cut">
				<slot></slot>
			</view>
		</view>
		<view class="height-p100 flex align-center">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';
	import uxtInputBox from '@/uxt/components/uxt-input-box.vue';

	export default {
		mixins: [baseMixin],
		components: {
			uxtIcon,
			uxtInputBox
		},
		props: {
			// 是否开启返回按钮
			back: {
				type: Boolean,
				default: true
			},
			// 搜索框 {shape: 'radius/round', placeholder: ''}
			search: {
				type: [Boolean, Object]
			},
			bgColor: {
				default: 'white'
			}
		},
		data() {
			return {
				navBarHeight: this.gNavBarHeight
			};
		},
		computed: {
			searchObj() {
				return Object.assign({
					shape: 'radius',
					placeholder: '搜索'
				}, this.search);
			}
		},
		methods: {
			// 返回上一页
			backPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	};
</script>

<style>
	.nav-bar {
		position: relative;
	}

	.nav-bar>.center {
		position: absolute;
		left: 150rpx;
		right: 150rpx;
		top: 0;
		bottom: 0;
		overflow-x: auto;
	}
</style>
