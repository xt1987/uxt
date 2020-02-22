<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="单选框颜色"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-radio classes="margin-sm" bgColor="df" checked></uxt-radio>
			<uxt-radio classes="margin-sm" v-for="(color, index) in colors" :key="index" :bgColor="color" checked></uxt-radio>
		</view>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<uxt-radio classes="margin-sm" bgColor="df" checked light></uxt-radio>
			<uxt-radio classes="margin-sm" v-for="(color, index) in colors" :key="index" :bgColor="color" checked light></uxt-radio>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="单选框状态"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<label>
				<uxt-radio classes="margin-sm" checked></uxt-radio> 选中
			</label>
			<label>
				<uxt-radio classes="margin-sm"></uxt-radio> 未选中
			</label>
			<label>
				<uxt-radio classes="margin-sm" checked disabled></uxt-radio> 禁用
			</label>
			<label>
				<uxt-radio classes="margin-sm" disabled></uxt-radio> 禁用
			</label>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="v-model绑定"></uxt-title-bar>
		<view class="bg-white padding-sm border-bottom flex flex-wrap">
			<label>
				<uxt-radio classes="margin-sm" v-model="checked" values="a"></uxt-radio> a
			</label>
			<label>
				<uxt-radio classes="margin-sm" v-model="checked" values="b"></uxt-radio> b
			</label>
			<label>
				<uxt-radio classes="margin-sm" v-model="checked" values="c"></uxt-radio> c
			</label>
			<label>
				<uxt-radio classes="margin-sm" v-model="checked" values="d"></uxt-radio> d
			</label>
		</view>
		<view class="bg-white padding-sm border-bottom text-center">
			{{checked}}
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtRadio from '@/uxt/components/uxt-radio.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtRadio
		},
		data() {
			return {
				title: '单选框',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown'],
				checked: ''
			};
		}
	};
</script>

<style>
</style>
