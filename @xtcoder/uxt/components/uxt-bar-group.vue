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
        class="bar-group"
    >
        <view
            :class="[colorClass]"
            :style="{ color: colorStyle }"
            class="padding flex align-center"
            v-if="title"
        >
			<view>
				<slot name="left"></slot>
			</view>
			<view class="flex-sub">
				{{ title }}
			</view>
			<view>
				<slot name="right"></slot>
			</view>
		</view>
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import { allTag } from '../utils/validator.js'

export default {
    mixins: [baseMixin],
    props: {
        title: {
            type: String
        },
        color: {
            default: 'grey'
        },
        bgColor: {
            default: 'gray'
        }
    }
}
</script>

<style lang="scss" scoped>
.bar-group {
    position: relative;
}
</style>
