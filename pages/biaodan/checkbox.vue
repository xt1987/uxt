<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="size=sm"
            title="复选框大小"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                checked
                classes="margin-sm"
				label="默认"
            ></uxt-checkbox>
            <uxt-checkbox
                checked
                classes="margin-sm"
                size="sm"
				label="sm"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="label-position=left/right,默认right"
            title="标签位置"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                checked
                classes="margin-sm"
				label-position="left"
				label="左"
            ></uxt-checkbox>
            <uxt-checkbox
                checked
                classes="margin-sm"
				label="右"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="width"
            title="宽度"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                checked
                classes="padding-sm solid-bottom"
				width="100%"
				label="选项1"
				label-position="left"
            ></uxt-checkbox>
            <uxt-checkbox
                checked
				width="100%"
                classes="padding-sm"
				label="选项2"
				label-position="left"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="bg-color=[light-/gradual-]xx"
            title="复选框颜色"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                :bg-color="color"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-checkbox>
            <uxt-checkbox
                :bg-color="color"
                :key="color"
                checked
                classes="margin-sm"
                color="white"
                v-for="color in colors2"
            ></uxt-checkbox>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                :bg-color="`light-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-checkbox>
        </view>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                :bg-color="`gradual-${color}`"
                :key="color"
                checked
                classes="margin-sm"
                v-for="color in colors"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="checked disabled"
            title="复选框状态"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                checked
                classes="margin-sm"
				label="选中"
            ></uxt-checkbox>
            <uxt-checkbox
				classes="margin-sm"
				label="未选中"
			></uxt-checkbox>
            <uxt-checkbox
                checked
                classes="margin-sm"
                disabled
				label="禁用"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="margin-sm"
                disabled
				label="禁用"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="v-model=xx"
            title="v-model绑定(单个)"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                classes="margin-sm"
                v-model="checked"
				:label="checked.toString()"
            ></uxt-checkbox>
            <uxt-checkbox
                :checked="checked"
                classes="margin-sm"
                disabled
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="v-model=xx"
            title="v-model绑定(多个)"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                classes="margin-sm"
                v-model="checkeds"
                val="1"
				label="选项1"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="margin-sm"
                v-model="checkeds"
                val="2"
				label="选项2"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="margin-sm"
                v-model="checkeds"
                val="3"
				label="选项3"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="margin-sm"
                v-model="checkeds"
                val="4"
				label="选项4"
            ></uxt-checkbox>
        </view>
        <view class="bg-white padding-sm solid-bottom text-center">{{JSON.stringify(checkeds)}}</view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            sub-title="checked disabled"
            title="其它类型"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
            <uxt-checkbox
                checked
                classes="padding-sm solid-bottom"
				width="100%"
				type="hollow"
				label="hollow"
				label-position="left"
            ></uxt-checkbox>
            <uxt-checkbox
                checked
                classes="padding-sm solid-bottom"
				width="100%"
				color="theme"
				type="onlyicon"
				label="onlyicon"
				label-position="left"
            ></uxt-checkbox>
            <uxt-checkbox
                checked
                classes="padding-sm"
				type="btn"
				label="选项1"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="padding-sm"
				type="btn"
				label="选项2"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="padding-sm"
				type="btn"
				label="选项3"
            ></uxt-checkbox>
            <uxt-checkbox
                classes="padding-sm"
				type="btn"
				label="选项4"
            ></uxt-checkbox>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="复选框组"
        ></uxt-title-bar>
        <view class="bg-white padding-sm solid-bottom flex flex-wrap">
			<uxt-checkbox-group @change="handleGroupChange" v-model="checkeds">
				<uxt-checkbox
					classes="margin-sm"
					value="1"
					label="选项1"
				></uxt-checkbox>
				<uxt-checkbox
					classes="margin-sm"
					value="2"
					label="选项2"
				></uxt-checkbox>
				<uxt-checkbox
					classes="margin-sm"
					value="3"
					label="选项3"
				></uxt-checkbox>
				<uxt-checkbox
					classes="margin-sm"
					value="4"
					checked
					label="选项4"
				></uxt-checkbox>
			</uxt-checkbox-group>
        </view>
        <view class="bg-white padding-sm solid-bottom text-center">{{JSON.stringify(checkeds2)}}</view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtCheckbox from '@xtcoder/uxt/components/uxt-checkbox.vue'
import uxtCheckboxGroup from '@xtcoder/uxt/components/uxt-checkbox-group.vue'

export default {
    components: {
        uxtTitleBar,
        uxtCheckbox,
		uxtCheckboxGroup
    },
    data() {
        return {
            title: '复选框',
            colors: [
                'red',
                'orange',
                'yellow',
                'olive',
                'green',
                'cyan',
                'blue',
                'purple',
                'mauve',
                'pink',
                'brown'
            ],
            colors2: ['#f00', '#0f0', '#00f'],
            checked: true,
            checkeds: [],
            checkeds2: []
        }
    },
	methods: {
		handleGroupChange(e) {
			this.checkeds2 = e
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
