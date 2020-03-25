<template>
    <view
        :class="[classes, size]"
        :style="styles"
        class="avatar-group"
    >
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'

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

<style lang="scss" scoped>
.avatar-group {
    position: relative;
    padding: 0 10rpx 0 40rpx;
	
	&.sm {
		padding-left: 30rpx;
	}
	
	&.lg {
		padding-left: 55rpx;
	}
	
	&.xl {
		padding-left: 70rpx;
	}
}
</style>
