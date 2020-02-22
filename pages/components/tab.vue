<template>
	<uxt-layout1 :title="title">
		<view class="bg-white text-center padding-sm">Tab{{tabIndex}}</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="默认"></uxt-title-bar>
		<uxt-tab :tabs="tabs9" :activeIndex="tabIndex" @tab="tab"></uxt-tab>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="居中"></uxt-title-bar>
		<uxt-tab :tabs="tabs2" align="center" :activeIndex="tabIndex" @tab="tab"></uxt-tab>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="平分"></uxt-title-bar>
		<uxt-tab :tabs="tabs3" align="avg" :activeIndex="tabIndex" @tab="tab"></uxt-tab>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="背景"></uxt-title-bar>
		<uxt-tab :tabs="tabs2" align="center" bgColor="red" activeColor="white" :activeIndex="tabIndex" @tab="tab"></uxt-tab>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="图标"></uxt-title-bar>
		<uxt-tab :tabs="tabs" align="center" bgColor="green" activeColor="white" :activeIndex="tabIndex" @tab="tab"></uxt-tab>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtTab from '@/uxt/components/uxt-tab.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtTab
		},
		data() {
			const tabs = (index) => {
				const arr = [];
				for (let i = 0; i <= index; i++) {
					arr.push({
						text: `Tab${i}`
					});
				}
				return arr;
			};
			return {
				title: 'Tab栏',
				tabs9: tabs(9),
				tabs2: tabs(2),
				tabs3: tabs(3),
				tabs: [{
					icon: {
						type: 'camerafill'
					},
					text: '数码'
				}, {
					icon: {
						type: 'upstagefill'
					},
					text: '排行榜'
				}, {
					icon: {
						type: 'clothesfill'
					},
					text: '皮肤'
				}],
				tabIndex: 0
			};
		},
		methods: {
			tab(index) {
				this.tabIndex = index;
			}
		}
	};
</script>

<style>
</style>
