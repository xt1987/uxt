<template>
    <uxt-layout :title="title">
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="基本用法"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({})"
            right-arrow
            title="居中弹出"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="满屏"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ position: 'full', close: true })"
            desc="position=full"
            right-arrow
            title="满屏"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="弹出位置"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ position: 'top' })"
            desc="position=top"
            right-arrow
            title="上边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'right' })"
            desc="position=right"
            right-arrow
            title="右边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'bottom' })"
            desc="position=bottom"
            right-arrow
            title="下边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'left' })"
            desc="position=left"
            right-arrow
            title="左边弹出"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="指定宽/高"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ position: 'top', height: '30%' })"
            desc="height=30%"
            right-arrow
            title="上边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'left', width: '50%' })"
            desc="width=50%"
            right-arrow
            title="左边弹出"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="最小宽/高"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ position: 'top', minHeight: '30%' })"
            desc="min-height=30%"
            right-arrow
            title="上边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'top', minHeight: '30%', height2: '400px' })"
            desc="min-height=30%"
            right-arrow
            title="上边弹出(超高)"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'left', minWidth: '50%' })"
            desc="min-width=50%"
            right-arrow
            title="左边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'left', minWidth: '50%', width2: '250px' })"
            desc="min-width=50%"
            right-arrow
            title="左边弹出(超宽)"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="最大宽/高"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ position: 'top', maxHeight: '30%' })"
            desc="max-height=30%"
            right-arrow
            title="上边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'top', maxHeight: '30%', height2: '400px' })"
            desc="max-height=30%"
            right-arrow
            title="上边弹出(超高)"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'left', maxWidth: '50%' })"
            desc="max-width=50%"
            right-arrow
            title="左边弹出"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'left', maxWidth: '50%', width2: '250px' })"
            desc="max-width=50%"
            right-arrow
            title="左边弹出(超宽)"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="无遮罩层"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ modal: false, close: true })"
            desc="modal=false"
            right-arrow
            title="无遮罩框"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="点遮罩层不关闭"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ modalClose: false, close: true })"
            desc="modal-close=false"
            right-arrow
            title="点遮罩层不关闭"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="关闭按钮"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ close: true })"
            desc="close=true"
            right-arrow
            title="显示关闭按钮"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="更换背景色"
        ></uxt-title-bar>
        <uxt-cell
            @click="showModal({ position: 'top', bgColor: 'green' })"
            desc="bg-color=green"
            right-arrow
            title="绿色"
        ></uxt-cell>
        <uxt-cell
            @click="showModal({ position: 'top', bgColor: 'yellow' })"
            desc="bg-color=yellow"
            right-arrow
            title="黄色"
        ></uxt-cell>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm solid-bottom"
            title="外部关闭"
        ></uxt-title-bar>
        <uxt-cell
            @click="outerClose"
            right-arrow
            title="打开3秒后关闭"
        ></uxt-cell>
        <uxt-modal
            :bg-color="modal.bgColor"
            :close="modal.close"
            :height="modal.height"
            :max-height="modal.maxHeight"
            :max-width="modal.maxWidth"
            :min-height="modal.minHeight"
            :min-width="modal.minWidth"
            :modal="modal.modal"
            :modal-close="modal.modalClose"
            :position="modal.position"
            :width="modal.width"
            v-model="show"
        >
            <view
                :style="{ width: modal.width2, height: modal.height2 }"
                class="padding solid-red inline-block"
            >内容</view>
        </uxt-modal>
    </uxt-layout>
</template>

<script>
import uxtButton from '@/uxt/components/uxt-button.vue'
import uxtModal from '@/uxt/components/uxt-modal.vue'
import uxtSwitch from '@/uxt/components/uxt-switch.vue'
import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue'
import uxtCell from '@/uxt/components/uxt-cell.vue'

export default {
    components: {
        uxtButton,
        uxtModal,
        uxtSwitch,
        uxtTitleBar,
        uxtCell
    },
    data() {
        let dfModal = {
            position: 'center',
            width: '',
            height: '',
            minWidth: '',
            minHeight: '',
            maxWidth: '',
            maxHeight: '',
            modal: true,
            modalClose: true,
            close: false,
            bgColor: 'white',
            width2: '',
            height2: ''
        }
        return {
            title: '模态框',
            show: false,
            dfModal,
            modal: dfModal
        }
    },
    methods: {
        showModal(modal) {
            this.modal = Object.assign({}, this.dfModal, modal)
            this.show = true
        },
        outerClose() {
            this.showModal({ modalClose: false })
            setTimeout(() => {
                this.show = false
            }, 3000)
        }
    }
}
</script>

<style></style>
