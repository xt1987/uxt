<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="复选框颜色"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-checkbox classes="margin-sm" bgColor="df" checked></uxt-checkbox>
			<uxt-checkbox classes="margin-sm" v-for="(color, index) in colors" :key="index" :bgColor="color" checked></uxt-checkbox>
		</view>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-checkbox classes="margin-sm" bgColor="df" checked light></uxt-checkbox>
			<uxt-checkbox classes="margin-sm" v-for="(color, index) in colors" :key="index" :bgColor="color" checked light></uxt-checkbox>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="复选框状态"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<label>
				<uxt-checkbox classes="margin-sm" checked></uxt-checkbox> 全选
			</label>
			<label>
				<uxt-checkbox classes="margin-sm" checked :all="false"></uxt-checkbox> 半选
			</label>
			<label>
				<uxt-checkbox classes="margin-sm" checked disabled></uxt-checkbox> 禁用
			</label>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="v-model绑定(单个)"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<label>
				<uxt-checkbox classes="margin-sm" v-model="checked"></uxt-checkbox> {{checked}}
			</label>
			<label>
				<uxt-checkbox classes="margin-sm" :checked="checked" disabled></uxt-checkbox> :checked="checked"
			</label>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="v-model绑定(多个)"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<label>
				<uxt-checkbox classes="margin-sm" v-model="checkeds" values="a"></uxt-checkbox> a
			</label>
			<label>
				<uxt-checkbox classes="margin-sm" v-model="checkeds" values="b"></uxt-checkbox> b
			</label>
			<label>
				<uxt-checkbox classes="margin-sm" v-model="checkeds" values="c"></uxt-checkbox> c
			</label>
			<label>
				<uxt-checkbox classes="margin-sm" v-model="checkeds" values="d"></uxt-checkbox> d
			</label>
		</view>
		<view class="bg-white padding-sm border-bottom text-center">
			{{checkeds.join(',')}}
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtCheckbox from '@/uxt/components/uxt-checkbox.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtCheckbox
		},
		data() {
			return {
				title: '复选框',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown'],
				checked: true,
				checkeds: []
			};
		}
	};
</script>

<style>
</style>
