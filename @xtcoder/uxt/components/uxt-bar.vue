<template>
    <view
        :class="[
			classes,
			colorClass,
			bgColorClass
		]"
        :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorStyle
			}
		]"
        @click="handleClick"
        class="bar solid-bottom padding"
    >
        <view class="flex align-center">
            <view class="flex align-center">
				<uxt-icon
					:animation="icon2.animation"
					:bg-color="icon2.bgColor"
					:color="icon2.color"
					:hollow="icon2.hollow"
					:radius="icon2.radius"
					:round="icon2.round"
					:size="icon2.size"
					:type="icon2.type"
					v-if="icon2"
				></uxt-icon>
				<slot name="left"></slot>
                {{ title }}
            </view>
            <view class="flex-sub flex justify-end align-center">
                {{ content }}
                <slot name="right"></slot>
                <uxt-icon
                    classes="margin-left-sm"
                    type="angle-right"
                    v-if="url || arrow"
                ></uxt-icon>
            </view>
        </view>
        <view
            class="text-grey text-sm margin-top-xs"
            v-if="desc"
        >{{ desc }}</view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import barMixin from '../mixins/bar.js'
import uxtIcon from './uxt-icon.vue'

export default {
	name: 'uxt-bar',
    mixins: [baseMixin, barMixin],
    components: {
        uxtIcon
    },
    props: {
        // 点击跳转url
        url: {
            type: String
        },
        bgColor: {
            default: 'white'
        }
    },
	computed: {
		icon2() {
			if (!this.icon) {
				return null
			}
			if (typeof this.icon === 'string') {
				return {
					type: this.icon
				}
			}
			return this.icon
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
</style>
