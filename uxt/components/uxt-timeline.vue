<template>
    <view
        :class="[classes, bgColorClass]"
        :style="[styles, { backgroundColor: bgColorStyle }]"
        class="timeline"
    >
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'

export default {
    mixins: [baseMixin],
    props: {
        // 轴线位置
        position: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value)
            }
        },
        // 线条颜色
        color: {
            default: '#aaa'
        },
        bgColor: {
            default: 'white'
        }
    },
    provide() {
        return {
            position: this.position,
            colorClass: this.colorClass,
            colorStyle: this.colorStyle,
            bgColorClass: this.bgColorClass,
            bgColorStyle: this.bgColorStyle
        }
    }
}
</script>

<style lang="scss" scoped>
.timeline {
    position: relative;
}
</style>
