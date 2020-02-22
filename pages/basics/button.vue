<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="按钮大小" subTitle="size=sm/lg/block"></uxt-title-bar>
		<view class="bg-white padding">
			<uxt-button size="sm">sm</uxt-button>
			<uxt-button classes="margin-left">默认</uxt-button>
			<uxt-button classes="margin-left" size="lg">lg</uxt-button>
			<uxt-button classes="margin-top" size="block">block</uxt-button>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="按钮形状" subTitle="radius/round"></uxt-title-bar>
		<view class="bg-white padding">
			<uxt-button>默认</uxt-button>
			<uxt-button classes="margin-left" radius>radius</uxt-button>
			<uxt-button classes="margin-left" round>round</uxt-button>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="深色按钮" subTitle="bgColor=xx/颜色值"></uxt-title-bar>
		<view class="padding text-center grid col-3">
			<view class="padding-sm">
				<uxt-button size="block">df</uxt-button>
			</view>
			<view v-for="color in colors" :key="color" class="padding-sm">
				<uxt-button size="block" :bgColor="color">{{color}}</uxt-button>
			</view>
			<view v-for="color in colors2" :key="color" class="padding-sm">
				<uxt-button size="block" :bgColor="color" color="white">{{color}}</uxt-button>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="浅色按钮" subTitle="bgColor=xx light"></uxt-title-bar>
		<view class="padding text-center grid col-3">
			<view class="padding-sm">
				<uxt-button size="block" light radius>df</uxt-button>
			</view>
			<view v-for="(color, index) in colors" :key="index" class="padding-sm">
				<uxt-button size="block" :bgColor="color" light radius>{{color}}</uxt-button>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="渐变按钮" subTitle="bgColor=xx gradual"></uxt-title-bar>
		<view class="padding grid col-3 text-center">
			<view class="padding-sm">
				<uxt-button size="block" gradual round>df</uxt-button>
			</view>
			<block v-for="(color, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-sm">
					<uxt-button size="block" :bgColor="color" gradual round>{{color}}</uxt-button>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="镂空按钮" subTitle="hollow=border[s] color=xx/颜色值"></uxt-title-bar>
		<view class="padding text-center grid col-3">
			<view class="padding-sm">
				<uxt-button size="block" color="df" hollow="border">border</uxt-button>
			</view>
			<view class="padding-sm">
				<uxt-button size="block" color="df" hollow="border" radius>border</uxt-button>
			</view>
			<view class="padding-sm">
				<uxt-button size="block" color="df" hollow="border" round>border</uxt-button>
			</view>
			<view class="padding-sm">
				<uxt-button size="block" color="df" hollow="borders">borders</uxt-button>
			</view>
			<view class="padding-sm">
				<uxt-button size="block" color="df" hollow="borders" radius>borders</uxt-button>
			</view>
			<view class="padding-sm">
				<uxt-button size="block" color="df" hollow="borders" round>borders</uxt-button>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="按钮阴影" subTitle="shadow"></uxt-title-bar>
		<view class="padding text-center grid col-3">
			<view class="padding-sm">
				<uxt-button size="block" shadow radius>df</uxt-button>
			</view>
			<view v-for="color in colors" :key="color" class="padding-sm">
				<uxt-button size="block" shadow radius :bgColor="color">{{color}}</uxt-button>
			</view>
			<view v-for="color in colors2" :key="color" class="padding-sm">
				<uxt-button size="block" shadow radius :bgColor="color" color="white">{{color}}</uxt-button>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="禁用按钮" subTitle="disabled"></uxt-title-bar>
		<view class="padding">
			<uxt-button size="block" disabled round>disabled</uxt-button>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="图标按钮"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-button size="block" hollow="border" color="orange">
				<uxt-icon type="upload"></uxt-icon>
				upload
			</uxt-button>
			<uxt-button classes="margin-top" size="block" bgColor="blue" radius>
				<uxt-icon type="loading" animation="spin"></uxt-icon>
				loading
			</uxt-button>
			<uxt-button classes="margin-top" size="block" bgColor="green" round>
				<uxt-icon type="loading2" animation="pulse"></uxt-icon>
				loading2
			</uxt-button>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtButton from '@/uxt/components/uxt-button.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtButton,
			uxtIcon
		},
		data() {
			return {
				title: '按钮',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey',
					'gray', 'black', 'white'
				],
				colors2: ['#ff0000', '#00ff00', '#0000ff']
			};
		}
	};
</script>

<style>
	.a {
		margin-left: 20rpx;
	}
</style>
