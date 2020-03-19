<template>
    <view
        :class="[
			classes,
			{
				radius: radius,
				round: round
			},
			size,
			bgColorClass,
			colorClass
		]"
        :style="[
			styles,
			{
				backgroundImage: (avatar ? `url(${avatar})` : ''),
				backgroundColor: bgColorStyle,
				color: colorStyle
			}
		]"
        class="avatar"
    >
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import rrMixin from '@/uxt/mixins/rr.js'

export default {
    mixins: [baseMixin, rrMixin],
    props: {
        // 头像地址
        avatar: {
            type: String
        },
        // 尺寸 'sm'小 ''默认 'lg'大 'xl'超大
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'sm', 'lg', 'xl'].includes(value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    font-variant: small-caps;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    position: relative;
    width: 64rpx;
    height: 64rpx;
    background-size: cover;
    background-position: center;
    vertical-align: middle;
    font-size: 1.4em;
    &.sm {
        width: 48rpx;
        height: 48rpx;
        font-size: 1em;
    }
    &.lg {
        width: 96rpx;
        height: 96rpx;
        font-size: 1.8em;
    }
    &.xl {
        width: 128rpx;
        height: 128rpx;
        font-size: 2em;
    }
}
</style>
