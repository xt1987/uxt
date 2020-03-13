<template>
    <view
        :class="[
			classes,
			{
				sm: size === 'sm',
				xs: size === 'xs',
				radius: radius,
				round: round,
				striped: striped,
				animation: animation
			}
		]"
        :style="[styles]"
        class="progress"
    >
        <view
            :class="[
				colorClass,
				bgColorClass
			]"
            :style="{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				width: `${loading}%`
			}"
            class="loading"
            v-if="!groupMode"
        >
            <text
                class="text"
                v-if="size !== 'sm' && size !== 'xs' && showLoading"
            >{{loading}}%</text>
        </view>
        <block v-else>
            <view
                :class="[
					getColor(p.color, 'text-').classes,
					getColor(p.bgColor, 'bg-').classes
				]"
                :key="index"
                :style="{
					color: getColor(p.color).styles,
					backgroundColor: getColor(p.bgColor).styles,
					width: `${p.loading}%`
				}"
                class="loading"
                v-for="(p, index) in progressGroup"
            >
                <text
                    class="text"
                    v-if="size !== 'sm' && size !== 'xs' && showLoading"
                >{{p.loading}}%</text>
            </view>
        </block>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import rrMixin from '@/uxt/mixins/rr.js'

export default {
    mixins: [baseMixin, rrMixin],
    props: {
        // 当前进度 0-100
        loading: {
            type: Number,
            default: 0
        },
        showLoading: {
            type: Boolean,
            default: true
        },
        // 大小 ''普通 'sm'较小 'xs'小
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'sm', 'xs'].includes(value)
            }
        },
        // 条纹
        striped: {
            type: Boolean,
            default: false
        },
        // 动画
        animation: {
            type: Boolean,
            default: false
        },
        // 进度组
        progressGroup: {
            type: Array
        }
    },
    computed: {
        groupMode() {
            return (
                this.progressGroup instanceof Array &&
                this.progressGroup.length > 0
            )
        }
    }
}
</script>

<style lang="scss">
.progress {
    overflow: hidden;
    height: 28rpx;
    background-color: #ebeef5;
    display: inline-flex;
    align-items: center;
    width: 100%;
    &.xs {
        height: 10rpx;
    }
    &.sm {
        height: 20rpx;
    }
    .loading {
        width: 0;
        height: 100%;
        align-items: center;
        display: flex;
        justify-items: flex-end;
        justify-content: space-around;
        font-size: 20rpx;
        transition: width 0.6s ease;
    }
    &.striped .loading {
        background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
        );
        background-size: 72rpx 72rpx;
    }
    &.animation .loading {
        animation: progress-stripes 2s linear infinite;
    }
}

@keyframes progress-stripes {
    from {
        background-position: 72rpx 0;
    }

    to {
        background-position: 0 0;
    }
}
</style>
