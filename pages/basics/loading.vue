<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="深色背景" subTitle="bgColor=xx"></uxt-title-bar>
		<view>
			<uxt-loading classes="margin-top-sm" state="load"></uxt-loading>
			<uxt-loading classes="margin-top-sm" v-for="color in colors" :key="color" :bgColor="color" state="load"></uxt-loading>
			<uxt-loading classes="margin-top-sm" v-for="color in colors2" :key="color" :bgColor="color" color="white" state="load"></uxt-loading>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="浅色背景" subTitle="bgColor=xx light"></uxt-title-bar>
		<view>
			<uxt-loading classes="margin-top-sm" state="load" light></uxt-loading>
			<block v-for="(color, index) in colors" :key="index">
				<uxt-loading v-if="index < colors.length - 3" classes="margin-top-sm" :bgColor="color" light state="load"></uxt-loading>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="渐变背景" subTitle="bgColor=xx gradual"></uxt-title-bar>
		<view>
			<uxt-loading classes="margin-top-sm" state="load" gradual></uxt-loading>
			<block v-for="(color, index) in colors" :key="index">
				<uxt-loading v-if="index < colors.length - 3" classes="margin-top-sm" :bgColor="color" gradual state="load"></uxt-loading>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="状态" subTitle="state=load/over/error"></uxt-title-bar>
		<view>
			<uxt-loading classes="margin-top-sm" bgColor="green" state="load"></uxt-loading>
			<uxt-loading classes="margin-top-sm" bgColor="blue" state="over"></uxt-loading>
			<uxt-loading classes="margin-top-sm" state="error"></uxt-loading>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="模态加载框" subTitle="modal"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-button radius @click="showModal" size="block">modal</uxt-button>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="进度加载框" subTitle="progress"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-button radius @click="showProgress" size="block">progress</uxt-button>
		</view>
		<uxt-loading modal :state="modalState"></uxt-loading>
		<uxt-loading progress :state="progressState"></uxt-loading>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtLoading from '@/uxt/components/uxt-loading.vue';
	import uxtButton from '@/uxt/components/uxt-button.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtLoading,
			uxtButton
		},
		data() {
			return {
				title: '加载',
				modalState: 'over',
				progressState: 'over',
				colors: ['orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey',
					'gray', 'black', 'white'
				],
				colors2: ['#ff0000', '#00ff00', '#0000ff']
			};
		},
		methods: {
			showModal() {
				const that = this;
				that.modalState = 'load';
				setTimeout(() => {
					that.modalState = 'over';
				}, 5000);
			},
			showProgress() {
				const that = this;
				that.progressState = 'load';
				setTimeout(() => {
					that.progressState = 'over';
				}, 2000);
			}
		}
	};
</script>

<style>
</style>
