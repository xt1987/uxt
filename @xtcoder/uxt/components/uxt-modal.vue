<template>
    <view
        class="modal"
        v-if="show"
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
					top: position === 'center' ? `${cTop}px` : position === 'bottom' ? '' : `${top}px`,
					left: position === 'center' ? `${cLeft}px` : '',
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
			<block v-if="close || title || $slots.title">
				<view
					:class="[titleColorClass, titleBgColorClass]"
					:style="{
						color: titleColorStyle,
						backgroundColor: titleBgColorStyle,
						width: cWidth
					}"
					class="title padding-lr-sm"
				>
					<slot name="title">
						<view v-if="title" class="text-bold margin-lr text-cut text-center">
							{{ title }}
						</view>
					</slot>
					<uxt-icon
						@click="handleClose(1)"
						:styles="{ position: 'absolute', right: '20rpx', top: '20rpx' }"
						type="close"
						v-if="close"
					></uxt-icon>
				</view>
				<view style="height: 80rpx;">
				</view>
			</block>
			<slot></slot>
		</view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import uxtIcon from './uxt-icon.vue'

export default {
	name: 'uxt-modal',
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
		titleColor: {
			type: String
		},
		titleBgColor: {
			type: String,
			default: 'theme'
		},
        // 是否显示关闭按钮
        close: {
            type: Boolean,
            default: false
        },
        // 动画持续时间(毫秒)
        duration: {
            type: [Number, String],
            default: 300
        },
		// 是否挡住所有内容，为false时不会挡住导航栏
		above: {
			type: Boolean,
			default: true
		},
        bgColor: {
            default: 'white'
        }
    },
    data() {
        return {
            show: this.value,
            animation: '',
            modalAnimation: '',
            animationing: false,
			cTop: 0,
			cLeft: 0,
			cWidth: '100%'
        }
    },
    computed: {
        duration2() {
            return typeof this.duration === 'string'
                ? parseInt(this.duration)
                : this.duration
        },
		top() {
			return this.above ? this.systemInfo.statusBarHeight : this.systemInfo.statusBarHeight + this.systemInfo.navBarHeight
		},
        titleColorClass() {
            return this.getColor(this.titleColor, 'text-').classes
        },
        titleColorStyle() {
            return this.getColor(this.titleColor).styles
        },
        titleBgColorClass() {
            return this.getColor(this.titleBgColor, 'bg-').classes
        },
        titleBgColorStyle() {
            return this.getColor(this.titleBgColor).styles
        }
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal) {
                !this.show && this.openModal()
            } else {
                this.show && this.closeModal()
            }
        }
    },
    methods: {
        openModal() {
            if (this.animationing) {
                return
            }
            this.show = true
			this.cWidth = '100%'
			this.$nextTick(() => {
				this.setC()
			})
				
			this.modalAnimation = 'ani-fade'
			if (this.position === 'center' || this.position === 'full') {
				this.animation = 'ani-fade'
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
            if (this.position === 'center' || this.position === 'full') {
                this.animation += 'ani-fade'
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
        handleClose(type) {
            if ((type === 0 && this.modalClose) || type === 1) {
                this.closeModal()
            }
        },
		async setC() {
			if (this.position === 'center' && this.show) {
				let res = await this.getElSize('.content', this)
				this.cTop = (this.systemInfo.windowHeight - res.height) / 2
				this.cLeft = (this.systemInfo.windowWidth - res.width) / 2
				this.cWidth = `${res.width}px`
			}
			if (this.show && (this.close || this.title) && (this.position === 'left' || this.position === 'right')) {
				let res = await this.getElSize('.content', this)
				this.cWidth = `${res.width}px`
			}
		}
    },
	mounted() {
		this.setC()
	}
}
</script>

<style lang="scss" scoped>
.modal {
    &, .overlay {
        position: fixed;
        z-index: 999;
    }
    .content {
		position: fixed;
        z-index: 999;
        overflow: auto;
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
		left: 0;
        height: 100%;
    }
	.title {
		position: fixed;
		height: 80rpx;
		line-height: 80rpx;
		z-index: 1;
	}
}
</style>
