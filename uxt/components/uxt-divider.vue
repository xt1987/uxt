<template>
    <view
        :class="[
			classes
		]"
        :style="[
			styles
		]"
        class="divider padding-tb-sm flex align-center"
    >
        <view
            :class="bgColorClass"
            :style="{backgroundColor: bgColorStyle}"
            class="line flex-sub"
        ></view>
        <view
            :class="colorClass"
            :style="{color: colorStyle}"
            class="text-sm margin-lr-sm"
            v-if="$slots.default"
        >
            <slot></slot>
        </view>
        <view
            :class="bgColorClass"
            :style="{backgroundColor: bgColorStyle}"
            class="line flex-sub"
        ></view>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'

export default {
    mixins: [baseMixin]
}
</script>

<style lang="scss">
.divider {
    position: relative;
    width: 100%;
    overflow: hidden;
    .line {
        height: 2rpx;
        transform: scaleY(0.5);
    }
}
</style>
