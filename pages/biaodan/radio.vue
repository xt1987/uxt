<template>
	<uxt-page :title="title">
		<uxt-title-bar classes="margin-top-sm solid-bottom" sub-title="size=sm/''" title="单选框大小"></uxt-title-bar>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio checked classes="margin-sm" label="默认"></uxt-radio>
			<uxt-radio checked classes="margin-sm" size="sm" label="sm"></uxt-radio>
		</view>
		<uxt-title-bar classes="margin-top-sm solid-bottom" sub-title="bg-color=[light-/gradual-]xx" title="单选框颜色"></uxt-title-bar>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio :bg-color="color" :key="color" classes="margin-sm" v-for="color in colors"></uxt-radio>
			<uxt-radio :bg-color="color" :key="color" classes="margin-sm" color="white" v-for="color in colors2"></uxt-radio>
		</view>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio :bg-color="`light-${color}`" :key="color" checked classes="margin-sm" v-for="color in colors"></uxt-radio>
		</view>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio :bg-color="`gradual-${color}`" :key="color" checked classes="margin-sm" v-for="color in colors"></uxt-radio>
		</view>
		<uxt-title-bar classes="margin-top-sm solid-bottom" sub-title="checked disabled" title="单选框状态"></uxt-title-bar>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio checked classes="margin-sm" label="选中"></uxt-radio>
			<uxt-radio classes="margin-sm" label="未选中"></uxt-radio>
			<uxt-radio checked classes="margin-sm" disabled label="禁用"></uxt-radio>
			<uxt-radio classes="margin-sm" disabled label="禁用"></uxt-radio>
		</view>
		<uxt-title-bar classes="margin-top-sm solid-bottom" sub-title="v-model=xx" title="v-model绑定"></uxt-title-bar>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio classes="margin-sm" v-model="checked" val="1" label="选项1"></uxt-radio>
			<uxt-radio classes="margin-sm" v-model="checked" val="2" label="选项2"></uxt-radio>
			<uxt-radio classes="margin-sm" v-model="checked" val="3" label="选项3"></uxt-radio>
			<uxt-radio classes="margin-sm" v-model="checked" val="4" label="选项4"></uxt-radio>
		</view>
		<view class="bg-white padding-sm solid-bottom text-center">{{ checked }}</view>
		<uxt-title-bar classes="margin-top-sm solid-bottom" sub-title="v-model=xx" title="单选框组"></uxt-title-bar>
		<view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-radio-group type="onlyicon" @change="handleGroupChange" v-model="checked">
				<uxt-radio classes="margin-sm" checked value="1" label="选项1"></uxt-radio>
				<uxt-radio classes="margin-sm" value="2" label="选项2"></uxt-radio>
				<uxt-radio classes="margin-sm" value="3" label="选项3"></uxt-radio>
				<uxt-radio classes="margin-sm" value="4" label="选项4"></uxt-radio>
			</uxt-radio-group>
		</view>
		<view class="bg-white padding-sm solid-bottom text-center">{{ checked }}</view>
	</uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtRadio from '@xtcoder/uxt/components/uxt-radio.vue'
import uxtRadioGroup from '@xtcoder/uxt/components/uxt-radio-group.vue'

export default {
	components: {
		uxtTitleBar,
		uxtRadio,
		uxtRadioGroup
	},
	data() {
		return {
			title: '单选框',
			colors: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown'],
			colors2: ['#f00', '#0f0', '#00f'],
			checked: '',
			cheked2: ''
		}
	},
	methods: {
		handleGroupChange(e) {
			this.checked = e
		}
	}
}
</script>

<style lang="scss" scoped></style>
