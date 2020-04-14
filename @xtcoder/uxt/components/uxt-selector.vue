<template>
	<view class="selector" :class="[classes]" :style="[styles]">
		<uxt-bar :color="color" :bg-color="bgColor" :title="title" :content="content1" :desc="desc" :arrow="arrow" @click="show = true">
			<template slot="left">
				<slot name="left"></slot>
			</template>
			<template slot="right">
				<slot name="right"></slot>
			</template>
		</uxt-bar>
		<uxt-modal max-height="70%" width="70%" :title="title" v-model="show">
			<template slot="title">
				<view class="flex justify-between">
					<view @click="handleCancel">取消</view>
					<view @click="handleSure">确定</view>
				</view>
			</template>
			<uxt-radio-group v-model="value1" item-width="100%" type="onlyicon" label-position="left">
				<uxt-radio
					:classes="`padding-sm${index === items.length - 1 ? '' : ' solid-bottom'}`"
					v-for="(item, index) in items"
					:key="index"
					color="theme"
					:label="isArrObj ? item[labelField] : item"
					:value="index"
				></uxt-radio>
			</uxt-radio-group>
		</uxt-modal>
	</view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import barMixin from '../mixins/bar.js'
import formMixin from '../mixins/form.js'
import uxtBar from './uxt-bar.vue'
import uxtModal from './uxt-modal.vue'
import uxtRadioGroup from './uxt-radio-group.vue'
import uxtRadio from './uxt-radio.vue'

export default {
	mixins: [baseMixin, barMixin, formMixin],
	components: {
		uxtBar,
		uxtModal,
		uxtRadioGroup,
		uxtRadio
	},
	props: {
		// Array<String> | Array<Object>
		items: {
			type: Array,
			default() {
				return []
			}
		},
		// items为Array<Object>，指定label字段
		labelField: {
			type: String,
			default: 'label'
		},
	    arrow: {
	        default: true
	    },
		bgColor: {
			default: 'white'
		},
		content: {
			default: '请选择'
		},
		value: {
			type: Number,
			default: -1
		}
	},
	data() {
		return {
			show: false,
			content1: this.content
		}
	},
	computed: {
		isArrObj() {
			return typeof this.items[0] === 'object'
		}
	},
	watch: {
		show(newVal, oldVal) {
			if (newVal) {
				this.value1 = this.getValue()
				this.setContent()
			}
		}
	},
	methods: {
		setContent() {
			if (this.value1 === -1) {
				return
			}
			if (this.isArrObj) {
				this.content1 = this.items[this.value1][this.labelField]
			} else {
				this.content1 =  this.items[this.value1]
			}
		},
		handleSure() {
			this.show = false
			if (this.value1 === -1) {
				return
			}
			this.setContent()
			this.$emit('select', this.value1)
			this.$emit('input', this.value1)
		},
		handleCancel() {
			this.show = false
		}
	},
	created() {
		this.setContent()
	}
}
</script>

<style lang="scss" scoped>
.selector {
	position: relative;
}
</style>
