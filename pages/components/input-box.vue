<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="大小" subTitle="size=df/lg/xl"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="默认"></uxt-input-box>
			<uxt-input-box classes="margin-top-sm" placeholder="大lg" size="lg"></uxt-input-box>
			<uxt-input-box classes="margin-top-sm" placeholder="超大xl" size="xl"></uxt-input-box>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="形状" subTitle="radius/round"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="radius" size="lg" radius></uxt-input-box>
			<uxt-input-box classes="margin-top-sm" placeholder="round" size="lg" round></uxt-input-box>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="边框颜色" subTitle="borderColor=xx/颜色值"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="borderColor=red" size="lg" round borderColor="red"></uxt-input-box>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="背景颜色" subTitle="bgColor"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="背景" size="lg" round bgColor="blue light"></uxt-input-box>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="左侧内容" subTitle="left slot"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="left slot" size="lg" radius>
				<template #left>
					<view class="margin-left-xs">姓名：</view>
				</template>
			</uxt-input-box>
			<uxt-input-box classes="margin-top-sm" placeholder="left slot" size="lg" round>
				<template #left>
					<uxt-icon classes="margin-left-xs" type="search"></uxt-icon>
				</template>
			</uxt-input-box>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="右侧内容" subTitle="right slot"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="right slot" size="lg" radius>
				<template #left>
					<view class="bg-gray padding-lr-sm flex align-center radius-left border-right" style="height: 66rpx;">http://www.</view>
				</template>
				<template #right>
					<view class="margin-right-xs">.com</view>
				</template>
			</uxt-input-box>
			<uxt-input-box classes="margin-top-sm" placeholder="right slot" size="lg" round>
				<template #right>
					<uxt-icon classes="margin-right-xs" type="search"></uxt-icon>
				</template>
			</uxt-input-box>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="双向绑定" subTitle="v-model"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" placeholder="v-model" size="lg" round v-model="val" clearable>
			</uxt-input-box>
			<view class="padding-sm">{{val}}</view>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="输入类型" subTitle="radius/round"></uxt-title-bar>
		<view class="bg-white padding-sm">
			<uxt-input-box classes="margin-top-sm" type="password" placeholder="password" size="lg" round>
			</uxt-input-box>
			<uxt-input-box classes="margin-top-sm" type="number" placeholder="number" size="lg" round>
			</uxt-input-box>
			<!-- #ifdef MP -->
			<uxt-input-box classes="margin-top-sm" type="idcard" placeholder="idcard" size="lg" round>
			</uxt-input-box>
			<uxt-input-box classes="margin-top-sm" type="digit" placeholder="digit" size="lg" round>
			</uxt-input-box>
			<!-- #endif -->
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtInputBox from '@/uxt/components/uxt-input-box.vue';
	import uxtIcon from '@/uxt/components/uxt-icon.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtInputBox,
			uxtIcon
		},
		data() {
			return {
				title: '输入框',
				val: ''
			};
		}
	};
</script>

<style>
</style>
