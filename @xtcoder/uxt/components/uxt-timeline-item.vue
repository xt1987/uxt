<template>
    <view
        :class="[position1]"
        class="timeline-item"
    >
        <view
            :class="[colorClass1, bgColorClass1]"
            :style="[{ color: colorStyle1, backgroundColor: bgColorStyle1 }]"
            class="dot padding-tb-xs"
        >
            <uxt-icon
                :color="icon2.color"
                :size="icon2.size"
                :type="icon2.type"
            ></uxt-icon>
        </view>
        <slot></slot>
        <view
            :class="[colorClass1.replace('text-', 'solid-left-')]"
            :style="{
				borderLeft: colorStyle1 !== '' ? `solid 1px ${colorStyle1}` : ''
			}"
            class="line"
        ></view>
    </view>
</template>

<script>
// import baseMixin from '../mixins/base.js'
import uxtIcon from './uxt-icon.vue'

export default {
    // mixins: [baseMixin],
    components: {
        uxtIcon
    },
    props: {
        icon: {
            type: [String, Object],
            default: 'dot-o-fill'
        }
    },
    inject: [
        'position',
        'colorClass',
        'colorStyle',
        'bgColorClass',
        'bgColorStyle'
    ],
    data() {
        return {
            position1: 'left',
            colorClass1: '',
            colorStyle1: '',
            bgColorClass1: '',
            bgColorStyle1: ''
        }
    },
    computed: {
        icon2() {
            if (typeof this.icon === 'string') {
                return {
                    type: this.icon
                }
            } else {
                return this.icon
            }
        }
    },
    mounted() {
        // 为什么要另外接收一次？我也不想啊，为了解决微信小程序inject传值延后
        this.position1 = this.position
        this.colorClass1 = this.colorClass
        this.colorStyle1 = this.colorStyle
        this.bgColorClass1 = this.bgColorClass
        this.bgColorStyle1 = this.bgColorStyle
    }
}
</script>

<style lang="scss" scoped>
.timeline-item {
    position: relative;
    &.left {
        padding: 20rpx 20rpx 20rpx 80rpx;
        .dot {
            left: 40rpx;
            transform: translate(calc(-50% + 1rpx), 0);
        }
        .line {
            left: 40rpx;
        }
    }
    &.right {
        padding: 20rpx 80rpx 20rpx 20rpx;
        .dot {
            right: 40rpx;
            transform: translate(calc(50% - 1rpx), 0);
        }
        .line {
            right: 40rpx;
        }
    }
    .dot {
        position: absolute;
        top: 30rpx;
        z-index: 1;
    }
    .line {
        position: absolute;
        height: 100%;
        top: 0;
        width: 1rpx;
    }
}
</style>
