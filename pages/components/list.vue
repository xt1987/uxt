<template>
	<uxt-layout1 :title="title">
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
