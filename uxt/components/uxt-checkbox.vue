<template>
	<view class="checkbox margin-right-xs flex-inline align-center justify-center" :class="[
			classes,
			(checked2 ? (all ? bgColorClass : bgColorClass.replace('bg-', 'border-')) : 'border border-grey bg-white'),
			(checked2 ? colorClass : ''),
			{
				disabled: disabled,
				borders: checked2 && !all
			}
		]"
	 :style="[
			styles,
			{
				backgroundColor: (checked2 && all ? bgColorStyle : ''),
				color: (checked2 ? colorStyle : ''),
				borderColor: (checked2 && !all ? bgColorStyle : '')
			}
		]"
	 @click="handleClick">
		<uxt-icon v-if="checked2" :type="all ? 'check' : 'ellipse'"></uxt-icon>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		name: 'uxt-checkbox',
		mixins: [baseMixin],
		components: {
			uxtIcon
		},
		props: {
			// 用于v-model绑定
			value: {
				type: [Boolean, Array],
				default: null
			},
			// 值
			values: {
				type: String
			},
			// 是否选中
			checked: {
				type: Boolean,
				default: false
			},
			// 全选/半选状态，控制显示的图标
			all: {
				type: Boolean,
				default: true
			},
			// 是否禁用
			disabled: {
				type: Boolean,
				default: false
			},
			bgColor: {
				default: 'df'
			}
		},
		data() {
			return {
				checked2: this.getChecked2(this.value)
			};
		},
		watch: {
			checked(newVal, oldVal) {
				// v-model绑定时忽略checked
				if (this.value === null) {
					this.checked2 = newVal;
				}
			},
			value(newVal, oldVal) {
				this.checked2 = this.getChecked2(newVal);
			}
		},
		methods: {
			getChecked2(value) {
				if (typeof value === 'boolean') {
					return value;
				} else if (value instanceof Array) {
					if (value.includes(this.values)) {
						return true;
					} else {
						return false;
					}
				} else {
					return this.checked;
				}
			},
			handleClick() {
				if (!this.disabled) {
					this.checked2 = !this.checked2;
					let ret = this.checked2;
					if (this.value instanceof Array) {
						ret = Object.assign([], this.value);
						let pos = ret.indexOf(this.values);
						if (this.checked2 && pos === -1) {
							ret.push(this.values);
						} else if (!this.checked2 && pos > -1) {
							ret.splice(pos, 1);
						}
					}
					this.$emit('change', ret);
					this.$emit('input', ret);
				}
			}
		}
	};
</script>

<style>
	.checkbox {
		position: relative;
		width: 50rpx;
		height: 50rpx;
		border-radius: 8rpx;
		vertical-align: middle;
	}

	/* .checkbox .cbx {
		opacity: 0;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	} */

	.checkbox.disabled {
		opacity: 0.6;
	}
</style>
