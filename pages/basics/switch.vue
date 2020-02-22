<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="开关形状"></uxt-title-bar>
		<view class="bg-white padding-sm flex flex-wrap">
			<uxt-switch classes="margin-lr-sm margin-tb-xs"></uxt-switch>
			<uxt-switch classes="margin-lr-sm margin-tb-xs" radius></uxt-switch>
			<uxt-switch classes="margin-lr-sm margin-tb-xs" round></uxt-switch>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="开关颜色"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-switch classes="margin-lr-sm margin-tb-xs" bgColor="df" checked radius></uxt-switch>
			<uxt-switch classes="margin-lr-sm margin-tb-xs" v-for="(color, index) in colors" :key="index" :bgColor="color"
			 checked radius></uxt-switch>
		</view>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-switch classes="margin-lr-sm margin-tb-xs" bgColor="df" checked light round></uxt-switch>
			<uxt-switch classes="margin-lr-sm margin-tb-xs" v-for="(color, index) in colors" :key="index" :bgColor="color"
			 checked light round></uxt-switch>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="开关图标"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-switch classes="margin-lr-sm margin-tb-xs" :checkedIcon="{type: 'check'}" :uncheckedIcon="{type: 'close'}"
			 radius></uxt-switch>
			<uxt-switch classes="margin-lr-sm margin-tb-xs" :checkedIcon="{type: 'male'}" :uncheckedIcon="{type: 'female'}"
			 round></uxt-switch>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="禁用开关"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-switch classes="margin-lr-sm margin-tb-xs" checked radius disabled></uxt-switch>
			<uxt-switch classes="margin-lr-sm margin-tb-xs" round disabled></uxt-switch>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="v-model绑定"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap align-center">
			<uxt-switch classes="margin-lr-sm margin-tb-xs" v-model="checked" radius></uxt-switch>
			{{checked}}
			<uxt-switch classes="margin-lr-sm margin-tb-xs" :checked="checked" round disabled></uxt-switch>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtSwitch from '@/uxt/components/uxt-switch.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtSwitch
		},
		data() {
			return {
				title: '开关',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown'],
				checked: true
			};
		}
	};
</script>

<style>
</style>
