<template>
    <view
        :class="[classes, colorClass, bgColorClass, border1 ? (spacing ? 'solid' : 'solid-right solid-bottom') : '']"
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
        <view class="width-p100 height-p100 flex flex-col justify-center align-center padding-tb padding-lr-sm">
            <slot>
                <uxt-icon
                    :type="icon"
                    size="60rpx"
                ></uxt-icon>
                {{ text }}
            </slot>
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
        icon: {
            type: [String, Object]
        },
        text: {
            type: String
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
