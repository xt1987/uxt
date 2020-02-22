<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="深色背景" subTitle="bg-xx"></uxt-title-bar>
		<view class="grid col-3 padding-sm">
			<view class="padding-sm" v-for="(item, index) in colors" :key="index">
				<view class="padding radius text-center" :class="[`bg-${item}`]">{{item}}</view>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="浅色背景" subTitle="light bg-xx"></uxt-title-bar>
		<view class="grid col-3 padding-sm bg-white">
			<block v-for="(item, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-sm">
					<view class="padding radius text-center light" :class="[`bg-${item}`]">{{item}}</view>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="渐变背景" subTitle="bg-gradual-xx"></uxt-title-bar>
		<view class="grid col-2 padding-sm">
			<block v-for="(item, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-sm">
					<view class="padding radius text-center" :class="[`bg-gradual-${item}`]">{{item}}</view>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="背景阴影" subTitle="shadow bg-xx"></uxt-title-bar>
		<view class="padding bg-white">
			<view class="margin-sm padding-sm text-center shadow bg-green radius">shadow bg-green</view>
			<view class="margin-sm padding-sm text-center shadow bg-blue radius">shadow bg-blue</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="图片背景" subTitle="bg-img[ bg-mask]"></uxt-title-bar>
		<view class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414rpx;">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					钢铁之翼
				</view>
				<view class="padding-xs text-lg">
					Only the guilty need fear me.
				</view>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="视频背景" subTitle="bg-video[ bg-mask]"></uxt-title-bar>
		<view class="bg-video bg-mask flex align-center" style="height: 422rpx;">
			<video src="https://yz.lol.qq.com/v1/assets/videos/aatrox-splashvideo.webm" autoplay loop muted :show-play-btn="false"
			 :controls="false" objectFit="cover"></video>
			<cover-view class="padding-xl text-white ">
				<cover-view class="padding-xs  text-xxl text-bold">
					暗裔剑魔
				</cover-view>
				<cover-view class="padding-xs">
					我必须连同希望一起毁坏……
				</cover-view>
			</cover-view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="透明背景(文字层)" subTitle="bg-shadeTop/bg-shadeBottom"></uxt-title-bar>
		<view class="grid col-2">
			<view class="bg-img padding-bottom-xl" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 207upx;">
				<view class="bg-shadeTop padding padding-bottom-xl">
					上面开始
				</view>
			</view>
			<view class="bg-img padding-top-xl flex align-end" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 207upx;">
				<view class="bg-shadeBottom padding padding-top-xl flex-sub">
					下面开始
				</view>
			</view>
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
				title: '背景',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey',
					'gray', 'black', 'white'
				]
			};
		}
	};
</script>

<style>
</style>
