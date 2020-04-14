<template>
	<view class="checkbox-group"
		:class="[
			classes,
			colorClass,
			bgColorClass
		]"
		:style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorClass
			}
		]">
		<slot></slot>
	</view>
</template>

<script>
import { deepCopy } from '../utils/util.js'
import baseMixin from '../mixins/base.js'
import formMixin from '../mixins/form.js'

export default {
    name: 'uxt-checkbox-group',
	mixins: [baseMixin, formMixin],
	props: {
		// 选项样式
		type: {
			type: String,
			default: 'df',
			validator(value) {
				return ['df', 'hollow', 'onlyicon', 'btn'].includes(value)
			}
		},
		// 选项宽度
		itemWidth: {
			type: [Number, String]
		},
		// 标签位置 left/right
		labelPosition: {
			type: String,
			default: 'right',
			validator(value) {
				return ['left', 'right'].includes(value)
			}
		},
		bgColor: {
			default: ''
		}
	},
	data() {
		return {
			groupId: Math.random(),
			initValues: []
		}
	},
	computed: {
		groupVModel() {
			return this.value !== undefined
		}
	},
	watch: {
		itemWidth(newVal, oldVal) {
			this.emit('width', newVal)
		},
		labelPosition(newVal, oldVal) {
			this.emit('labelPosition', newVal)
		},
		type(newVal, oldVal) {
			this.emit('type', newVal)
		},
		value(newVal, oldVal) {
			this.value1 = this.getValue()
			this.reset(this.value1)
		}
	},
	provide() {
		return {
			groupId: this.groupId,
			groupVModel: this.groupVModel
		}
	},
	methods: {
		getValue() {
			return Array.isArray(this.value) ? this.value : []
		},
		setValues(arr, res) {
			let pos = arr.indexOf(res.value)
			if (res.checked && pos === -1) {
			    arr.push(res.value)
			} else if (!res.checked && pos > -1) {
			    arr.splice(pos, 1)
			}
		},
		reset(value) {
			uni.$emit(`groupreset.${this.groupId}`, value)
		},
		emit(field, value) {
			uni.$emit(`provide.${field}.${this.groupId}`, value)
		}
	},
	created() {
		!this.groupVModel && uni.$on(`groupinit.${this.groupId}`, res => {
			this.setValues(this.initValues, res)
			this.value1 = deepCopy(this.initValues)
			this.emitFormChange(true)
		})
		uni.$on(`groupchange.${this.groupId}`, res => {
			this.setValues(this.value1, res)
			this.$emit('change', deepCopy(this.value1))
			this.groupVModel && this.$emit('input', deepCopy(this.value1))
		})
	},
	mounted() {
		this.emit('width', this.itemWidth)
		this.emit('labelPosition', this.labelPosition)
		this.emit('type', this.type)
		this.groupVModel && this.reset(this.value1) && this.emitFormChange(true)
	},
	destroyed() {
		this.value === undefined && uni.$off(`groupinit.${this.groupId}`)
		uni.$off(`groupchange.${this.groupId}`)
	}
}
</script>

<style lang="scss" scoped>
.checkbox-group {
	position: relative;
}
</style>
