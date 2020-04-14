<template>
    <view
        :class="[
			classes,
			{
				radius: radius,
				round: round
			},
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
				color: (hollow ? hollowStyle : colorStyle)
			}
		]"
        @click="handleClick"
        class="icon"
    >
        <view
            :class="[
				`icon-${type}`,
				(animation ? `ani-${animation}` : ''),
				sizeClass]"
            :style="{
				fontSize: sizeStyle
			}"
            class="inner icon"
        ></view>
    </view>
</template>

<script>
import { isSize } from '../utils/validator.js'
import baseMixin from '../mixins/base.js'
import rrMixin from '../mixins/rr.js'

export default {
	name: 'uxt-icon',
    mixins: [baseMixin, rrMixin],
    props: {
        // 图标类型
        type: {
            type: String,
            required: true
        },
        // 图标大小 xsl/sl/xxl/xl/lg/df/sm/xs/(数字+rpx/px)
        size: {
            type: [Number, String],
            validator(value) {
                return (
                    isSize(value) ||
                    [
                        '',
                        'xsl',
                        'sl',
                        'xxl',
                        'xl',
                        'lg',
                        'df',
                        'sm',
                        'xs'
                    ].includes(value)
                )
            }
        },
        // 动画 pulse/spin
        animation: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'pulse', 'spin'].includes(value)
            }
        },
        // 镂空
        hollow: {
            type: String
        },
        bgColor: {
            default: ''
        }
    },
    computed: {
        sizeClass() {
            return this.getSize(this.size).classes
        },
        sizeStyle() {
            return this.getSize(this.size).styles
        },
        hollowClass() {
            return this.getColor(this.hollow, 'solid-').classes
        },
        hollowStyle() {
            return this.getColor(this.hollow).styles
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../xt-icon/iconfont.css';
.icon {
    display: inline-block;
    line-height: 1;
    text-align: center;
    padding: 2rpx;
    position: relative;
    box-sizing: border-box;
    &[class*='solid'] {
        background-color: transparent !important;
    }
    &::before {
        border-color: inherit;
    }

    .inner {
		font-family: "xt-icon" !important;
        font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
    }
}
</style>
