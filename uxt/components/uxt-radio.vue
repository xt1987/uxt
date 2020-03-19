<template>
    <view
        :class="[
			classes,
			(checked2 ? bgColorClass : `${bgColorClass.replace('gradual-', '').replace('light-', '').replace('bg-', 'solid-')} bg-white`),
			(checked2 ? colorClass : ''),
			{
				disabled: disabled,
				solid: !checked2 && !bgColorClass,
				sm: size === 'sm'
			}
		]"
        :style="[
			styles,
			{
				backgroundColor: (checked2 ? bgColorStyle : ''),
				color: (checked2 ? colorStyle : ''),
				borderColor: (checked2 ? '' : bgColorStyle)
			}
		]"
        @click="handleClick"
        class="radio margin-right-xs flex-inline align-center justify-center round"
    >
        <uxt-icon
            type="check"
            v-if="checked2"
        ></uxt-icon>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtIcon
    },
    props: {
        // 大小, ''/'sm'
        size: {
            type: String
        },
        // 用于v-model绑定
        value: {
            type: String,
            default: null
        },
        // 值
        values: {
            type: String
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
        }
    },
    data() {
        let checked
        if (this.value !== null) {
            // v-model
            if (this.value === this.values) {
                checked = true
            } else {
                checked = false
            }
        } else {
            checked = this.checked
        }
        return {
            checked2: checked
        }
    },
    watch: {
        checked(newVal, oldVal) {
            this.checked2 = newVal
        },
        // v-model
        value(newVal, oldVal) {
            if (newVal === this.values) {
                this.checked2 = true
            } else {
                this.checked2 = false
            }
        }
    },
    methods: {
        handleClick() {
            if (!this.disabled && !this.checked2) {
                this.checked2 = true
                let ret = true
                if (this.value !== null) {
                    // v-model
                    ret = this.values
                }
                this.$emit('change', ret)
                this.$emit('input', ret)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.radio {
    position: relative;
    width: 50rpx;
    height: 50rpx;
    vertical-align: middle;
    &:not([class*='solid-'])::before {
        border-color: inherit;
    }
    &.sm {
        width: 36rpx;
        height: 36rpx;
    }
}
</style>
