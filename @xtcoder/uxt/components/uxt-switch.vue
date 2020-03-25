<template>
    <view
        :class="[
			classes,
			(checked2 ? `${bgColorClass} ${bgColorClass.replace('gradual-', '').replace('light-', '').replace('bg-', 'solid-')}` : 'bg-grey solid-grey'),
			colorClass,
			{
				radius: radius,
				round: round,
				solid: checked2 && !bgColorClass,
				disabled: disabled
			}
		]"
        :style="[
			styles,
			{
				backgroundColor: (checked2 ? bgColorStyle : ''),
				borderColor: (checked2 ? bgColorStyle : '')
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
                v-show="checked2"
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
                v-show="!checked2"
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
            checked2:
                this.value === true
                    ? true
                    : this.value === false
                    ? false
                    : this.checked
        }
    },
    watch: {
        checked(newVal) {
            if (this.value === null) {
                this.checked2 = newVal
            }
        },
        value(newVal) {
            this.checked2 = this.value
        }
    },
    methods: {
        handleClick() {
            if (!this.disabled) {
                this.checked2 = !this.checked2
                this.$emit('change', this.checked2)
                this.$emit('input', this.checked2)
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
}
</style>
