<template>
    <view
        :class="[classes]"
        :style="[styles]"
        class="pull-refresh"
    >
        <view
            :style="{
				transform: `translate3d(0, ${top}px, 0)`,
				transitionDuration: `${duration}ms`
			}"
            @touchcancel="handleTouchEnd"
            @touchend="handleTouchEnd"
            @touchmove="handleTouchMove"
            @touchstart="handleTouchStart"
            class="content"
        >
            <view class="head text-center text-grey">
                <uxt-icon
                    :animation="animation"
                    :styles="{
						transform: `rotate(${rotate}deg)`
					}"
                    classes="margin-right-xs"
                    type="icloading"
                    v-show="status !== 0 && status !== 4"
                ></uxt-icon>
                {{ message }}
            </view>
            <slot></slot>
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
        // 是否开始刷新, v-model绑定
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            status: 0, // 0初始状态 1下拉刷新 2释放刷新 3正在刷新 4刷新完成
            message: '', // 提示消息
            top: 0, // 下拉高度
            rotate: 0, // 图标旋转角度
            animation: '', // 图标动画，正在刷新时使用
            startY: 0, // 开始下拉时的top值,
			startHeight: 50, // 下拉startHeight后开始真正触发下拉动作
            limitHeight: 50, // 限速高度，下拉大于此高度后开始限速
            duration: 0 // 松开后动画时间
        }
    },
    watch: {
        status(newVal) {
            switch (newVal) {
                case 0:
                    this.message = ''
                    break
                case 1:
                    this.message = '下拉刷新'
                    break
                case 2:
                    this.message = '释放刷新'
                    break
                case 3:
                    this.message = '正在刷新'
                    break
                case 4:
                    this.message = '刷新成功'
                    break
            }
        },
        value(newVal) {
            if (newVal) {
                // 开始刷新
                this.startRefresh()
            } else {
                // 停止刷新
                this.stopRefresh()
            }
        }
    },
    methods: {
        handleTouchStart(e) {
            if (this.status !== 0) {
                return
            }
            this.duration = 0
            this.animation = ''
            this.startY = this.getPos(e).y
        },
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
        handleTouchMove(e) {
            if (this.status === 3 || this.status === 4) {
                return
            }
            let moveY = this.getPos(e).y - this.startY
            if (moveY <= 0) {
                return
            }
			if (moveY >= this.startHeight && this.status === 0) {
				// 超过startHeight，开始下拉
				this.status = 1
				this.startY = this.getPos(e).y
				return
			}
			if (this.status === 0) {
				return
			}
			
            this.rotate = moveY * 4
            if (moveY <= this.limitHeight) {
                this.status = 1
                this.top = moveY
            } else {
                // 下拉超过limitHeight时，限制下拉速度
                this.status = 2
                let time = Math.ceil(moveY / this.limitHeight)
                let top = this.limitHeight
                for (let i = 2; i <= time; i++) {
                    if (i !== time) {
                        top += this.limitHeight / i
                    } else {
                        top += (moveY - this.limitHeight * (i - 1)) / i
                    }
                }
                this.top = top
            }
        },
        // 开始刷新
        startRefresh() {
            this.status = 3
            this.duration = 300
            this.top = 50
            this.animation = 'spin'
        },
        // 停止刷新
        stopRefresh() {
            this.duration = 300
            this.status = 4
            this.animation = ''
            setTimeout(() => {
                this.status = 0
                this.top = 0
            }, 1000)
        },
        handleTouchEnd(e) {
            if (this.status === 1) {
                this.status = 0
                this.duration = 300
                this.top = 0
                return
            } else if (this.status !== 2) {
                return
            }
            this.startRefresh()
            this.$emit('refresh')
            this.$emit('input', true)
        }
    },
    mounted() {
        if (this.value) {
            this.startRefresh()
        }
    }
}
</script>

<style lang="scss" scoped>
.pull-refresh {
    position: relative;
    overflow: hidden;
    user-select: none;
	min-height: 50px;
    .content {
        position: relative;
        .head {
            position: absolute;
            left: 0;
            width: 100%;
            height: 50px;
            line-height: 50px;
            transform: translate3d(0, -100%, 0);
        }
    }
}
</style>
