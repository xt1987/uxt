<template>
	<scroll-view scroll-x scroll-with-animation :scroll-left="scrollLeft" class="tab" :class="[
			classes,
			bgColorClass,
			{
				'text-center': align === 'center'
			}
		]"
	 :style="[
			styles,
			{
				backgroundColor: bgColorStyle
			}
		]">
		<view :class="align === 'avg' ? 'flex text-center' : ''">
			<view v-for="(tab, index) in tabs" :key="index" class="item" :class="[
					`tab${index}`,
					index === tabIndex ? `${activeColorClass} active` : colorClass,
					align === 'avg' ? 'flex-sub' : ''
				]"
			 :style="{color: index === tabIndex ? activeColorStyle : colorStyle}" @click="tabChange(index)">
				<uxt-icon v-if="tab.icon" :type="tab.icon.type" :color="tab.icon.color" :size="tab.icon.size" :animation="tab.icon.animation"
				 :bgColor="tab.icon.bgColor" :round="tab.icon.round" :hollow="tab.icon.hollow"></uxt-icon>
				<text>{{tab.text}}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import baseMixin from '@/uxt/mixins/base.js';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		mixins: [baseMixin],
		components: {
			uxtIcon
		},
		props: {
			// 排列方式 ''默认 'center'居中 'avg'平分
			align: {
				type: String,
				default: '',
				validator(value) {
					return ['', 'center', 'avg'].includes(value);
				}
			},
			// 选中前景色
			activeColor: {
				type: String
			},
			// tab项 格式：{icon: iconObj, text: ''}
			tabs: {
				type: Array,
				default () {
					return [];
				},
				required: true
			},
			// 当前选中tab索引
			activeIndex: {
				type: Number,
				default: 0
			},
			// 背景色
			bgColor: {
				default: 'white'
			}
		},
		data() {
			return {
				scrollLeft: 0,
				tabIndex: this.activeIndex
			};
		},
		computed: {
			theme() {
				return this.$store.state.uxtStore.theme;
			},
			activeColorClass() {
				return this.getColor(this.activeColor || this.theme, 1).classes;
			},
			activeColorStyle() {
				return this.getColor(this.activeColor).styles;
			}
		},
		watch: {
			activeIndex(newVal, oldVal) {
				if (newVal < this.tabs.length) {
					this.tabChange(newVal);
				}
			}
		},
		methods: {
			async tabChange(index) {
				const that = this;
				if (that.tabIndex === index) {
					return false;
				} else {
					let width = 0;
					for (let i = 0; i < index - 1; i++) {
						let result = await that.getElSize(`.tab${i}`);
						width += result.width + 10;
					}
					that.scrollLeft = width;
					that.tabIndex = index;
					that.$emit('tab', index);
				}
			},
			getElSize(selector) { //得到元素的size
				const that = this;
				return new Promise((res, rej) => {
					uni.createSelectorQuery().in(that).select(selector).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				});
			}
		}
	};
</script>

<style>
	.tab {
		white-space: nowrap;
	}

	.tab .item {
		height: 90rpx;
		display: inline-block;
		line-height: 90rpx;
		/* margin: 0 10rpx; */
		padding: 0 20rpx;
	}

	.tab .item.active {
		border-bottom: 4rpx solid;
	}
</style>
