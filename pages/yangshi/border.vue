<template>
    <uxt-page :title="title">
		<uxt-bar-group title="设置">
			<uxt-selector
				title="样式"
				:items="styles"
				v-model="style"
			></uxt-selector>
			<uxt-selector
				title="位置"
				:items="positions"
				v-model="position"
			></uxt-selector>
			<uxt-bar
				title="颜色"
			>
				<template slot="right">
					<color-selector v-model="color" :diy="false"></color-selector>
				</template>
			</uxt-bar>
			<uxt-bar
				title="阴影"
			>
				<template slot="right">
					<uxt-radio v-model="shadow" label="无" size="sm" val="" type="btn"></uxt-radio>
					<uxt-radio classes="margin-lr-sm" v-model="shadow" label="shadow" size="sm" val="shadow" type="btn"></uxt-radio>
					<uxt-radio v-model="shadow" label="shadow-wrap" size="sm" val="shadow-wrap" type="btn"></uxt-radio>
				</template>
			</uxt-bar>
			<uxt-bar
				title="圆角"
			>
				<template slot="right">
					<uxt-radio v-model="radius" label="无" size="sm" val="" type="btn"></uxt-radio>
					<uxt-radio classes="margin-lr-sm" v-model="radius" label="小圆角" size="sm" val="radius" type="btn"></uxt-radio>
					<uxt-radio v-model="radius" label="大圆角" size="sm" val="round" type="btn"></uxt-radio>
				</template>
			</uxt-bar>
		</uxt-bar-group>
		<uxt-bar-group title="展示">
			<view class="padding bg-white">
				<view class="margin-sm padding-sm text-center" :class="[`${styles[style]}${positions[position].value}${color ? `-${color}` : ''}`, shadow, radius]">
					{{ `${styles[style]}${positions[position].value}${color ? `-${color}` : ''} ${shadow} ${radius}` }}
				</view>
			</view>
		</uxt-bar-group>
    </uxt-page>
</template>

<script>
import uxtBarGroup from '@xtcoder/uxt/components/uxt-bar-group.vue'
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtSelector from '@xtcoder/uxt/components/uxt-selector.vue'
import colorSelector from '@/components/color-selector.vue'
import uxtRadio from '@xtcoder/uxt/components/uxt-radio.vue'

export default {
    components: {
		uxtBarGroup,
        uxtBar,
		uxtSelector,
		colorSelector,
		uxtRadio
    },
    data() {
        return {
            theme: this.gTheme,
            title: '边框',
			styles: ['solid', 'solids', 'dashed', 'dasheds'],
			style: 0,
			positions: [{
				label: '全部',
				value: ''
			}, {
				label: '上',
				value: '-top'
			}, {
				label: '右',
				value: '-right'
			}, {
				label: '下',
				value: '-bottom'
			}, {
				label: '左',
				value: '-left'
			}],
			position: 0,
			color: '',
			shadow: '',
			radius: ''
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
