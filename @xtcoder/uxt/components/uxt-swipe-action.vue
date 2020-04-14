<template>
    <view
        :class="[classes]"
        :style="[styles]"
        class="swipe-action"
    >
        <view
            :style="{
				transform: `translate3d(${x}px, 0, 0)`,
				transitionDuration: `${duration}ms`
			}"
            @touchcancel="handleTouchEnd"
            @touchend="handleTouchEnd"
            @touchmove="handleTouchMove"
            @touchstart="handleTouchStart"
            class="content"
        >
            <view class="left">
                <slot name="left"></slot>
            </view>
            <slot></slot>
            <view class="right">
                <slot name="right"></slot>
            </view>
        </view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'

export default {
    mixins: [baseMixin],
    props: {
        // 关闭, v-model绑定
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            status: 0, // 0初始状态 1右滑 2左滑 3释放
            x: 0, // 移动值，通过translate移动
            startX: 0, // 开始滑动时的x坐标
            startWidth: 20, // 往左或往右滑动startWidth后开始真正触发滑动动作
            lastX: 0, // 滑动时记录上一次move的x坐标
            duration: 0, // 松开后动画时间
            leftWidth: 0, // 左侧内容宽度
            rightWidth: 0 // 右侧内容宽度
        }
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal) {
                this.close()
            }
        }
    },
    methods: {
        // 取坐标
        getPos(e) {
            if (!e) {
                return {
                    x: 0,
                    y: 0
                }
            }
            if (e.touches && e.touches[0]) {
                return {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                }
            } else if (e.changedTouches && e.changedTouches[0]) {
                return {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY
                }
            } else {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }
        },
        handleTouchStart(e) {
            if (this.status !== 0) {
                return
            }
            this.duration = 0
            this.startX = this.getPos(e).x
        },
        handleTouchMove(e) {
            let x = this.getPos(e).x
            let moveX = x - this.startX
            if (Math.abs(moveX) >= this.startWidth && this.status === 0) {
                // 超过startWidth，开始移动
                this.status = 1
                this.startX = x
                this.lastX = x
                return
            }
            if (this.status === 0) {
                return
            }
            this.status = moveX > 0 ? 1 : 2
            moveX = this.x + x - this.lastX
            this.lastX = x
            if (moveX > this.leftWidth || moveX < this.rightWidth * -1) {
                // 移动到位后不再移动
                return
            }
            this.x = moveX
        },
        handleTouchEnd(e) {
            if (this.status !== 1 && this.status !== 2) {
                return
            }
            this.duration = 300
            if (this.status === 1) {
                // 右滑
                if (this.x > 10) {
                    // 打开左侧
                    this.x = this.leftWidth
                    this.$emit('input', false)
                } else {
                    // 关闭
                    this.x = 0
                    this.$emit('input', true)
                }
            } else {
                // 左滑
                if (this.x < -10) {
                    // 打开右侧
                    this.x = this.rightWidth * -1
                    this.$emit('input', false)
                } else {
                    // 关闭
                    this.x = 0
                    this.$emit('input', true)
                }
            }
            setTimeout(() => {
                this.status = 0
            }, this.duration)
        },
        close() {
            // 用于外部关闭
            if (this.x === 0) {
                return
            }
            this.duration = 300
            this.x = 0
        }
    },
    async mounted() {
        let [left, right] = await Promise.all([
            this.getElSize('.left', this),
            this.getElSize('.right', this)
        ])
        this.leftWidth = left.width
        this.rightWidth = right.width
    }
}
</script>

<style lang="scss" scoped>
.swipe-action {
    position: relative;
    overflow: hidden;
    .content {
        position: relative;
    }
    .left,
    .right {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left {
        left: 0;
        transform: translate(-100%, 0);
    }
    .right {
        right: 0;
        transform: translate(100%, 0);
    }
}
</style>
