<template>
    <uxt-page
        :back="back"
        :footer-height="footerHeight"
        :header-height="headerHeight"
        :show-side="showSide"
        :side-position="sidePosition"
        :title="title"
		@sideopened="handleSideOpened"
		@sideclosed="handleSideClosed"
    >
		<uxt-bar-group title="设置">
			<uxt-bar
				title="导航栏"
			>
				<template slot="right">
					<uxt-switch radius checked size="sm" @change="handleChange(!$event, 'headerHeight', 0)"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				desc="需显示导航栏"
				title="返回按钮"
			>
				<template slot="right">
					<uxt-switch radius size="sm" v-model="back"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="自定义顶部内容"
			>
				<template slot="right">
					<uxt-switch radius size="sm" v-model="header" @change="handleChange($event, 'headerHeight', 150)"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="自定义底部内容"
			>
				<template slot="right">
					<uxt-switch radius size="sm" v-model="footer" @change="handleChange($event, 'footerHeight', 100)"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar
				title="侧边栏位置"
			>
				<template slot="right">
					<uxt-radio v-model="sidePosition" label="左" val="left" size="sm" type="btn"></uxt-radio>
					<uxt-radio classes="margin-left-sm" v-model="sidePosition" label="右" val="right" size="sm" type="btn"></uxt-radio>
				</template>
			</uxt-bar>
			<uxt-bar
				title="外部关闭侧边栏"
			>
				<template slot="right">
					3秒后关闭：<uxt-switch radius size="sm" v-model="outerCloseSide"></uxt-switch>
				</template>
			</uxt-bar>
			<uxt-bar title="事件">
				<template slot="right">
					<text @click="events = ''">清空</text>
				</template>
			</uxt-bar>
			<view class="padding bg-white" v-html="events" style="height: 200rpx; overflow-y: auto;">
			</view>
		</uxt-bar-group>
        <template slot="header">
            <view v-if="header" class="bg-green padding" style="height: 150rpx;">自定义的顶部内容，可以换成任何你想要的内容，这些内容一直显示在页面内容的前面</view>
        </template>
        <template
            slot="footer"
            v-if="footer"
        >
            <uxt-tab-bar :items="bottomItems"></uxt-tab-bar>
        </template>
        <template slot="side">
            <view
				class="padding-tb-xl">
                <uxt-bar
                    arrow
                    title="菜单1"
                ></uxt-bar>
                <uxt-bar
                    arrow
                    title="菜单2"
                ></uxt-bar>
                <uxt-bar
                    arrow
                    title="菜单3"
                ></uxt-bar>
            </view>
        </template>
    </uxt-page>
</template>

<script>
import uxtBarGroup from '@xtcoder/uxt/components/uxt-bar-group.vue'
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtTabBar from '@xtcoder/uxt/components/uxt-tab-bar.vue'
import uxtRadio from '@xtcoder/uxt/components/uxt-radio.vue'
import uxtSwitch from '@xtcoder/uxt/components/uxt-switch.vue'

export default {
    components: {
        uxtBarGroup,
        uxtBar,
        uxtTabBar,
		uxtRadio,
		uxtSwitch
    },
    data() {
        return {
            title: '页面容器',
			header: false,
            headerHeight: '',
            back: true,
            footerHeight: '',
            footer: false,
            showSide: false,
            sidePosition: 'left',
            outerCloseSide: false,
            bottomItems: [
                {
                    icon: '/static/tabbar/basics_active.png',
                    text: '元素',
                    color: 'theme'
                },
                {
                    icon: '/static/tabbar/component.png',
                    text: '组件'
                },
                {
                    icon: '/static/tabbar/plugin.png',
                    text: '扩展',
                    badge: '99'
                },
                {
                    icon: '/static/tabbar/about.png',
                    text: '关于',
                    badge: '-'
                }
            ],
			tid: 0,
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
		handleSideOpened() {
			this.showSide = true
			console.log('已触发sideopened事件')
			this.events += 'sideopened<br />'
			this.tid && clearTimeout(this.tid)
			if (this.outerCloseSide) {
				this.tid = setTimeout(() => {
                    this.showSide = false
				}, 3000)
			}
		},
		handleSideClosed() {
			this.showSide = false
			console.log('已触发sideclosed事件')
			this.events += 'sideclosed<br />'
		}
    }
}
</script>

<style lang="scss" scoped>
</style>
