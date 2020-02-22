<template>
	<uxt-layout1 :title="title">
		<uxt-nav-bar>默认</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" :back="false">无返回按钮</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm">
			<template #left>返回</template>
			带返回文字说明
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" :back="false">
			<template #left>
				<view class="padding-sm inline-block">
					<uxt-icon type="home"></uxt-icon>
				</view>
				首页
			</template>
			自定义左侧内容
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" :back="false">
			<template #left>
				<view class="padding-sm inline-block">
					<uxt-icon type="close"></uxt-icon>
				</view>
				关闭
			</template>
			左侧关闭
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" :back="false">
			<template #left>
				<uxt-avatar classes="margin-left-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
				 round></uxt-avatar>
			</template>
			超长标题超长标题超长标题超长标题超长标题
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm">
			自定义右侧内容
			<template #right>
				右侧
				<view class="padding-sm inline-block">
					<uxt-icon type="more"></uxt-icon>
				</view>
			</template>
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" bgColor="blue">
			深色背景
			<template #right>
				深圳
				<view class="padding-xs inline-block">
					<uxt-icon type="triangledownfill"></uxt-icon>
				</view>
			</template>
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" bgColor="red light">
			浅色背景
			<template #right>
				<uxt-icon classes="margin-right-sm" type="cardboardfill" color="grey"></uxt-icon>
				<uxt-icon classes="margin-right-sm" type="recordfill" color="red"></uxt-icon>
			</template>
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" bgColor="gradual-pink">渐变背景</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" :back="false" bgColor="red" search>
			<template #left>
				<uxt-avatar classes="margin-left-sm" avatar="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
				 round></uxt-avatar>
			</template>
		</uxt-nav-bar>
		<uxt-nav-bar classes="margin-top-sm" :back="false" bgColor="cyan" :search="{shape: 'round', placeholder: '搜索图片、文章、视频'}">
			<template #right>
				<uxt-icon type="close"></uxt-icon>
				<view class="margin-right-sm">取消</view>
			</template>
		</uxt-nav-bar>
	</uxt-layout1>
</template>

<script>
	import uxtNavBar from '@/uxt/components/uxt-nav-bar.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';
	import uxtAvatar from '@/uxt/components/uxt-avatar.vue';
	import uxtInputBox from '@/uxt/components/uxt-input-box.vue';

	export default {
		components: {
			uxtNavBar,
			uxtIcon,
			uxtAvatar,
			uxtInputBox
		},
		data() {
			return {
				title: '顶部导航栏'
			};
		}
	};
</script>

<style>
</style>
