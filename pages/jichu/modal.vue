<template>
    <uxt-page :title="title">
		<uxt-bar-group title="设置">
			<uxt-selector
				title="弹出位置"
				desc="position"
				:items="positions"
				v-model="position"
				@select="modal.position=positions[$event].value"
			></uxt-selector>
			<uxt-bar title="指定宽高" desc="width | height">
				<template slot="right">
					<uxt-checkbox label="宽50%" size="sm" @change="handleChange($event, 'width', '50%')"></uxt-checkbox>
					<uxt-checkbox classes="margin-left-sm" label="高30%" size="sm" @change="handleChange($event, 'height', '30%')"></uxt-checkbox>
				</template>
			</uxt-bar>
			<uxt-bar title="内容宽高" desc="内容宽高只是作为演示用的">
				<template slot="right">
					<uxt-checkbox label="宽500rpx" size="sm" @change="handleChange($event, 'width2', '500rpx')"></uxt-checkbox>
					<uxt-checkbox classes="margin-left-sm" label="高800rpx" size="sm" @change="handleChange($event, 'height2', '800rpx')"></uxt-checkbox>
				</template>
			</uxt-bar>
			<uxt-bar title="最小宽高" desc="min-width | min-height(配合内容宽高及弹出位置)">
				<template slot="right">
					<uxt-checkbox label="宽50%" size="sm" @change="handleChange($event, 'minWidth', '50%')"></uxt-checkbox>
					<uxt-checkbox classes="margin-left-sm" label="高30%" size="sm" @change="handleChange($event, 'minHeight', '30%')"></uxt-checkbox>
				</template>
			</uxt-bar>
			<uxt-bar title="最大宽高" desc="min-width | min-height(配合内容宽高及弹出位置)">
				<template slot="right">
					<uxt-checkbox label="宽50%" size="sm" @change="handleChange($event, 'maxWidth', '50%')"></uxt-checkbox>
					<uxt-checkbox classes="margin-left-sm" label="高30%" size="sm" @change="handleChange($event, 'maxHeight', '30%')"></uxt-checkbox>
				</template>
			</uxt-bar>
			<uxt-bar
				title="遮罩层"
				desc="modal"
			>
				<template slot="right">
					<uxt-switch v-model="modal.modal" radius size="sm"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="点遮罩层关闭"
				desc="modal-close"
			>
				<template slot="right">
					<uxt-switch v-model="modal.modalClose" radius size="sm"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="关闭按钮"
				desc="close"
			>
				<template slot="right">
					<uxt-switch v-model="modal.close" radius size="sm"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="展示标题"
				desc="title"
			>
				<template slot="right">
					<uxt-switch radius size="sm" @change="handleChange($event, 'title', '标题')"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="背景"
				desc="bg-color=xx/颜色值"
			>
				<template slot="right">
					<color-selector v-model="modal.bgColor" :clear="false"></color-selector>
				</template>
			</uxt-bar>
			<uxt-bar
				title="外部关闭"
				desc="修改v-model绑定的布尔值进行打开和关闭"
			>
				<template slot="right">
					3秒后关闭：<uxt-switch radius size="sm" v-model="outerClose"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar title="事件">
				<template slot="right">
					<text @click="events = ''">清空</text>
				</template>
			</uxt-bar>
			<view class="padding bg-white" v-html="events" style="height: 200rpx; overflow-y: auto;">
			</view>
		</uxt-bar-group>
		<uxt-bar-group title="展示">
			<view class="padding bg-white text-center">
				<uxt-button
					size="block"
					round
					@click="handleShowModal"
				>
					弹出模态框
				</uxt-button>
			</view>
		</uxt-bar-group>
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
			:title="modal.title"
            v-model="show"
			@open="handleOpen"
			@opened="handleOpened"
			@close="handleClose"
			@closed="handleClosed"
        >
            <view
                :style="{ width: modal.width2, height: modal.height2 }"
                class="padding-xl bg-theme inline-block margin-xl"
            >{{ modal.message }}</view>
        </uxt-modal>
    </uxt-page>
</template>

<script>
import uxtBarGroup from '@xtcoder/uxt/components/uxt-bar-group.vue'
import uxtButton from '@xtcoder/uxt/components/uxt-button.vue'
import uxtModal from '@xtcoder/uxt/components/uxt-modal.vue'
import uxtSwitch from '@xtcoder/uxt/components/uxt-switch.vue'
import uxtCheckbox from '@xtcoder/uxt/components/uxt-checkbox.vue'
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtSelector from '@xtcoder/uxt/components/uxt-selector.vue'
import colorSelector from '@/components/color-selector.vue'

export default {
    components: {
		uxtBarGroup,
        uxtButton,
        uxtModal,
        uxtSwitch,
        uxtCheckbox,
        uxtBar,
		uxtSelector,
		colorSelector
    },
    data() {
        return {
            title: '模态框',
			tid: 0,
			outerClose: false,
            show: false,
			positions: [{
				label: '居中',
				value: 'center'
			}, {
				label: '全屏',
				value: 'full'
			}, {
				label: '上',
				value: 'top'
			}, {
				label: '右',
				value: 'right'
			}, {
				label: '下',
				value: 'bottom'
			}, {
				label: '左',
				value: 'left'
			}],
			position: 0,
            modal: {
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
				title: '',
				bgColor: 'white',
				width2: '',
				height2: '',
				message: '内容'
			},
			events: ''
        }
    },
    methods: {
		handleChange(check, field, value) {
			if (check) {
				this.modal[field] = value
			} else {
				this.modal[field] = ''
			}
		},
		handleShowModal() {
			this.show = true
			this.tid && clearTimeout(this.tid)
			if (this.outerClose) {
				this.tid = setTimeout(() => {
					this.show = false
				}, 3000)
			}
		},
		handleOpen() {
			console.log('已触发open事件')
			this.events += 'open<br />'
		},
		handleOpened() {
			console.log('已触发opened事件')
			this.events += 'opened<br />'
		},
		handleClose() {
			console.log('已触发close事件')
			this.events += 'close<br />'
		},
		handleClosed() {
			console.log('已触发closed事件')
			this.events += 'closed<br />'
		}
    }
}
</script>

<style lang="scss" scoped>
</style>
