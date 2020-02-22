<template>
	<view class="switch border" :class="[
			classes,
			(checked2 ? `${bgColorClass} ${bgColorClass.replace('bg-', 'border-')}` : 'bg-grey border-grey'),
			colorClass,
			{
				radius: radius,
				round: round,
				disabled: disabled
			}
		]"
	 :style="[
			styles,
			{
				backgroundColor: (checked2 ? bgColorStyle : ''),
				borderColor: (checked2 ? bgColorStyle : '')
			}
		]"
	 @click="handleClick">
		<view class="flex height-p100">
			<view v-show="checked2" class="flex-sub flex justify-center align-center" :class="[
					bgColorClass,
					{
						radius: radius,
						round: round
					}
				]">
				<uxt-icon v-if="checkedIcon" :type="checkedIcon.type" :color="checkedIcon.color" :animation="checkedIcon.animation"
				 :bgColor="checkedIcon.bgColor" :radius="checkedIcon.radius" :round="checkedIcon.round" :hollow="checkedIcon.hollow"></uxt-icon>
			</view>
			<view class="bg-white flex-sub" :class="[
					{
						radius: radius,
						round: round
					}
				]"></view>
			<view v-show="!checked2" class="flex-sub flex justify-center align-center bg-grey" :class="[
					{
						radius: radius,
						round: round
					}
				]">
				<uxt-icon v-if="uncheckedIcon" :type="uncheckedIcon.type" :color="uncheckedIcon.color" :animation="uncheckedIcon.animation"
				 :bgColor="uncheckedIcon.bgColor" :radius="uncheckedIcon.radius" :round="uncheckedIcon.round" :hollow="uncheckedIcon.hollow"></uxt-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import rrMixin from '@/uxt/mixins/rr.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		mixins: [baseMixin, rrMixin],
		components: {
			uxtIcon
		},
		props: {
			// 用于v-model绑定
			value: {
				type: Boolean,
				default: null
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
			// 选中时显示的图标
			checkedIcon: {
				type: Object,
				default() {
					return {
						type: 'check'
					}
				}
			},
			// 非选中时显示的图标
			uncheckedIcon: {
				type: Object,
				default() {
					return {
						type: 'close'
					}
				}
			},
			bgColor: {
				default: 'df'
			}
		},
		data() {
			return {
				checked2: this.value === true ? true : this.value === false ? false : this.checked
			};
		},
		watch: {
			checked(newVal) {
				if (this.value === null) {
					this.checked2 = newVal;
				}
			},
			value(newVal) {
				this.checked2 = this.value;
			}
		},
		methods: {
			handleClick() {
				if (!this.disabled) {
					this.checked2 = !this.checked2;
					this.$emit('change', this.checked2);
					this.$emit('input', this.checked2);
				}
			}
		}
	};
</script>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 100rpx;
		height: 50rpx;
		vertical-align: middle;
	}

	.switch.disabled {
		opacity: 0.6;
	}
</style>
