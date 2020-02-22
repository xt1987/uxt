<template>
	<view class="badge" :class="[classes]" :style="[styles]">
		<slot></slot>
		<view v-if="badge" class="tag">
			<slot name="badge">
				<view v-if="badge === '-'" class="circle round" :class="[
						bgColorClass
					]" :style="{
						backgroundColor: bgColorStyle
					}"></view>
				<uxt-tag v-else size="sm" round :color="color" :bgColor="bgColor">{{badge}}</uxt-tag>
			</slot>
		</view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import uxtTag from '@/uxt/components/uxt-tag.vue';

	export default {
		mixins: [baseMixin],
		components: {
			uxtTag
		},
		props: {
			// 角标内容
			badge: {
				type: String
			},
			bgColor: {
				default: 'red'
			}
		}
	};
</script>

<style>
	.badge {
		position: relative;
	}

	.tag {
		display: inline-block;
		position: absolute;
		top: -8rpx;
		right: -8rpx;
		z-index: 888;
	}

	.tag .circle {
		width: 16rpx;
		height: 16rpx;
	}
</style>
