<template>
    <view
        class="modal"
        v-show="show"
    >
        <view
            :class="[modalAnimation]"
            :style="{
				top: `${top}px`,
				background: `rgba(0, 0, 0, ${opacity})`,
				animationDuration: `${duration2 / 1000.0}s`
			}"
            @click="handleClose(0)"
            class="overlay full"
            v-if="modal"
        ></view>
        <view
            :class="[classes, colorClass, bgColorClass, position, animation]"
            :style="[
				styles,
				{
					top: position === 'center' || position === 'bottom' ? '' : `${top}px`,
					color: colorStyle,
					backgroundColor: bgColorStyle,
					width: position === 'center' || position === 'left' || position === 'right' ? getSize(width).styles : '',
					height: position === 'center' || position === 'top' || position === 'bottom' ? getSize(height).styles : '',
					minWidth: position === 'center' || position === 'left' || position === 'right' ? getSize(minWidth).styles : '',
					minHeight: position === 'center' || position === 'top' || position === 'bottom' ? getSize(minHeight).styles : '',
					maxWidth: position === 'center' || position === 'left' || position === 'right' ? getSize(maxWidth).styles : '',
					maxHeight: position === 'center' || position === 'top' || position === 'bottom' ? getSize(maxHeight).styles : '',
					animationDuration: `${duration2 / 1000.0}s`
				}
			]"
            class="content shadow-wrap-black"
        >
            <view
                :class="[{ 'solid-bottom': title }]"
                class="padding-sm cf text-center"
                v-if="close || title"
            >
                {{ title }}
                <uxt-icon
                    @click="handleClose(1)"
                    classes="fr text-bold text-lg"
                    type="close"
                    v-if="close"
                ></uxt-icon>
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
        // 打开/关闭
        value: {
            type: Boolean,
            default: false
        },
        // 内容位置 top/right/bottom/left/center/full
        // center时需要指定宽高，否则文字会变模糊
        position: {
            type: String,
            default: 'center',
            validator(value) {
                return [
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'center',
                    'full'
                ].includes(value)
            }
        },
        // 宽度，只对center,left,right起作用
        width: {
            type: [Number, String]
        },
        // 高度，只对center,top,bottom起作用
        height: {
            type: [Number, String]
        },
        // 最小宽度，只对center,left,right起作用
        minWidth: {
            type: [Number, String]
        },
        // 最小高度，只对center,top,bottom起作用
        minHeight: {
            type: [Number, String]
        },
        // 最大宽度，只对center,left,right起作用
        maxWidth: {
            type: [Number, String]
        },
        // 最大高度，只对center,top,bottom起作用
        maxHeight: {
            type: [Number, String]
        },
        // 是否显示遮罩层
        modal: {
            type: Boolean,
            default: true
        },
        // 是否点击遮罩层关闭
        modalClose: {
            type: Boolean,
            default: true
        },
        // 遮罩层透明度
        opacity: {
            type: [Number, String],
            default: 0.6
        },
        // 标题
        title: {
            type: String
        },
        // 关闭按钮
        close: {
            type: Boolean,
            default: false
        },
        // 动画持续时间(毫秒)
        duration: {
            type: [Number, String],
            default: 300
        },
        bgColor: {
            default: 'white'
        }
    },
    data() {
        return {
            top: this.gStatusBarHeight + this.gNavBarHeight,
            show: this.value,
            animation: '',
            modalAnimation: '',
            animationing: false
        }
    },
    computed: {
        duration2() {
            return typeof this.duration === 'string'
                ? parseInt(this.duration)
                : this.duration
        }
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal) {
                this.openModal()
            } else {
                this.closeModal()
            }
        }
    },
    methods: {
        openModal() {
            if (this.animationing) {
                return
            }
            this.show = true
            this.modalAnimation = 'ani-fade'
            if (this.position === 'center') {
                this.animation = 'ani-center'
            } else if (this.position === 'full') {
                this.animation = 'ani-scale-up'
            } else {
                this.animation = `ani-slide-${this.position}`
            }
            this.animationing = true
            this.$emit('open')
            setTimeout(() => {
                this.modalAnimation = ''
                this.animation = ''
                this.animationing = false
                this.$emit('opened')
            }, this.duration2)
        },
        closeModal() {
            if (this.animationing) {
                return
            }
            this.modalAnimation = 'ani-reverse ani-fade'
            this.animation = 'ani-reverse '
            if (this.position === 'center') {
                this.animation += 'ani-center'
            } else if (this.position === 'full') {
                this.animation += 'ani-scale-up'
            } else {
                this.animation += `ani-slide-${this.position}`
            }
            this.animationing = true
            this.$emit('close')
            setTimeout(() => {
                this.$emit('closed')
                this.$emit('input', false)
                this.animationing = false
                this.show = false
            }, this.duration2)
        },
        // 关闭事件，type 0模态框关闭 1关闭按钮
        async handleClose(type) {
            if ((type === 0 && this.modalClose) || type === 1) {
                this.closeModal()
            }
        }
    }
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    left: 0;
    z-index: 999;
    .overlay {
        position: fixed;
        z-index: 999;
    }
    .content {
        z-index: 999;
        position: fixed;
        overflow: auto;
    }
    .center {
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
    .top {
        width: 100%;
    }
    .right {
        right: 0;
        height: 100%;
    }
    .bottom {
        bottom: 0;
        width: 100%;
    }
    .left {
        height: 100%;
    }
    .ani-center {
        animation-name: center;
    }
    @keyframes center {
        0% {
            opacity: 0;
            transform: translate3d(-50%, -50%, 0) scale(0.2);
        }
        100% {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0) scale(1);
        }
    }
}
</style>
