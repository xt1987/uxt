<template>
	<view class="radio flex-inline align-center"
		:class="[
			classes,
			labelPosition1
		]"
		:style="[
			styles,
			{
				width: type1 !== 'btn' ? getSize(width1).styles : ''
			}
		]"
		@click="handleClick"
	>
		<block v-if="type1 !== 'btn'">
			<view
				:class="[
					colorClass2,
					bgColorClass2,
					borderClass,
					{
						disabled: disabled,
						solid: !checked1 && (type1 === 'df' || type1 === 'hollow') && !bgColorClass,
						sm: size === 'sm'
					}
				]"
				:style="{
					color: colorStyle2,
					backgroundColor: bgColorStyle2,
					borderColor: borderStyle
				}"
				class="rdo flex-inline align-center justify-center round"
			>
				<uxt-icon
					:type="type1 === 'onlyicon' ? 'check' : 'dot'"
					v-if="checked1"
				></uxt-icon>
			</view>
			<view v-if="label" class="label flex-sub">
				{{ label }}
			</view>
		</block>
		<view v-else class="padding-xs radius btn"
			:class="[
				colorClass2,
				bgColorClass2,
				{
					sm: size === 'sm'
				}
			]"
			:style="{
				color: colorStyle2,
				backgroundColor: bgColorStyle2
			}"
		>
			{{ label }}
		</view>
	</view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import formMixin from '../mixins/form.js'
import uxtIcon from './uxt-icon.vue'

export default {
    name: 'uxt-radio',
    mixins: [baseMixin, formMixin],
    components: {
        uxtIcon
    },
    props: {
		// 样式
		type: {
			type: String,
			default: '',
			validator(value) {
				return ['', 'df', 'hollow', 'onlyicon', 'btn'].includes(value)
			}
		},
        // 大小, ''/'sm'
        size: {
            type: String,
			default: '',
			validator(value) {
				return ['', 'sm'].includes(value)
			}
        },
        // v-model绑定时的值
        val: {
            type: String
        },
        // 是否选中
        checked: {
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
		// 宽度
		width: {
			type: [Number, String]
		},
		// 标签
		label: {
			type: String
		},
		// 标签位置 left/right
		labelPosition: {
			type: String,
			default: '',
			validator(value) {
				return ['', 'left', 'right'].includes(value)
			}
		}
    },
    data() {
        return {
            checked1: false,
			width1: this.width,
			labelPosition1: this.labelPosition || 'right',
			type1: this.type || 'df'
        }
    },
	inject: {
		groupId: {
			default: 0
		},
		groupVModel: {
			default: false
		}
	},
	computed: {
		// 模式：组模式、v-model、普通
		mode() {
			if (this.groupId) {
				return 'group'
			} else if (this.value !== undefined) {
				return 'v-model'
			}
			return ''
		},
		colorClass2() {
			let ret = ''
			switch(this.type1) {
				case 'df':
				case 'onlyicon':
				case 'btn':
					ret = this.checked1 ? this.colorClass : ''
					break
				case 'hollow':
					ret = this.checked1 ? this.bgColorClass.replace('gradual-', '').replace('light-', '').replace('bg-', 'text-') : ''
					break
			}
			return ret
		},
		colorStyle2() {
			let ret = ''
			switch(this.type1) {
				case 'df':
				case 'onlyicon':
				case 'btn':
					ret = this.checked1 ? this.colorStyle : ''
					break
				case 'hollow':
					ret = this.checked1 ? this.bgColorStyle : ''
					break
			}
			return ret
		},
		bgColorClass2() {
			let ret = ''
			switch(this.type1) {
				case 'df':
					ret = this.checked1 ? this.bgColorClass : ''
					break
				case 'btn':
					ret = this.checked1 ? this.bgColorClass : 'bg-grey'
					break
			}
			return ret
		},
		bgColorStyle2() {
			let ret = ''
			switch(this.type1) {
				case 'df':
				case 'btn':
					ret = this.checked1 ? this.bgColorStyle : ''
					break
			}
			return ret
		},
		borderClass() {
			let ret = ''
			switch(this.type1) {
				case 'df':
					ret = this.checked1 ? '' : this.bgColorClass.replace('gradual-', '').replace('light-', '').replace('bg-', 'solid-')
					break
				case 'hollow':
					ret = this.bgColorClass.replace('gradual-', '').replace('light-', '').replace('bg-', 'solid-')
					break
			}
			return ret
		},
		borderStyle() {
			let ret = ''
			switch(this.type1) {
				case 'df':
					ret = this.checked1 ? '' : this.bgColorStyle
					break
				case 'hollow':
					ret = this.bgColorStyle
					break
			}
			return ret
		}
	},
    watch: {
        checked(newVal, oldVal) {
            // v-model绑定时忽略checked
			if (this.groupVModel || this.mode === 'v-model') {
				return
			}
            this.checked1 = newVal
			this.value1 = this.getValue()
        },
        // v-model
        value(newVal, oldVal) {
			if (this.mode === 'v-model') {
				if (newVal === this.val) {
					this.checked1 = true
				} else {
					this.checked1 = false
				}
				this.value1 = this.getValue()
			}
        },
		checked1(newVal, oldVal) {
			this.emitGroupChange()
		},
		width(newVal, oldVal) {
			this.width1 = newVal
		},
		labelPosition(newVal, oldVal) {
			this.labelPosition1 = newVal
		},
		type(newVal, oldVal) {
			this.type1 = newVal
		}
    },
    methods: {
		getValue() {
			if (this.mode === 'group') {
				// 组模式
				return this.value
			} else if (this.mode === 'v-model') {
				// v-model绑定
				return this.val
			}
			// 其它
			return this.checked1 ? 1 : 0
		},
		getChecked1(value) {
			if (this.mode === 'v-model') {
			    // v-model
			    if (value === this.val) {
			        return true
			    } else {
			        return false
			    }
			}
			return this.checked
		},
        handleClick() {
            if (!this.disabled && !this.checked1) {
                this.checked1 = true
                let ret = true
                if (this.mode === 'v-model') {
                    // v-model
                    ret = this.val
                }
                this.$emit('checked')
                this.$emit('input', ret)
            }
        },
		emitGroupChange(isInit = false) {
			let emitName = 'groupchange'
			if (isInit) {
				emitName = 'groupinit'
			}
			this.groupId && this.checked1 && uni.$emit(`${emitName}.${this.groupId}`, this.value1)
		},
		reset(value) {
			if (value && !this.checked1) {
				this.handleClick()
			} else if (!value && this.checked1) {
				this.checked1 = false
			}
		}
    },
	created() {
		this.checked1 = this.getChecked1(this.value)
		if (this.groupId) {
			uni.$on(`groupreset.${this.groupId}`, res => {
				if (res === this.value1 && !this.checked1) {
					this.handleClick()
				} else if (res !== this.value1 && this.checked1) {
					this.checked1 = false
				}
			})
			uni.$on(`radiochange.${this.groupId}`, res => {
				if (res !== this.value1) {
					this.checked1 = false
				}
			})
			uni.$on(`provide.width.${this.groupId}`, res => {
				!this.width && (this.width1 = res)
			})
			uni.$on(`provide.labelPosition.${this.groupId}`, res => {
				!this.labelPosition && (this.labelPosition1 = res)
			})
			uni.$on(`provide.type.${this.groupId}`, res => {
				!this.type && (this.type1 = res)
			})
		}
	},
	mounted() {
		!this.groupVModel && this.emitGroupChange(true)
	},
	destroyed() {
		if (this.groupId) {
			uni.$off(`groupreset.${this.groupId}`)
			uni.$off(`radiochange.${this.groupId}`)
			uni.$off(`provide.width.${this.groupId}`)
			uni.$off(`provide.labelPosition.${this.groupId}`)
			uni.$off(`provide.type.${this.groupId}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.radio {
    position: relative;
	vertical-align: middle;
	.rdo {
		width: 50rpx;
		height: 50rpx;
		font-size: 32rpx;
		&:not([class*='solid-'])::before {
			border-color: inherit;
		}
		&.sm {
			width: 36rpx;
			height: 36rpx;
			font-size: 24rpx;
		}
	}
	&.left {
		flex-direction: row-reverse;
		.label {
			margin-right: 10rpx;
		}
	}
	&.right .label {
		margin-left: 10rpx;
		text-align: right;
	}
	.btn.sm {
		font-size: 24rpx;
		padding: 4rpx 6rpx;
	}
}
</style>
