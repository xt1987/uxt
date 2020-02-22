<template>
	<view class="input-box flex align-center" :class="[
			classes,
			bgColorClass,
			{
				radius: radius,
				round: round,
				border: borderColor
			},
			borderColorClass,
			size
		]"
	 :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				borderColor: borderColorStyle
			}
		]">
		<view class="height-p100 flex align-center">
			<slot name="left"></slot>
		</view>
		<view class="flex-sub margin-lr-xs relative flex align-center" :class="[
				colorClass
			]" :style="{
				color: colorStyle
			}">
			<input ref="input" class="flex-sub" :placeholder="placeholder" :placeholder-class="phColorClass" :placeholder-style="`color: ${phColorStyle};`"
			 :type="inputType" :value="val" :focus="focus" :confirm-type="confirmType" :selection-start="selection[0]" :selection-end="selection[1]"
			 :disabled="disabled" :maxlength="maxlength" @input="handleInput" />
			<uxt-icon v-if="clearable && !disabled && val !== ''" type="roundclosefill" color="gray" @click="handleClear"></uxt-icon>
			<uxt-icon v-if="type === 'password'" :type="passIcon" color="gray" @click="handleSwitchPass"></uxt-icon>
		</view>
		<view class="height-p100 flex align-center">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';
	import inputMixin from '@/uxt/mixins/input.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		mixins: [baseMixin, rrMixin, inputMixin],
		components: {
			uxtIcon
		},
		props: {
			// lg 大 xl 超大
			size: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'lg', 'xl'].includes(value);
				}
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: 'gray'
			},
			// placeholder颜色
			phColor: {
				type: String
			},
			color: {
				default: 'black'
			}
		},
		data() {
			return {
				val: this.value,
				passIcon: 'attentionfill',
				password: this.type === 'password'
			};
		},
		computed: {
			borderColorClass() {
				return this.getColor(this.borderColor, 3).classes;
			},
			borderColorStyle() {
				return this.getColor(this.borderColor).styles;
			},
			phColorClass() {
				return this.getColor(this.phColor, 1).classes;
			},
			phColorStyle() {
				return this.getColor(this.phColor).styles;
			},
			inputType() {
				if (this.type === 'password' && !this.password) {
					return 'text';
				} else {
					return this.type;
				}
			}
		},
		methods: {
			handleInput(e) {
				this.$emit('input', e.target.value);
			},
			handleClear() {
				this.$emit('input', '');
				this.$emit('clear', '');
			},
			// 切换密码显示
			handleSwitchPass() {
				const that = this;
				that.password = !that.password;
				if (that.password) {
					that.passIcon = 'attentionfill';
				} else {
					that.passIcon = 'attentionforbidfill';
				}
			}
		},
		watch: {
			value(newVal, oldVal) {
				this.val = newVal;
			}
		}
	};
</script>

<style>
	.input-box {
		height: 50rpx;
	}

	.lg {
		height: 70rpx;
	}

	.xl {
		height: 90rpx;
	}
</style>
