<template>
    <view
        :class="[classes, colorClass, bgColorClass]"
        :style="[
			styles,
			{
				height: `${navBarHeight}px`,
				color: colorStyle,
				backgroundColor: bgColorStyle
			}
		]"
        class="nav-bar flex justify-between align-center"
    >
        <view class="height-p100 flex align-center">
            <view
                @click="backPage"
                class="padding-sm"
                v-if="back"
            >
                <uxt-icon
                    size="lg"
                    type="back"
                ></uxt-icon>
            </view>
            <slot name="left"></slot>
        </view>
        <view class="center flex align-center text-lg">
            <view class="width-p100 text-center text-cut">
                <slot></slot>
            </view>
        </view>
        <view
            class="height-p100 flex align-center padding-lr-sm"
            v-if="$slots.right"
        >
            <slot name="right"></slot>
        </view>
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
        // 是否开启返回按钮
        back: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            navBarHeight: this.gNavBarHeight
        }
    },
    computed: {
        searchObj() {
            return Object.assign(
                {
                    shape: 'radius',
                    placeholder: '搜索'
                },
                this.search
            )
        }
    },
    methods: {
        // 返回上一页
        backPage() {
            uni.navigateBack({
                delta: 1
            })
        }
    }
}
</script>

<style lang="scss">
.nav-bar {
    position: relative;
    > .center {
        position: absolute;
        left: 150rpx;
        right: 150rpx;
        top: 0;
        bottom: 0;
        overflow-x: auto;
    }
}
</style>
