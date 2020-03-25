<template>
    <view
        :class="[
			classes,
			bgColorClass,
			{
				radius: radius,
				round: round,
				solid: borderColor
			},
			borderColorClass,
			size
		]"
        :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				borderColor: borderColorStyle
			}
		]"
        class="input-box flex align-center text-left"
    >
        <view class="height-p100 flex align-center left">
            <slot name="left"></slot>
        </view>
        <view
            :class="[
				colorClass
			]"
            :style="{
				color: colorStyle
			}"
            class="flex-sub margin-lr-xs relative flex align-center"
        >
            <input
                :confirm-type="confirmType"
                :disabled="disabled"
                :focus="focus"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :placeholder-class="phColorClass"
                :placeholder-style="`color: ${phColorStyle};`"
                :selection-end="selection[1]"
                :selection-start="selection[0]"
                :type="inputType"
                :value="val"
                @input="handleInput"
                class="flex-sub"
                ref="input"
            />
            <uxt-icon
                @click="handleClear"
                color="grey"
                type="roundclosefill"
                v-if="clearable && !disabled && val !== ''"
            ></uxt-icon>
            <uxt-icon
                :type="passIcon"
                @click="handleSwitchPass"
                color="grey"
                v-if="type === 'password'"
            ></uxt-icon>
        </view>
        <view class="height-p100 flex align-center right">
            <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import rrMixin from '../mixins/rr.js'
import inputMixin from '../mixins/input.js'
import uxtIcon from './uxt-icon.vue'

export default {
    mixins: [baseMixin, rrMixin, inputMixin],
    components: {
        uxtIcon
    },
    props: {
        // lg 大 xl 超大
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'lg', 'xl'].includes(value)
            }
        },
        // 边框颜色
        borderColor: {
            type: String,
            default: 'grey'
        },
        // placeholder颜色
        phColor: {
            type: String,
            default: '#ccc'
        },
        bgColor: {
            default: ''
        }
    },
    data() {
        return {
            val: this.value,
            passIcon: 'attentionfill',
            password: this.type === 'password'
        }
    },
    computed: {
        borderColorClass() {
            return this.getColor(this.borderColor, 'solid-').classes
        },
        borderColorStyle() {
            return this.getColor(this.borderColor).styles
        },
        phColorClass() {
            return this.getColor(this.phColor, 'text-').classes
        },
        phColorStyle() {
            return this.getColor(this.phColor).styles
        },
        inputType() {
            if (this.type === 'password' && !this.password) {
                return 'text'
            } else {
                return this.type
            }
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        handleClear() {
            this.$emit('input', '')
            this.$emit('clear', '')
        },
        // 切换密码显示
        handleSwitchPass() {
            this.password = !this.password
            if (this.password) {
                this.passIcon = 'attentionfill'
            } else {
                this.passIcon = 'attentionforbidfill'
            }
        }
    },
    watch: {
        value(newVal, oldVal) {
            this.val = newVal
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box {
    height: 50rpx;
    &:not([class*='solid-'])::before {
        border-color: inherit;
    }

    &.lg {
        height: 70rpx;
    }

    &.xl {
        height: 90rpx;
    }
    .left {
        margin-left: 2rpx;
    }
    .right {
        margin-right: 2rpx;
    }
}
</style>
