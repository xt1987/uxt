<template>
	<view>
		<view v-if="headerHeight !== 0" class="header" :style="{height: headerHeightStyle}">
			<view class="fixed-top" :class="headerBgColorClass" :style="{height: headerHeightStyle, backgroundColor: headerBgColorStyle}">
				<view style="position: relative;" :style="{top: `${statusBarHeight}px`}">
					<slot name="header">
						<uxt-nav-bar bgColor="" :back="back">
							{{title}}
							<template #right>
								<view class="margin-right-sm padding-sm border border-white" :class="[`bg-${theme}`]" @click="changeTheme = true"></view>
							</template>
						</uxt-nav-bar>
					</slot>
				</view>
			</view>
		</view>
		<slot></slot>
		<view v-if="footerHeight" class="footer" :style="{height: footerHeightStyle}">
			<view class="fixed-bottom" :style="{height: footerHeightStyle}">
				<slot name="footer"></slot>
			</view>
		</view>
		<view v-if="changeTheme" class="theme bg-black" style="z-index: 1001">
			<view class="cf">
				<uxt-icon classes="fr margin-sm" type="close" @click="changeTheme = false"></uxt-icon>
			</view>
			<view class="flex flex-wrap padding">
				<view v-for="(item, index) in themes" :key="index" class="padding margin-sm" :class="[
						`bg-${item}`,
						{
							'border border-white': item === theme
						}
					]"
				 @click="handleChangeTheme(item)"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uxtNavBar from '@/uxt/components/uxt-nav-bar.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		components: {
			uxtNavBar,
			uxtIcon
		},
		props: {
			// 头部高度, 默认为导航栏高度，不写slot默认显示导航栏，传0不显示header
			headerHeight: {
				type: [Number, String]
			},
			// 头部背景
			headerBgColor: {
				type: String
			},
			// 标题
			title: {
				type: String
			},
			back: {
				type: Boolean,
				default: true
			},
			// 底部高度
			footerHeight: {
				type: [Number, String]
			}			
		},
		data() {
			return {
				statusBarHeight: this.gStatusBarHeight,
				changeTheme: false,
				themes: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey']
			};
		},
		computed: {
			headerBgColorClass() {
				return this.getColor((this.headerBgColor || `gradual-${this.$store.state.uxtStore.theme}`), 2).classes;
			},
			headerBgColorStyle() {
				return this.getColor((this.headerBgColor || `gradual-${this.$store.state.uxtStore.theme}`), 2).styles;
			},
			headerHeightStyle() {
				return this.headerHeight === 0 ? '' : (this.getSize(this.headerHeight).styles ||
					`${this.gNavBarHeight + this.gStatusBarHeight}px`);
			},
			footerHeightStyle() {
				return this.getSize(this.footerHeight).styles;
			},
			theme() {
				return this.$store.state.uxtStore.theme;
			}
		},
		methods: {
			handleChangeTheme(theme) {
				this.$store.commit('setTheme', theme);
				// console.log(this.theme);
			}
		}
	};
</script>

<style>
	.header>.fixed-top {
		width: 100%;
		z-index: 888;
	}

	.footer>.fixed-bottom {
		width: 100%;
		z-index: 888;
	}

	.theme {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 570rpx;
		height: 560rpx;
		box-shadow: 0 0 0rpx 2000rpx rgba(0, 0, 0, 0.3);
	}
</style>
