<template>
	<view :class="[classes, bgClass]" :style="[styles, { backgroundColor: bgStyle }]" class="color-selector inline-block radius solid" @click="show = true">
		<uxt-modal v-model="show" width="90%" bg-color="#e0e0e0" title="选择颜色" close>
			<view v-if="clear" class="padding flex flex-wrap"><view class="bg-theme item radius padding-xs margin-xs" @click="handleClick('')">清空</view></view>
			<view class="padding flex flex-wrap">
				<view :class="[{ solid: value === 'theme' }]" class="bg-theme item radius padding-xs margin-xs" @click="handleClick('theme')">uxt</view>
			</view>
			<view class="padding flex flex-wrap">
				<view
					v-for="(color, index) in colors"
					:key="index"
					:class="[`bg-${color}`, { solid: value === color }]"
					class="item radius padding-xs margin-xs"
					@click="handleClick(color)"
				>
					uxt
				</view>
			</view>
			<view v-if="light" class="padding flex flex-wrap">
				<view
					v-for="(color, index) in colors1"
					:key="index"
					:class="[`bg-light-${color}`, { solid: value === `light-${color}` }]"
					class="item radius padding-xs margin-xs"
					@click="handleClick(`light-${color}`)"
				>
					uxt
				</view>
			</view>
			<view v-if="gradual" class="padding flex flex-wrap">
				<view
					v-for="(color, index) in colors1"
					:key="index"
					:class="[`bg-gradual-${color}`, { solid: value === `gradual-${color}` }]"
					class="item radius padding-xs margin-xs"
					@click="handleClick(`gradual-${color}`)"
				>
					uxt
				</view>
			</view>
			<view v-if="diy" class="padding flex flex-wrap">
				<view
					v-for="(color, index) in colors3"
					:key="index"
					:class="[{ solid: value === color }]"
					:style="{ backgroundColor: color }"
					class="item radius padding-xs margin-xs text-white"
					@click="handleClick(color)"
				>
					uxt
				</view>
			</view>
		</uxt-modal>
	</view>
</template>

<script>
import baseMixin from '@xtcoder/uxt/mixins/base.js'
import uxtModal from '@xtcoder/uxt/components/uxt-modal.vue'

export default {
	mixins: [baseMixin],
	components: {
		uxtModal
	},
	props: {
		value: {
			default: 'theme'
		},
		clear: {
			type: Boolean,
			default: true
		},
		light: {
			type: Boolean,
			default: false
		},
		gradual: {
			type: Boolean,
			default: false
		},
		diy: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			show: false,
			colors1: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey'],
			colors2: ['gray', 'black', 'white'],
			colors3: ['#ff0000', '#00ff00', '#0000ff']
		}
	},
	computed: {
		bgClass() {
			return this.getColor(this.value, 'bg-').classes
		},
		bgStyle() {
			return this.getColor(this.value).styles
		},
		colors() {
			return [...this.colors1, ...this.colors2]
		}
	},
	methods: {
		handleClick(color) {
			this.show = false
			this.$emit('select', color)
			this.$emit('input', color)
		}
	}
}
</script>

<style lang="scss" scoped>
.color-selector {
	position: relative;
	width: 50rpx;
	height: 50rpx;
	.solid {
		&::before {
			border-color: #f00;
			width: auto;
			height: auto;
			top: -6rpx;
			right: -6rpx;
			bottom: -6rpx;
			left: -6rpx;
		}
	}
}
</style>
