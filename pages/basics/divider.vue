<template>
	<uxt-layout1 :title="title">
		<uxt-title-bar classes="margin-top-sm border-bottom" title="有/无文字"></uxt-title-bar>
		<view class="bg-white">
			<uxt-divider>分隔线</uxt-divider>
			<uxt-divider></uxt-divider>
		</view>
		<uxt-title-bar classes="margin-top-sm border-bottom" title="分隔线颜色" subTitle="bgColor=xx/颜色值"></uxt-title-bar>
		<view class="bg-white">
			<uxt-divider bgColor="df">df</uxt-divider>
			<view>
				<uxt-divider v-for="(color, index) in colors" :key="index" :bgColor="color" :color="color">{{color}}</uxt-divider>
			</view>
			<uxt-divider bgColor="df" light>df</uxt-divider>
			<view>
				<block v-for="(color, index) in colors" :key="index">
					<uxt-divider v-if="index < colors.length - 3" :bgColor="color" light :color="color">{{color}}</uxt-divider>
				</block>
			</view>
			<uxt-divider bgColor="df" gradual>df</uxt-divider>
			<view>
				<block v-for="(color, index) in colors" :key="index">
					<uxt-divider v-if="index < colors.length - 3" :bgColor="color" gradual :color="color">{{color}}</uxt-divider>
				</block>
			</view>
			<view>
				<uxt-divider v-for="(color, index) in colors2" :key="index" :bgColor="color" :color="color">{{color}}</uxt-divider>
			</view>
		</view>
	</uxt-layout1>
</template>

<script>
	import uxtTitleBar from '@/uxt/components/uxt-title-bar.vue';
	import uxtDivider from '@/uxt/components/uxt-divider.vue';

	export default {
		components: {
			uxtTitleBar,
			uxtDivider
		},
		data() {
			return {
				title: '分隔线',
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
