<template>
    <view
        :class="[classes]"
        :style="[styles]"
        class="badge"
    >
        <slot></slot>
        <view
            class="tag"
            v-if="badge || $slots.badge"
        >
            <slot name="badge">
                <view
                    :class="[bgColorClass]"
                    :style="{
						backgroundColor: bgColorStyle
					}"
                    class="circle round"
                    v-if="badge === '-'"
                ></view>
                <uxt-tag
                    :bg-color="bgColor"
                    :color="color"
                    round
                    size="sm"
                    v-else
                >{{ badge }}</uxt-tag>
            </slot>
        </view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import uxtTag from './uxt-tag.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtTag
    },
    props: {
        // 角标内容
        badge: {
            type: String,
            default: ''
        },
        bgColor: {
            default: 'red'
        }
    }
}
</script>

<style lang="scss" scoped>
.badge {
    position: relative;
    display: inline-block;
    .tag {
        display: inline-block;
        position: absolute;
        top: -8rpx;
        right: -8rpx;
        z-index: 888;
        .circle {
            width: 16rpx;
            height: 16rpx;
        }
    }
}
</style>
