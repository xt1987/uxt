// 表单控件应该使用此mixin

export default {
    props: {
        name: {
            type: String
        },
        value: {}
    },
	data() {
		return {
			value1: ''
		}
	},
	inject: {
		formId: {
			default: 0
		}
	},
	watch: {
		value(newVal, oldVal) {
			this.value1 = this.getValue()
		},
		value1(newVal, oldVal) {
			this.emitFormChange()
		}
	},
	methods: {
		getValue() {
			return this.value
		},
		emitFormChange(isInit = false) {
			let emitName = 'formchange'
			if (isInit) {
				emitName = 'forminit'
			}
			this.formId && this.name && uni.$emit(`${emitName}.${this.formId}`, {
				name: this.name,
				value: this.value1
			})
		}
	},
	created() {
		this.value1 = this.getValue()
		this.formId && this.name && uni.$on(`reset.${this.formId}`, res => {
			if (typeof this.reset === 'function') {
				res[this.name] !== undefined && this.reset(res[this.name])
			} else {
				throw new Error('表单组件需要在methods中添加reset方法才能使用form reset功能')
			}
		})
	},
	mounted() {
		this.emitFormChange(true)
	},
	destroyed() {
		this.formId && this.name && uni.$off(`reset.${this.formId}`)
	}
}
