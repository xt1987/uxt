<template>
    <view
        :class="[
			classes,
			(checked1 ? `${bgColorClass} ${bgColorClass.replace('gradual-', '').replace('light-', '').replace('bg-', 'solid-')}` : 'bg-grey solid-grey'),
			colorClass,
			{
				radius: radius,
				round: round,
				solid: checked1 && !bgColorClass,
				disabled: disabled,
				sm: size === 'sm'
			}
		]"
        :style="[
			styles,
			{
				backgroundColor: (checked1 ? bgColorStyle : ''),
				borderColor: (checked1 ? bgColorStyle : '')
			}
		]"
        @click="handleClick"
        class="switch border"
    >
        <view class="flex height-p100">
            <view
                :class="[
					bgColorClass,
					{
						radius: radius,
						round: round
					}
				]"
                class="flex-sub flex justify-center align-center"
                v-show="checked1"
            >
                <uxt-icon
                    :animation="checkedIcon.animation"
                    :bg-color="checkedIcon.bgColor"
                    :color="checkedIcon.color"
                    :hollow="checkedIcon.hollow"
                    :radius="checkedIcon.radius"
                    :round="checkedIcon.round"
                    :type="checkedIcon.type"
                    v-if="checkedIcon"
                ></uxt-icon>
            </view>
            <view
                :class="[
					{
						radius: radius,
						round: round
					}
				]"
                class="bg-white flex-sub"
            ></view>
            <view
                :class="[
					{
						radius: radius,
						round: round
					}
				]"
                class="flex-sub flex justify-center align-center bg-grey"
                v-show="!checked1"
            >
                <uxt-icon
                    :animation="uncheckedIcon.animation"
                    :bg-color="uncheckedIcon.bgColor"
                    :color="uncheckedIcon.color"
                    :hollow="uncheckedIcon.hollow"
                    :radius="uncheckedIcon.radius"
                    :round="uncheckedIcon.round"
                    :type="uncheckedIcon.type"
                    v-if="uncheckedIcon"
                ></uxt-icon>
            </view>
        </view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import rrMixin from '../mixins/rr.js'
import uxtIcon from './uxt-icon.vue'

export default {
    mixins: [baseMixin, rrMixin],
    components: {
        uxtIcon
    },
    props: {
		size: {
			type: [Number, String],
			default: '',
			validator(value) {
				return ['', 'sm'].includes(value)
			}
		},
        // 用于v-model绑定
        value: {
            type: Boolean,
            default: null
        },
        // 是否选中
        checked: {
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 选中时显示的图标
        checkedIcon: {
            type: Object,
            default() {
                return {
                    type: 'check'
                }
            }
        },
        // 非选中时显示的图标
        uncheckedIcon: {
            type: Object,
            default() {
                return {
                    type: 'close'
                }
            }
        }
    },
    data() {
        return {
            checked1:
                this.value === true
                    ? true
                    : this.value === false
                    ? false
                    : this.checked
        }
    },
    watch: {
        checked(newVal, oldVal) {
            if (this.value === null) {
                this.checked1 = newVal
            }
        },
        value(newVal, oldVal) {
            this.checked1 = this.value
        }
    },
    methods: {
        handleClick() {
            if (!this.disabled) {
                this.checked1 = !this.checked1
                this.$emit('change', this.checked1)
                this.$emit('input', this.checked1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 100rpx;
    height: 50rpx;
    vertical-align: middle;
    &:not([class*='solid-'])::before {
        border-color: inherit;
    }
	&.sm {
		width: 72rpx;
		height: 36rpx;
	}
}
</style>
