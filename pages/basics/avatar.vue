<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="头像大小" subTitle="size=sm/lg/xl"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" size="sm">sm</uxt-avatar>
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg">df</uxt-avatar>
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" size="lg">lg</uxt-avatar>
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" size="xl">xl</uxt-avatar>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="头像形状" subTitle="radius/round"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"></uxt-avatar>
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" radius></uxt-avatar>
			<uxt-avatar class="margin-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round></uxt-avatar>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="内嵌图标/文字"></uxt-title-bar>
		<view class="padding bg-white">
			<uxt-avatar class="margin-sm" radius>
				<uxt-icon type="people"></uxt-icon>
			</uxt-avatar>
			<uxt-avatar class="margin-sm" radius>港</uxt-avatar>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="深色头像" subTitle="bgColor=xx/颜色值"></uxt-title-bar>
		<view class="bg-white padding grid col-5">
			<view class="padding-xs">
				<uxt-avatar>深</uxt-avatar>
			</view>
			<view v-for="color in colors" :key="color" class="padding-xs">
				<uxt-avatar :bgColor="color">深</uxt-avatar>
			</view>
			<view v-for="color in colors2" :key="color" class="padding-xs">
				<uxt-avatar :bgColor="color" color="white">深</uxt-avatar>
			</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="浅色头像" subTitle="bgColor=xx light"></uxt-title-bar>
		<view class="bg-white padding grid col-5">
			<view class="padding-xs">
				<uxt-avatar radius light>浅</uxt-avatar>
			</view>
			<block v-for="(color, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-xs">
					<uxt-avatar radius :bgColor="color" light>浅</uxt-avatar>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="渐变头像" subTitle="bgColor=xx gradual"></uxt-title-bar>
		<view class="bg-white padding grid col-5">
			<view class="padding-xs">
				<uxt-avatar round gradual>渐</uxt-avatar>
			</view>
			<block v-for="(color, index) in colors" :key="index">
				<view v-if="index < colors.length - 3" class="padding-xs">
					<uxt-avatar round :bgColor="color" gradual>渐</uxt-avatar>
				</view>
			</block>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="头像组" subTitle="uxt-avatar-group"></uxt-title-bar>
		<view class="bg-white padding">
			<uxt-avatar-group size="sm">
				<uxt-avatar v-for="i in 4" :key="i" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round
				 size="sm"></uxt-avatar>
			</uxt-avatar-group>
			<uxt-avatar-group>
				<uxt-avatar v-for="i in 4" :key="i" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round></uxt-avatar>
			</uxt-avatar-group>
			<uxt-avatar-group size="lg">
				<uxt-avatar v-for="i in 4" :key="i" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round
				 size="lg"></uxt-avatar>
			</uxt-avatar-group>
			<uxt-avatar-group size="xl">
				<uxt-avatar v-for="i in 4" :key="i" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round
				 size="xl"></uxt-avatar>
			</uxt-avatar-group>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="头像标签" subTitle="uxt-badge"></uxt-title-bar>
		<view class="bg-white padding flex align-center">
			<uxt-badge class="margin-sm">
				<template #badge>
					<uxt-icon type="male" round bgColor="pink"></uxt-icon>
				</template>
				<uxt-avatar avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" size="sm" round></uxt-avatar>
			</uxt-badge>
			<uxt-badge class="margin-sm">
				<template #badge>
					<uxt-icon type="female" round bgColor="blue"></uxt-icon>
				</template>
				<uxt-avatar avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" round></uxt-avatar>
			</uxt-badge>
			<uxt-badge class="margin-sm">
				<template #badge>
					<uxt-icon type="male" round bgColor="pink"></uxt-icon>
				</template>
				<uxt-avatar avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" size="lg" round></uxt-avatar>
			</uxt-badge>
			<uxt-badge class="margin-sm">
				<template #badge>
					<uxt-icon type="female" round bgColor="blue"></uxt-icon>
				</template>
				<uxt-avatar avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" size="xl" round></uxt-avatar>
			</uxt-badge>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtAvatar from '@/uxt/components/uxt-avatar.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';
	import uxtAvatarGroup from '@/uxt/components/uxt-avatar-group.vue';
	import uxtBadge from '@/uxt/components/uxt-badge.vue';
	import uxtTag from '@/uxt/components/uxt-tag.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtAvatar,
			uxtIcon,
			uxtAvatarGroup,
			uxtBadge,
			uxtTag
		},
		data() {
			return {
				title: '头像',
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
