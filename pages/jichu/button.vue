<template>
    <uxt-page :title="title">
		<uxt-bar-group title="设置">
			<uxt-selector
				title="大小"
				desc="size"
				:items="sizes"
				v-model="size"
			></uxt-selector>
			<uxt-bar title="圆角" desc="radius | round">
				<template slot="right">
					<uxt-radio v-model="radius" label="无" size="sm" val="" type="btn"></uxt-radio>
					<uxt-radio classes="margin-lr-sm" v-model="radius" label="小圆角" size="sm" val="radius" type="btn"></uxt-radio>
					<uxt-radio v-model="radius" label="大圆角" size="sm" val="round" type="btn"></uxt-radio>
				</template>
			</uxt-bar>
			<uxt-bar
				title="镂空"
				desc="hollow=xx/颜色值"
			>
				<template slot="right">
					<color-selector v-model="hollow"></color-selector>
				</template>
			</uxt-bar>
			<uxt-bar
				title="颜色"
				desc="bg-color=xx/颜色值"
			>
				<template slot="right">
					<color-selector v-model="bgColor" light gradual @select="hollow=''"></color-selector>
				</template>
			</uxt-bar>
			<uxt-bar
				title="阴影"
				desc="shadow=xx/颜色值"
			>
				<template slot="right">
					<color-selector v-model="shadow"></color-selector>
				</template>
			</uxt-bar>
			<uxt-bar
				title="禁用"
				desc="disabled"
			>
				<template slot="right">
					<uxt-switch v-model="disabled" radius size="sm"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="图标"
				desc="disabled"
			>
				<template slot="right">
					<uxt-switch v-model="icon" radius size="sm"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar title="事件" desc="详情请查看控制台">
				<template slot="right">
					<text @click="events = ''">清空</text>
				</template>
			</uxt-bar>
			<view class="padding bg-white" v-html="events" style="height: 200rpx; overflow-y: auto;">
			</view>
		</uxt-bar-group>
		<uxt-bar-group title="展示">
			<view class="padding bg-white text-center">
				<uxt-button
					:size="sizes[size].value"
					:round="radius==='round'"
					:radius="radius==='radius'"
					:hollow="hollow"
					:bg-color="bgColor"
					:shadow="shadow"
					:disabled="disabled"
					data-a="通过data-协带的数据"
					@click="handleClick"
				>
					<uxt-icon
						animation="spin"
						type="loading9"
						v-if="icon"
					></uxt-icon>
					uxt-button
				</uxt-button>
			</view>
		</uxt-bar-group>
    </uxt-page>
</template>

<script>
import uxtBarGroup from '@xtcoder/uxt/components/uxt-bar-group.vue'
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtButton from '@xtcoder/uxt/components/uxt-button.vue'
import uxtIcon from '@xtcoder/uxt/components/uxt-icon.vue'
import colorSelector from '@/components/color-selector.vue'
import uxtSelector from '@xtcoder/uxt/components/uxt-selector.vue'
import uxtRadio from '@xtcoder/uxt/components/uxt-radio.vue'
import uxtSwitch from '@xtcoder/uxt/components/uxt-switch.vue'

export default {
    components: {
        uxtBarGroup,
        uxtButton,
        uxtIcon,
		uxtBar,
		colorSelector,
		uxtSelector,
		uxtRadio,
		uxtSwitch
    },
    data() {
        return {
            title: '按钮',
			sizes: [{
				label: '小',
				value: 'sm'
			}, {
				label: '默认',
				value: ''
			}, {
				label: '大',
				value: 'lg'
			}, {
				label: '块状',
				value: 'block'
			}],
			size: 3,
			radius: '',
			bgColor: 'theme',
			hollow: '',
			shadow: '',
			disabled: false,
			icon: false,
			events: ''
        }
    },
	methods: {
		handleClick(e) {
			console.log(e)
			this.events += `${e.type}<br />dataset: ${JSON.stringify(e.currentTarget.dataset)}<br />`
		}
	}
}
</script>

<style lang="scss" scoped>
.a {
    margin-left: 20rpx;
}
</style>
