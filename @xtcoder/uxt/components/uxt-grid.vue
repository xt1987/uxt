<template>
    <view
        :class="[
			classes,
			colorClass,
			bgColorClass,
			{
				'solid-top solid-left': border && !spacing
			}
		]"
        :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				paddingLeft: spacingStyle,
				paddingTop: spacingStyle
			}
		]"
        class="gridx"
    >
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'

export default {
    mixins: [baseMixin],
    props: {
        // 列数
        col: {
            type: [Number, String],
            default: 4
        },
        // 正方形格子
        square: {
            type: Boolean,
            default: false
        },
        // 边框
        border: {
            type: Boolean,
            default: true
        },
        // 单元格间距
        spacing: {
            type: [Number, String],
            default: 0
        },
        color: {
            default: '#666'
        },
        bgColor: {
            default: 'white'
        }
    },
    computed: {
        spacingStyle() {
            return this.getSize(this.spacing).styles
        }
    },
    provide() {
        return {
            col: this.col,
            square: this.square,
            border: this.border,
            spacing: this.spacing
        }
    }
}
</script>

<style lang="scss" scoped>
.gridx {
    position: relative;
}
</style>
