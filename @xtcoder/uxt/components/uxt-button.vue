<template>
	<view
		:class="[
			classes,
			size,
			{
				radius: radius,
				round: round,
				disabled: disabled,
				click: click
			},
			shadowClass,
			hollowClass,
			(hollow ? hollowClass.replace('solid-', 'text-') : colorClass),
			(hollow ? '' : bgColorClass),
			(hollowStyle ? 'solid' : '')
		]"
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
		@touchstart="click=true"
		@touchcancel="click=false"
		@touchend="click=false"
		class="button">
		<button
			:app-parameter="appParameter"
			:disabled="disabled"
			:form-type="formType"
			:hover-stop-propagation="hoverStopPropagation"
			:lang="lang"
			:open-type="openType"
			:session-from="sessionFrom"
			:send-message-title="sendMessageTitle"
			:send-message-path="sendMessagePath"
			:send-message-img="sendMessageImg"
			:show-message-card="showMessageCard"
			@contact="handleContact"
			@error="handleError"
			@getphonenumber="handleGetPhoneNumber"
			@getuserinfo="handleGetUserInfo"
			@launchapp="handleLaunchApp"
			@opensetting="handleOpenSetting"
			class="btn"
		>
			<slot></slot>
		</button>
	</view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import rrMixin from '../mixins/rr.js'
import btnMixin from '../mixins/btn.js'

export default {
	name: 'uxt-button',
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
	inject: {
		formId: {
			default: 0
		}
	},
	data() {
		return {
			click: false
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
			if (this.formId) {
				switch (this.formType) {
					case 'submit':
						uni.$emit(`formsubmit.${this.formId}`)
						break
					case 'reset':
						uni.$emit(`formreset.${this.formId}`)
						break
				}
			}
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    position: relative;
	display: inline-block;
	.btn {
		border: 0rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border-radius: 0;
		text-align: center;
		text-decoration: none;
		line-height: 1;
		overflow: visible;
		padding: 0 30rpx;
		font-size: 28rpx;
		height: 64rpx;
		color: inherit;
		background: none;
		&::after {
			display: none;
		}
	}
    &.sm .btn {
        padding: 0 20rpx;
        font-size: 20rpx;
        height: 48rpx;
    }
    &.lg .btn,
    &.block .btn {
        padding: 0 40rpx;
        font-size: 32rpx;
        height: 80rpx;
    }
    &.block {
        display: block;
    }
    &[class*='solid'] {
        background-color: transparent !important;
    }
	&.click {
		transform: translate(1rpx, 1rpx);
	}
}
</style>
