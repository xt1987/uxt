<template>
	<view class="avatar-group" :class="[classes, size]" :style="styles">
		<slot></slot>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	
	export default {
		mixins: [baseMixin],
		props: {
			// 'sm'小 ''默认 'lg'大 'xl'超大
			size: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>
	.avatar-group {
		padding: 0 10rpx 0 40rpx;
	}
	.avatar-group.sm {
		padding-left: 30rpx;
	}
	.avatar-group.lg {
		padding-left: 55rpx;
	}
	.avatar-group.xl {
		padding-left: 70rpx;
	}
</style>
