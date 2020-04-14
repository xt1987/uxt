<template>
    <uxt-page :title="title">
		<uxt-bar-group title="设置">
			<uxt-bar
				desc="arrow"
				title="箭头"
			>
				<template slot="right">
					<uxt-switch v-model="arrow" size="sm" radius></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				desc="icon=uxtIcon.type | Object<uxtIcon>"
				title="图标"
			>
				<template slot="right">
					<uxt-switch size="sm" @change="handleChange($event, 'icon', {type: 'wechat-square-fill', color: 'green'})" radius></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				desc="url=xx"
				title="页面跳转"
			>
				<template slot="right">
					<uxt-switch size="sm" @change="handleChange($event, 'url', '/')" radius></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar title="插槽" desc="left | right">
				<template slot="right">
					<uxt-checkbox v-model="leftSlot" label="左插槽" size="sm"></uxt-checkbox>
					<uxt-checkbox classes="margin-left-sm" v-model="rightSlot" label="右插槽" size="sm"></uxt-checkbox>
				</template>
			</uxt-bar>
			<uxt-bar
				desc="bg-color=xx/颜色值"
				title="背景"
			>
				<template slot="right">
					<color-selector v-model="bgColor" light gradual></color-selector>
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
			<uxt-bar
				desc="描述信息"
				title="标题"
				content="内容"
				:arrow="arrow"
                :icon="icon"
                :url="url"
                :bg-color="bgColor"
				data-a="通过data-协带的数据"
				@click="handleClick"
			>
                <template slot="left">
					<uxt-tag v-if="leftSlot" bg-color="theme" size="sm" radius>left slot</uxt-tag>
                </template>
                <template slot="right">
					<uxt-tag v-if="rightSlot" bg-color="theme" size="sm" radius>right slot</uxt-tag>
                </template>
			</uxt-bar>
        </uxt-bar-group>
        <uxt-bar-group classes="margin-top-sm" title="通栏组">
            <template slot="left">
				<uxt-tag v-if="leftSlot" bg-color="theme" size="sm" radius>left slot</uxt-tag>
            </template>
            <template slot="right">
				<uxt-tag v-if="rightSlot" bg-color="theme" size="sm" radius>right slot</uxt-tag>
            </template>
			<uxt-bar
				desc="描述信息1"
				title="通栏1"
				content="内容1"
			>
			</uxt-bar>
			<uxt-bar
				desc="描述信息2"
				title="通栏2"
				content="内容2"
			>
			</uxt-bar>
        </uxt-bar-group>
    </uxt-page>
</template>

<script>
import uxtBarGroup from '@xtcoder/uxt/components/uxt-bar-group.vue'
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtTag from '@xtcoder/uxt/components/uxt-tag.vue'
import colorSelector from '@/components/color-selector.vue'
import uxtCheckbox from '@xtcoder/uxt/components/uxt-checkbox.vue'
import uxtSwitch from '@xtcoder/uxt/components/uxt-switch.vue'

export default {
    components: {
        uxtBarGroup,
        uxtBar,
        uxtTag,
		colorSelector,
		uxtCheckbox,
		uxtSwitch
    },
    data() {
        return {
            title: '单元格',
			bgColor: 'white',
			arrow: false,
			icon: '',
			url: '',
			leftSlot: false,
			rightSlot: false,
			events: ''
        }
    },
	methods: {
		handleChange(check, field, value) {
			if (check) {
				this[field] = value
			} else {
				this[field] = ''
			}
		},
		handleClick(e) {
			console.log(e)
			this.events += `${e.type}<br />dataset: ${JSON.stringify(e.currentTarget.dataset)}<br />`
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
