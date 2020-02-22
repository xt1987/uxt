<template>
	<uxt-layout1 :title="title">
		<view class="padding-tb-sm">
			<uxt-tab-bar :items="items0"></uxt-tab-bar>
			<uxt-tab-bar classes="margin-top-sm" :items="items1" bgColor="black"></uxt-tab-bar>
			<uxt-tab-bar :styles="{marginTop: '60rpx'}" :items="items2"></uxt-tab-bar>
			<uxt-tab-bar :styles="{marginTop: '60rpx'}" :items="items3" bgColor="black"></uxt-tab-bar>
			<uxt-tab-bar classes="margin-top-sm" :items="items4"></uxt-tab-bar>
			<uxt-tab-bar classes="margin-top-sm" :items="items5"></uxt-tab-bar>
			<uxt-tab-bar classes="margin-top-sm" :items="items6" @itemClick="itemClick6"></uxt-tab-bar>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTabBar from '@/uxt/components/uxt-tab-bar.vue';

	export default {
		components: {
			uxtTabBar
		},
		data() {
			return {
				title: '底部操作栏',
				items4: [{
					icon: {
						type: 'service',
						color: 'green'
					},
					badge: '-',
					text: '客服',
					color: 'black'
				}, {
					icon: {
						type: 'favorfill'
					},
					text: '已收藏',
					color: 'orange'
				}, {
					icon: {
						type: 'cart'
					},
					text: '购物车',
					badge: '99'
				}, {
					type: 'btn',
					text: '立即订购',
					btnBgColor: 'red',
					btnColor: 'white'
				}],
				items5: [{
					icon: {
						type: 'service',
						color: 'green'
					},
					badge: '-',
					text: '客服',
					color: 'black'
				}, {
					icon: {
						type: 'cart'
					},
					text: '购物车',
					badge: '99'
				}, {
					type: 'btn',
					text: '加入购物车',
					btnBgColor: 'orange',
					btnColor: 'white'
				}, {
					type: 'btn',
					text: '立即订购',
					btnBgColor: 'red',
					btnColor: 'white'
				}],
				items6: [{
					icon: {
						type: 'service',
						color: 'green'
					},
					badge: '-',
					text: '客服',
					color: 'black'
				}, {
					icon: {
						type: 'cart'
					},
					text: '购物车',
					badge: '99'
				}, {
					type: 'btn',
					round: true,
					text: '加入购物车',
					btnBgColor: 'orange',
					btnColor: 'white'
				}, {
					type: 'btn',
					round: true,
					text: '立即订购',
					btnBgColor: 'red',
					btnColor: 'white',
					shadow: true
				}]
			};
		},
		computed: {
			theme() {
				return this.$store.state.uxtStore.theme;
			},
			items0() {
				return [{
					icon: '/static/tabbar/basics_active.png',
					text: '元素',
					color: this.theme
				}, {
					icon: '/static/tabbar/component.png',
					text: '组件'
				}, {
					icon: '/static/tabbar/plugin.png',
					text: '扩展',
					badge: '99'
				}, {
					icon: '/static/tabbar/about.png',
					text: '关于',
					badge: '-'
				}];
			},
			items1() {
				return [{
					icon: {
						type: 'homefill'
					},
					text: '首页'
				}, {
					icon: {
						type: 'similar'
					},
					text: '分类',
					color: this.theme
				}, {
					icon: {
						type: 'recharge'
					},
					text: '积分'
				}, {
					icon: {
						type: 'cart'
					},
					text: '购物车',
					badge: '99'
				}, {
					icon: {
						type: 'my'
					},
					text: '我的',
					badge: '-'
				}];
			},
			items2() {
				return [{
					icon: {
						type: 'homefill'
					},
					text: '首页'
				}, {
					icon: {
						type: 'similar'
					},
					text: '分类'
				}, {
					type: 'add',
					icon: {
						type: 'add'
					},
					text: '发布'
				}, {
					icon: {
						type: 'cart'
					},
					text: '购物车',
					badge: '99',
					color: this.theme
				}, {
					icon: {
						type: 'my'
					},
					text: '我的',
					badge: '-'
				}];
			},
			items3() {
				return [{
					icon: {
						type: 'homefill'
					},
					text: '首页'
				}, {
					icon: {
						type: 'similar'
					},
					text: '分类'
				}, {
					type: 'add',
					icon: '/static/tabbar/plugin.png',
					text: '发布'
				}, {
					icon: {
						type: 'cart'
					},
					text: '购物车',
					badge: '99'
				}, {
					icon: {
						type: 'my'
					},
					text: '我的',
					badge: '-',
					color: this.theme
				}];
			}
		},
		methods: {
			itemClick6(index) {
				console.log(index);
			}
		}
	};
</script>

<style>
</style>
