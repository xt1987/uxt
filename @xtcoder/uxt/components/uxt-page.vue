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
                                    type="ellipsis-y"
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
			@opened="handleSideOpened"
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
        <uxt-dialog
            :icon="dialog.icon"
            :message="dialog.message"
            :title="dialog.title"
            :type="dialog.type"
            @cancel="handleDialogCancel"
            @sure="handleDialogSure"
            v-model="dialog.show"
        ></uxt-dialog>
    </view>
</template>

<script>
import uxtNavBar from './uxt-nav-bar.vue'
import uxtIcon from './uxt-icon.vue'
import uxtModal from './uxt-modal.vue'
import uxtNotify from './uxt-notify.vue'
import uxtToast from './uxt-toast.vue'
import uxtDialog from './uxt-dialog.vue'

export default {
	name: 'uxt-page',
    components: {
        uxtNavBar,
        uxtIcon,
        uxtModal,
        uxtNotify,
        uxtToast,
        uxtDialog
    },
    props: {
        // 顶部高度, 默认为导航栏高度，不写slot默认显示导航栏，传0不显示顶部
        headerHeight: {
            type: [Number, String]
        },
        // 头部背景
        headerBgColor: {
            type: String,
            default: 'theme'
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
            bgColor: 'theme',
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
        let dfDialog = {
            id: 0,
            show: false,
            title: '提示',
            message: '提示内容',
            type: 'alert',
            icon: ''
        }
        return {
            statusBarHeight: this.systemInfo.statusBarHeight,
            showSideModal: this.showSide,
            dfNotify,
            notify: Object.assign(dfNotify),
            dfToast,
            toast: Object.assign(dfToast),
            dfDialog,
            dialog: Object.assign(dfDialog)
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
                    this.systemInfo.statusBarHeight
                }px)`
            } else {
                return `${this.systemInfo.navBarHeight + this.systemInfo.statusBarHeight}px`
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
        showSide(newVal, oldVal) {
            this.showSideModal = newVal
        }
    },
    methods: {
        handleSideOpened() {
            this.$emit('sideopened')
        },
        handleSideClosed() {
            this.$emit('sideclosed')
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
        handleNotifyClick() {
            if (typeof this.notify.click === 'function') {
                this.notify.click()
            }
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
        },
        showDialog(p) {
            this.dialog = Object.assign({}, this.dfDialog, p, { show: true })
        },
        closeDialog() {
            this.dialog.show = false
        },
        handleDialogSure() {
            this.dialog.resolve({
                ok: true,
                cancel: false
            })
        },
        handleDialogCancel() {
            this.dialog.resolve({
                ok: false,
                cancel: true
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    .fixed-top,
    .fixed-bottom {
        z-index: 888;
    }
}
</style>
