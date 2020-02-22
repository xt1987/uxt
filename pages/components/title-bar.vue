<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm" title="默认标题"></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="标题图标" :icon="{type: 'home', color: 'red'}"></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="标题文字大小" titleSize="xl"></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="加粗标题" titleBold></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="主标题" subTitle="副标题"></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="标题" enTitle="title"></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="下划线" underline underlineColor="red"></uxt-title-bar>
		<uxt-title-bar classes="margin-top-sm" title="阴影" shadow color="blue"></uxt-title-bar>
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
				title: '标题栏'
			};
		}
	};
</script>

<style>
</style>
