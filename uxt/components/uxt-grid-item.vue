<template>
    <view
        :class="[classes, colorClass, bgColorClass, border1 ? (isSpacing ? 'solid' : 'solid-right solid-bottom') : '']"
        :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				width: `calc(${100 / col}% - ${spacingStyle})`,
				marginRight: spacingStyle,
				marginBottom: spacingStyle,
				height: square ? `calc(${100 / col}vw - ${spacingStyle})` : ''
			}
		]"
        @click="handleClick"
        class="grid-item inline-block"
    >
        <view class="width-p100 height-p100 flex justify-center align-center padding-tb padding-lr-sm">
			<uxt-badge :badge="badge">
				<view class="flex flex-col justify-center align-center">
					<slot>
						<uxt-icon
							:type="icon"
							size="60rpx"
						></uxt-icon>
						{{ text }}
					</slot>
				</view>
			</uxt-badge>
        </view>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import uxtIcon from '@/uxt/components/uxt-icon.vue'
import uxtBadge from '@/uxt/components/uxt-badge.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtIcon,
		uxtBadge
    },
    props: {
		// 图标
        icon: {
            type: [String, Object]
        },
		// 文本
        text: {
            type: String
        },
        // 角标内容
        badge: {
            type: String,
            default: ''
        },
        bgColor: {
            default: ''
        }
    },
    data() {
        return {
            border1: false // 用来解决微信小程序不显示边框问题
        }
    },
    inject: ['col', 'square', 'border', 'spacing'],
    computed: {
		isSpacing() {
			return this.spacing !== 0 && this.spacing !== '0px' && this.spacing !== '0rpx'
		},
        spacingStyle() {
            return this.getSize(this.spacing).styles || '0px'
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    },
    mounted() {
        this.border1 = this.border
    }
}
</script>

<style lang="scss" scoped>
.grid-item {
    position: relative;
}
</style>
