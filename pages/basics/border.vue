<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="边框位置" subTitle="(border[s]/dashed)[-top/right/bottom/left]"></uxt-title-bar>
		<view class="padding bg-white">
			<view class="margin-sm border padding-sm text-center">border[s]</view>
			<view class="margin-sm border-top padding-sm text-center">border[s]-top</view>
			<view class="margin-sm border-right padding-sm text-center">border[s]-right</view>
			<view class="margin-sm border-bottom padding-sm text-center">border[s]-bottom</view>
			<view class="margin-sm border-left padding-sm text-center">border[s]-left</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="边框粗细" subTitle="border/borders"></uxt-title-bar>
		<view class="padding bg-white">
			<view class="margin-sm border padding-sm text-center">border</view>
			<view class="margin-sm borders padding-sm text-center">borders</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="边框样式" subTitle="border[ dashed][ round/radius]"></uxt-title-bar>
		<view class="padding bg-white">
			<view class="margin-sm border padding-sm text-center">border</view>
			<view class="margin-sm border radius padding-sm text-center">border radius</view>
			<view class="margin-sm border round padding-sm text-center">border round</view>
			<view class="margin-sm border dashed padding-sm text-center">border dashed</view>
			<view class="margin-sm border dashed radius padding-sm text-center">border dashed radius</view>
			<view class="margin-sm border dashed round padding-sm text-center">border dashed round</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="边框颜色" subTitle="border border-xx"></uxt-title-bar>
		<view class="padding">
			<view v-for="(item, index) in colors" :key="index" class="margin-sm border padding-sm text-center" :class="[`border-${item}`]">{{item}}</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="边框阴影" subTitle="shadow[-wrap]"></uxt-title-bar>
		<view class="padding bg-white">
			<view class="margin-sm padding-sm text-center shadow" :class="[`text-${theme}`]">shadow</view>
			<view class="margin-sm margin-top-lg padding-sm text-center shadow-wrap" :class="[`text-${theme}`]">shadow-wrap</view>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';

	export default {
		components: {
			uxtTitleBar
		},
		data() {
			return {
				theme: this.gTheme,
				title: '边框',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey',
					'gray', 'black', 'white'
				]
			};
		}
	};
</script>

<style>
</style>
