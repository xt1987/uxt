<template>
	<view class="checkbox flex-inline align-center"
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
				class="cbx flex-inline align-center justify-center"
			>
				<uxt-icon
					type="check"
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
import { deepCopy } from '../utils/util.js'
import baseMixin from '../mixins/base.js'
import formMixin from '../mixins/form.js'
import uxtIcon from './uxt-icon.vue'

export default {
    name: 'uxt-checkbox',
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
        // v-model绑定(多个)时的值
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
            checked1: this.getChecked1(this.value),
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
			if (this.groupVModel || typeof this.value === 'boolean' || Array.isArray(this.value)) {
				return
			}
            this.checked1 = newVal
			this.value1 = this.getValue()
        },
        value(newVal, oldVal) {
            this.checked1 = this.getChecked1(newVal)
			this.value1 = this.getValue()
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
			if (this.groupId) {
				// 组模式
				return this.value
			} else if (Array.isArray(this.value)) {
				// v-model绑定(多个)
				return this.val
			}
			// 其它
			return this.checked1 ? 1 : 0
		},
        getChecked1(value) {
            if (typeof value === 'boolean') {
                return value
            } else if (Array.isArray(value)) {
                if (value.includes(this.val)) {
                    return true
                } else {
                    return false
                }
            } else {
                return this.checked
            }
        },
        handleClick() {
            if (!this.disabled) {
                this.checked1 = !this.checked1
                let ret = this.checked1
                if (Array.isArray(this.value)) {
                    ret = deepCopy(this.value)
                    let pos = ret.indexOf(this.val)
                    if (this.checked1 && pos === -1) {
                        ret.push(this.val)
                    } else if (!this.checked1 && pos > -1) {
                        ret.splice(pos, 1)
                    }
                }
				this.$emit('change', this.checked1)
                this.$emit('input', ret)
            }
        },
		emitGroupChange(isInit = false) {
			let emitName = 'groupchange'
			if (isInit) {
				emitName = 'groupinit'
			}
			this.groupId && uni.$emit(`${emitName}.${this.groupId}`, {
				checked: this.checked1,
				value: this.value1
			})
		},
		reset(value) {
			if ((value && !this.checked1) || (!value && this.checked1)) {
				this.handleClick()
			}
		}
    },
	created() {
		if (this.groupId) {
			uni.$on(`groupreset.${this.groupId}`, res => {
				if (Array.isArray(res) && ((res.includes(this.value1) && !this.checked1) || (!res.includes(this.value1) && this.checked1))) {
					this.handleClick()
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
			uni.$off(`provide.width.${this.groupId}`)
			uni.$off(`provide.labelPosition.${this.groupId}`)
			uni.$off(`provide.type.${this.groupId}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.checkbox {
    position: relative;
	vertical-align: middle;
	.cbx {
		width: 50rpx;
		height: 50rpx;
		border-radius: 8rpx;
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
