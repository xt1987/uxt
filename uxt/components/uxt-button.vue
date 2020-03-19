<template>
    <button
        :class="[
			classes,
		    {
				sm: size === 'sm',
				lg: size === 'lg',
				block: size === 'block',
				radius: radius,
				round: round,
				disabled: disabled
			},
			shadowClass,
			hollowClass,
			(hollow ? hollowClass.replace('solid-', 'text-') : colorClass),
			(hollow ? '' : bgColorClass),
			(hollowStyle ? 'solid' : '')
		]"
        :disabled="disabled"
        :open-type="openType"
        :style="[
		    styles,
		    {
		        backgroundColor: (hollow ? '' : bgColorStyle),
				borderColor: hollowStyle,
				color: (hollow ? hollowStyle : colorStyle),
				boxShadow: (shadowStyle ? `6rpx 6rpx 8rpx ${shadowStyle}7F` : '')
			}
		]"
        @click="handleClick"
        @error="handleError"
        @getphonenumber="handleGetPhoneNumber"
        @getuserinfo="handleGetUserInfo"
        @launchapp="handleLaunchApp"
        @opensetting="handleOpenSetting"
        class="btn"
        type
    >
        <slot></slot>
    </button>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import rrMixin from '@/uxt/mixins/rr.js'
import btnMixin from '@/uxt/mixins/btn.js'

export default {
    mixins: [baseMixin, rrMixin, btnMixin],
    props: {
        // 大小 'sm'小 ''普通 'lg'大 'block'块状
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'sm', 'lg', 'block'].includes(value)
            }
        },
        // 阴影
        shadow: {
            type: String
        },
        // 镂空
        hollow: {
            type: String
        }
    },
    computed: {
        shadowClass() {
            return this.getColor(this.shadow, 'shadow-').classes
        },
        shadowStyle() {
            return this.getColor(this.shadow).styles
        },
        hollowClass() {
            return this.getColor(this.hollow, 'solid-').classes
        },
        hollowStyle() {
            return this.getColor(this.hollow).styles
        }
    },
    methods: {
        // 点击事件
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    position: relative;
    border: 0rpx;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 0;
    padding: 0 30rpx;
    font-size: 28rpx;
    height: 64rpx;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    overflow: visible;
    transform: translate(0rpx, 0rpx);
    &::before {
        border-color: inherit;
    }
    &::after {
        display: none;
    }
    &.round {
        border-radius: 10000rpx;
    }
    &.radius {
        border-radius: 10rpx;
    }
    &.sm {
        padding: 0 20rpx;
        font-size: 20rpx;
        height: 48rpx;
    }
    &.lg,
    &.block {
        padding: 0 40rpx;
        font-size: 32rpx;
        height: 80rpx;
    }
    &.block {
        display: flex;
    }
    &[class*='solid'] {
        background-color: transparent !important;
    }
    &.button-hover {
        transform: translate(1rpx, 1rpx);
    }
}
</style>
