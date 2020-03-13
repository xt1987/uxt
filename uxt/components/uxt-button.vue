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

export default {
    mixins: [baseMixin, rrMixin],
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
        },
        // 禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 开放能力
        openType: {
            type: String,
            default: '',
            validator(value) {
                return [
                    '',
                    'feedback',
                    'share',
                    'getUserInfo',
                    'contact',
                    'getPhoneNumber',
                    'launchApp',
                    'openSetting',
                    'getAuthorize',
                    'contactShare',
                    'lifestyle',
                    'openGroupProfile'
                ].includes(value)
            }
        },
        // 触发form组件submit/reset
        formType: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'submit', 'reset'].includes(value)
            }
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
        },
        // 当使用微信小程序开放能力时，发生错误时回调
        handleError(e) {
            this.$emit('error', e)
        },
        // 微信小程序获取用户手机号回调
        handleGetPhoneNumber(e) {
            this.$emit('getphonenumber', e)
        },
        // 微信小程序获取用户信息回调
        handleGetUserInfo(e) {
            this.$emit('getuserinfo', e)
        },
        // 微信小程序打开 APP 成功的回调
        handleLaunchApp(e) {
            this.$emit('launchapp', e)
        },
        // 微信小程序在打开授权设置页并关闭后回调
        handleOpenSetting(e) {
            this.$emit('opensetting', e)
        }
    }
}
</script>

<style lang="scss">
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
