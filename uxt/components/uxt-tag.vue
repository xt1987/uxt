<template>
    <view
        :class="[
			classes,
			{
				radius: radius,
				round: round,
				solid: bgColorStyle
			},
			bgColorClass.replace('-gradual', '').replace('-light', '').replace('bg-', 'solid-')
		]"
        :style="[
			styles,
			{
				borderColor: bgColorStyle
			}
		]"
        class="capsule"
        v-if="isCapsule"
    >
        <view
            :class="[
				bgColorClass, 
				colorClass, 
				{
					sm: size === 'sm',
					'radius-tl radius-bl': radius,
					'round-tl round-bl': round
				}
			]"
            :style="{
				backgroundColor: bgColorStyle, 
				color: colorStyle, 
				borderColor: (bgColorStyle ? bgColorStyle : '')
			}"
            class="tag"
        >
            <uxt-icon
                :animation="capsule.animation"
                :bg-color="capsule.bgColor"
                :color="capsule.color"
                :hollow="capsule.hollow"
                :round="capsule.round"
                :size="capsule.size"
                :type="capsule.type"
                v-if="isCapsuleIcon"
            ></uxt-icon>
            <text v-else>{{capsule}}</text>
        </view>
        <view
            :class="[
				{sm: size === 'sm'},
				bgColorClass.replace('-gradual', '').replace('-light', '').replace('bg-', 'text-')
			]"
            :style="[
				{
					color: bgColorStyle
				}
			]"
            class="tag right"
        >
            <slot></slot>
        </view>
    </view>
    <view
        :class="[
			classes,
			{
				radius: radius,
				round: round,
				sm: size === 'sm'
			},
			hollowClass,
			(hollow ? hollowClass.replace('solid-', 'text-') : colorClass),
			(hollow ? '' : bgColorClass),
			(hollowStyle ? 'solid' : '')
		]"
        :style="[
			styles,
			{
		        backgroundColor: (hollow ? '' : bgColorStyle),
				borderColor: hollowStyle,
				color: (hollow ? hollowStyle : colorStyle)
			}
		]"
        class="tag"
        v-else
    >
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import rrMixin from '@/uxt/mixins/rr.js'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

export default {
    mixins: [baseMixin, rrMixin],
    components: {
        uxtIcon
    },
    props: {
        // 大小 ''普通 'sm'小
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'sm'].includes(value)
            }
        },
        // 镂空
        hollow: {
            type: String
        },
        // 胶囊
        capsule: {
            type: [Object, String]
        }
    },
    computed: {
        isCapsule() {
            return this.capsule ? true : false
        },
        isCapsuleIcon() {
            return typeof this.capsule === 'object'
        },
        hollowClass() {
            return this.getColor(this.hollow, 'solid-').classes
        },
        hollowStyle() {
            return this.getColor(this.hollow).styles
        }
    }
}
</script>

<style lang="scss" scoped>
.tag {
    position: relative;
    font-size: 24rpx;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0rpx 16rpx;
    height: 48rpx;
    white-space: nowrap;
    &::before {
        border-color: inherit;
    }
    &.sm {
        font-size: 20rpx;
        padding: 0rpx 12rpx;
        height: 32rpx;
    }
    &[class*='solid'] {
        background-color: transparent !important;
    }
}

.capsule {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    &.solid::before {
        border-color: inherit;
    }
    .tag {
        margin: 0;
    }
}
</style>
