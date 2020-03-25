<template>
    <view
        :class="[
			classes,
			bgColorClass
		]"
        :style="[
			styles,
			{
				backgroundColor: bgColorStyle
			}
		]"
        @click="handleClick"
        class="cell solid-bottom padding"
    >
        <view class="flex align-center">
            <view class="flex-sub">
                <slot name="left"></slot>
                {{ title }}
            </view>
            <view>
                {{ value }}
                <slot name="right"></slot>
                <uxt-icon
                    classes="margin-left-sm"
                    type="right"
                    v-if="url || rightArrow"
                ></uxt-icon>
            </view>
        </view>
        <view
            class="text-grey text-sm"
            v-if="desc"
        >{{ desc }}</view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import uxtIcon from './uxt-icon.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtIcon
    },
    props: {
        // 左侧标题
        title: {
            type: String,
            default: ''
        },
        // 右侧内容
        value: {
            type: String,
            default: ''
        },
        // 下方说明文字
        desc: {
            type: String,
            default: ''
        },
        rightArrow: {
            type: Boolean,
            default: false
        },
        // 点击跳转url
        url: {
            type: String
        },
        bgColor: {
            default: 'white'
        }
    },
    methods: {
        handleClick(e) {
            this.url &&
                uni.navigateTo({
                    url: this.url
                })
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="scss" scoped>
// .cell {

// }
</style>
