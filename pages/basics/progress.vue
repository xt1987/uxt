<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度条大小" subTitle="size=sm/xs"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60"></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" size="sm"></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" size="xs"></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度条形状" subTitle="radius/round"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60"></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" radius></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" round></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="深色进度条" subTitle="bgColor=xx/颜色值"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60"></uxt-progress>
			<uxt-progress classes="margin-top-sm" v-for="color in colors" :key="color" :loading="60" :bgColor="color"></uxt-progress>
			<uxt-progress classes="margin-top-sm" v-for="color in colors2" :key="color" :loading="60" :bgColor="color" color="white"></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="浅色进度条" subTitle="bgColor=xx light"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60" light radius></uxt-progress>
			<uxt-progress classes="margin-top-sm" v-for="(color, index) in colors" :key="index" :loading="60" :bgColor="color"
			 light radius></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="渐变进度条" subTitle="bgColor=xx gradual"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60" gradual round></uxt-progress>
			<uxt-progress classes="margin-top-sm" v-for="(color, index) in colors" :key="index" :loading="60" :bgColor="color"
			 gradual round></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度条条纹" subTitle="striped=true"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60" striped bgColor="red"></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" striped bgColor="green" radius></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" striped bgColor="blue" round></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度条动画条纹" subTitle="animation=true"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress :loading="60" striped animation bgColor="red"></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" striped animation bgColor="green" radius></uxt-progress>
			<uxt-progress classes="margin-top-sm" :loading="60" striped animation bgColor="blue" round></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度条组" subTitle="progressGroup"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-progress striped animation :progressGroup="[
					{bgColor: 'red', loading: 30}, 
					{bgColor: 'green', loading: 30}, 
					{bgColor: 'blue', loading: 40}
				]"></uxt-progress>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度条布局" subTitle=""></uxt-title-bar>
		<view class="padding bg-white">
			<view class="flex">
				<uxt-progress class="flex-sub" :loading="60" round></uxt-progress>
				<uxt-icon class="margin-left-sm" type="roundcheck" round :bgColor="theme"></uxt-icon>
			</view>
			<view class="flex margin-top-sm">
				<uxt-progress class="flex-sub" :loading="60" :showLoading="false" round></uxt-progress>
				<view class="margin-left-sm">60%</view>
			</view>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtProgress from '@/uxt/components/uxt-progress.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtProgress,
			uxtIcon
		},
		data() {
			return {
				title: '进度条',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey'],
				colors2: ['#ff0000', '#00ff00', '#0000ff']
			};
		},
		computed: {
			theme() {
				return this.$store.state.uxtStore.theme;
			}
		}
	};
</script>

<style>
</style>
