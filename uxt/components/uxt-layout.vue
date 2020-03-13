<template>
    <view>
        <view
            :style="{ height: headerHeightStyle }"
            class="header"
            v-if="headerHeight !== 0"
        >
            <view
                :class="headerBgColorClass"
                :style="{ height: headerHeightStyle, backgroundColor: headerBgColorStyle }"
                class="fixed-top"
            >
                <view
                    :style="{ top: `${statusBarHeight}px` }"
                    style="position: relative;"
                >
                    <slot name="header">
                        <uxt-nav-bar
                            :back="back"
                            bg-color=" "
                        >
                            {{ title }}
                            <template slot="right">
                                <uxt-icon
                                    @click="showSideModal = true"
                                    type="moreandroid"
                                    v-if="hasSide"
                                ></uxt-icon>
                            </template>
                        </uxt-nav-bar>
                    </slot>
                </view>
            </view>
        </view>
        <slot></slot>
        <view
            :style="{ height: footerHeightStyle }"
            class="footer"
            v-if="footerHeight"
        >
            <view
                :style="{ height: footerHeightStyle }"
                class="fixed-bottom"
            >
                <slot name="footer"></slot>
            </view>
        </view>
        <uxt-modal
            :position="sidePosition"
            @closed="handleSideClosed"
            v-if="hasSide"
            v-model="showSideModal"
        >
            <slot name="side"></slot>
        </uxt-modal>
        <uxt-notify
            :bg-color="notify.bgColor"
            :color="notify.color"
            :duration="notify.duration"
            :icon="notify.icon"
            :message="notify.message"
            :type="notify.type"
            @click="handleNotifyClick"
            v-model="notify.show"
        ></uxt-notify>
        <uxt-toast
            :duration="toast.duration"
            :icon="toast.icon"
            :message="toast.message"
            :no-click="toast.noClick"
            :type="toast.type"
            v-model="toast.show"
        ></uxt-toast>
    </view>
</template>

<script>
import uxtNavBar from '@/uxt/components/uxt-nav-bar.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'
import uxtModal from '@/uxt/components/uxt-modal.vue'
import uxtNotify from '@/uxt/components/uxt-notify.vue'
import uxtToast from '@/uxt/components/uxt-toast.vue'

export default {
    components: {
        uxtNavBar,
        uxtIcon,
        uxtModal,
        uxtNotify,
        uxtToast
    },
    props: {
        // 头部高度, 默认为导航栏高度，不写slot默认显示导航栏，传0不显示header
        headerHeight: {
            type: [Number, String]
        },
        // 头部背景
        headerBgColor: {
            type: String,
            default: 'df'
        },
        // 标题
        title: {
            type: String
        },
        back: {
            type: Boolean,
            default: true
        },
        // 底部高度
        footerHeight: {
            type: [Number, String]
        },
        // 显示侧边栏
        showSide: {
            type: Boolean,
            default: false
        },
        // 侧边栏位置
        sidePosition: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value)
            }
        }
    },
    data() {
        let dfNotify = {
            id: 0,
            show: false,
            message: '消息',
            type: '',
            duration: 3000,
            icon: '',
            color: '',
            bgColor: 'df',
            click() {}
        }
        let dfToast = {
            id: 0,
            show: false,
            message: '消息',
            type: '',
            duration: 3000,
            icon: '',
            noClick: false
        }
        return {
            statusBarHeight: this.gStatusBarHeight,
            showSideModal: this.showSide,
            dfNotify,
            notify: Object.assign(dfNotify),
            dfToast,
            toast: Object.assign(dfToast)
        }
    },
    computed: {
        headerBgColorClass() {
            return this.getColor(this.headerBgColor, 'bg-').classes
        },
        headerBgColorStyle() {
            return this.getColor(this.headerBgColor, 'bg-').styles
        },
        headerHeightStyle() {
            if (this.headerHeight === 0) {
                return ''
            } else if (this.headerHeight) {
                return `calc(${this.getSize(this.headerHeight).styles} + ${
                    this.gStatusBarHeight
                }px)`
            } else {
                return `${this.gNavBarHeight + this.gStatusBarHeight}px`
            }
        },
        footerHeightStyle() {
            return this.getSize(this.footerHeight).styles
        },
        hasSide() {
            if (this.$slots.side) {
                return true
            }
            return false
        }
    },
    watch: {
        showSide(newVal) {
            this.showSideModal = newVal
        }
    },
    methods: {
        handleSideClosed() {
            this.$emit('sideclosed')
        },
        handleNotifyClick() {
            if (typeof this.notify.click === 'function') {
                this.notify.click()
            }
        },
        showNotify(p) {
            this.notify.id && clearTimeout(this.notify.id)
            this.notify = Object.assign({}, this.dfNotify, p, { show: true })
            if (this.notify.duration > 0) {
                this.notify.id = setTimeout(() => {
                    this.notify.show = false
                }, this.notify.duration)
            }
        },
        closeNotify() {
            this.notify.show = false
        },
        showToast(p) {
            this.toast.id && clearTimeout(this.toast.id)
            this.toast = Object.assign({}, this.dfToast, p, { show: true })
            if (this.toast.type === 'loading') {
                // 加载提示必须手动关闭
                this.toast.duration = 0
            }
            if (this.toast.duration > 0) {
                this.toast.id = setTimeout(() => {
                    this.toast.show = false
                }, this.toast.duration)
            }
        },
        closeToast() {
            this.toast.show = false
        }
    }
}
</script>

<style lang="scss">
.header {
    .fixed-top,
    .fixed-bottom {
        z-index: 888;
    }
}
</style>
