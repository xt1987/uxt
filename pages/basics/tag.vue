<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="标签大小" subTitle="size=sm"></uxt-title-bar>
		<view class="bg-white padding">
			<uxt-tag size="sm">sm</uxt-tag>
			<uxt-tag classes="margin-left">默认</uxt-tag>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="标签形状" subTitle="radius/round"></uxt-title-bar>
		<view class="bg-white padding">
			<uxt-tag>默认</uxt-tag>
			<uxt-tag classes="margin-left" radius>radius</uxt-tag>
			<uxt-tag classes="margin-left" round>round</uxt-tag>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="深色标签" subTitle="bgColor=xx/颜色值"></uxt-title-bar>
		<view class="bg-white padding grid col-5">
			<view class="padding-xs">
				<uxt-tag radius>df</uxt-tag>
			</view>
			<view v-for="color in colors" :key="color" class="padding-xs">
				<uxt-tag radius :bgColor="color">{{color}}</uxt-tag>
			</view>
			<view v-for="color in colors2" :key="color" class="padding-xs">
				<uxt-tag radius :bgColor="color" color="white">{{color}}</uxt-tag>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="浅色标签" subTitle="bgColor=xx light"></uxt-title-bar>
		<view class="bg-white padding grid col-5">
			<view class="padding-xs">
				<uxt-tag round light>df</uxt-tag>
			</view>
			<block v-for="(color, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-xs">
					<uxt-tag round :bgColor="color" light>{{color}}</uxt-tag>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="渐变标签" subTitle="bgColor=xx gradual"></uxt-title-bar>
		<view class="bg-white padding grid col-5">
			<view class="padding-xs">
				<uxt-tag gradual>df</uxt-tag>
			</view>
			<block v-for="(color, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-xs">
					<uxt-tag :bgColor="color" gradual>{{color}}</uxt-tag>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="镂空标签" subTitle="hollow=border[s] color=xx/颜色值"></uxt-title-bar>
		<view class="padding grid col-5">
			<view class="padding-xs">
				<uxt-tag color="df" hollow="border">border</uxt-tag>
			</view>
			<view class="padding-xs">
				<uxt-tag color="df" hollow="border" radius>border</uxt-tag>
			</view>
			<view class="padding-xs">
				<uxt-tag color="df" hollow="border" round>border</uxt-tag>
			</view>
			<view class="padding-xs">
				<uxt-tag color="df" hollow="borders">borders</uxt-tag>
			</view>
			<view class="padding-xs">
				<uxt-tag color="df" hollow="borders" radius>borders</uxt-tag>
			</view>
			<view class="padding-xs">
				<uxt-tag color="df" hollow="borders" round>borders</uxt-tag>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="胶囊标签" subTitle="capsule=iconObj/文字"></uxt-title-bar>
		<view class="bg-white padding">
			<view>
				<uxt-tag :capsule="{type: 'likefill'}">12</uxt-tag>
				<uxt-tag classes="margin-left" :capsule="{type: 'likefill'}" radius>12</uxt-tag>
				<uxt-tag classes="margin-left" capsule="说明" round>12</uxt-tag>
			</view>
			<view class="margin-top">
				<uxt-tag :capsule="{type: 'likefill'}" size="sm">12</uxt-tag>
				<uxt-tag classes="margin-left" :capsule="{type: 'likefill'}" radius size="sm">12</uxt-tag>
				<uxt-tag classes="margin-left" capsule="说明" round size="sm">12</uxt-tag>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="角标" subTitle="uxt-badge"></uxt-title-bar>
		<view class="flex justify-around padding bg-white">
			<uxt-badge v-for="(item, index) in [1, 2, 3]" :key="index" classes="bg-blue padding-xl" :badge="item.toString()"></uxt-badge>
			<uxt-badge classes="bg-blue padding-xl" badge="-"></uxt-badge>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtTag from '@/uxt/components/uxt-tag.vue';
	import uxtBadge from '@/uxt/components/uxt-badge.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtTag,
			uxtBadge
		},
		data() {
			return {
				title: '标签',
				colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey',
					'gray', 'black', 'white'
				],
				colors2: ['#ff0000', '#00ff00', '#0000ff']
			};
		}
	};
</script>

<style>
</style>
