<template>
    <uxt-page
		:back="false"
        title="uxt - uniapp组件库"
    >
        <uxt-title-bar
            bg-color=" "
            classes="margin-bottom solid-bottom"
            title="内置样式"
        ></uxt-title-bar>
        <view class="nav-list">
            <navigator
                :class="[`bg-${item.color}`]"
                :key="index"
                :url="`/pages/yangshi/${item.name}`"
                class="nav-li"
                hover-class="none"
                v-for="(item, index) in yangshi"
            >
                <view class="nav-title">{{ item.title }}</view>
                <view class="nav-name">{{ item.name }}</view>
                <view class="nav-icon">
                    <uxt-icon :type="item.icon"></uxt-icon>
                </view>
            </navigator>
        </view>
        <uxt-title-bar
            bg-color=" "
            classes="margin-bottom solid-bottom"
            title="基础组件"
        ></uxt-title-bar>
        <view class="nav-list">
            <navigator
                :class="[`bg-${item.color}`]"
                :key="index"
                :url="`/pages/jichu/${item.name}`"
                class="nav-li"
                hover-class="none"
                v-for="(item, index) in jichu"
            >
                <view class="nav-title">{{ item.title }}</view>
                <view class="nav-name">{{ item.name }}</view>
                <view class="nav-icon">
                    <uxt-icon :type="item.icon"></uxt-icon>
                </view>
            </navigator>
        </view>
        <uxt-title-bar
            bg-color=" "
            classes="margin-bottom solid-bottom"
            title="表单组件"
        ></uxt-title-bar>
        <view class="nav-list">
            <navigator
                :class="[`bg-${item.color}`]"
                :key="index"
                :url="`/pages/biaodan/${item.name}`"
                class="nav-li"
                hover-class="none"
                v-for="(item, index) in biaodan"
            >
                <view class="nav-title">{{ item.title }}</view>
                <view class="nav-name">{{ item.name }}</view>
                <view class="nav-icon">
                    <uxt-icon :type="item.icon"></uxt-icon>
                </view>
            </navigator>
        </view>
        <uxt-title-bar
            bg-color=" "
            classes="margin-bottom solid-bottom"
            title="反馈组件"
        ></uxt-title-bar>
        <view class="nav-list">
            <navigator
                :class="[`bg-${item.color}`]"
                :key="index"
                :url="`/pages/fankui/${item.name}`"
                class="nav-li"
                hover-class="none"
                v-for="(item, index) in fankui"
            >
                <view class="nav-title">{{ item.title }}</view>
                <view class="nav-name">{{ item.name }}</view>
                <view class="nav-icon">
                    <uxt-icon :type="item.icon"></uxt-icon>
                </view>
            </navigator>
        </view>
        <uxt-title-bar
            bg-color=" "
            classes="margin-bottom solid-bottom"
            title="展示组件"
        ></uxt-title-bar>
        <view class="nav-list">
            <navigator
                :class="[`bg-${item.color}`]"
                :key="index"
                :url="`/pages/zhanshi/${item.name}`"
                class="nav-li"
                hover-class="none"
                v-for="(item, index) in zhanshi"
            >
                <view class="nav-title">{{ item.title }}</view>
                <view class="nav-name">{{ item.name }}</view>
                <view class="nav-icon">
                    <uxt-icon :type="item.icon"></uxt-icon>
                </view>
            </navigator>
        </view>
        <uxt-title-bar
            bg-color=" "
            classes="margin-bottom solid-bottom"
            title="导航组件"
        ></uxt-title-bar>
        <view class="nav-list">
            <navigator
                :class="[`bg-${item.color}`]"
                :key="index"
                :url="`/pages/daohang/${item.name}`"
                class="nav-li"
                hover-class="none"
                v-for="(item, index) in daohang"
            >
                <view class="nav-title">{{ item.title }}</view>
                <view class="nav-name">{{ item.name }}</view>
                <view class="nav-icon">
                    <uxt-icon :type="item.icon"></uxt-icon>
                </view>
            </navigator>
        </view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtIcon from '@xtcoder/uxt/components/uxt-icon.vue'

export default {
    components: {
        uxtTitleBar,
        uxtIcon
    },
    data() {
        return {
            yangshi: [
                {
                    title: '动画样式',
                    name: 'animation',
                    color: this.randomColor(),
                    icon: 'clock'
                },
                {
                    title: '背景样式',
                    name: 'background',
                    color: this.randomColor(),
                    icon: 'square-fill'
                },
                {
                    title: '边框样式',
                    name: 'border',
                    color: this.randomColor(),
                    icon: 'square'
                },
                {
                    title: '布局样式',
                    name: 'layout',
                    color: this.randomColor(),
                    icon: 'layout'
                },
                {
                    title: '文本样式',
                    name: 'text',
                    color: this.randomColor(),
                    icon: 'font'
                }
            ],
            jichu: [
                {
                    title: '通栏',
                    name: 'bar',
                    color: this.randomColor(),
                    icon: 'angle-right'
                },
                {
                    title: '按钮',
                    name: 'button',
                    color: this.randomColor(),
                    icon: 'button'
                },
                {
                    title: '图标',
                    name: 'icon',
                    color: this.randomColor(),
                    icon: 'at'
                },
                {
                    title: '模态窗',
                    name: 'modal',
                    color: this.randomColor(),
                    icon: 'bug'
                },
                {
                    title: '页面容器',
                    name: 'page',
                    color: this.randomColor(),
                    icon: 'global'
                }
            ],
            biaodan: [
                {
                    title: '复选框',
                    name: 'checkbox',
                    color: this.randomColor(),
                    icon: 'check-square'
                },
                {
                    title: '表单录入',
                    name: 'input',
                    color: this.randomColor(),
                    icon: 'edit'
                },
                {
                    title: '表单',
                    name: 'form',
                    color: this.randomColor(),
                    icon: 'form'
                },
                {
                    title: '输入框',
                    name: 'input-box',
                    color: this.randomColor(),
                    icon: 'pencil'
                },
                {
                    title: '单选框',
                    name: 'radio',
                    color: this.randomColor(),
                    icon: 'dot-o'
                },
                {
                    title: '开关',
                    name: 'switch',
                    color: this.randomColor(),
                    icon: 'toggle-on'
                }
            ],
            fankui: [
                {
                    title: '上拉菜单',
                    name: 'action-sheet',
                    color: this.randomColor(),
                    icon: 'arrow-up'
                },
                {
                    title: '对话框',
                    name: 'dialog',
                    color: this.randomColor(),
                    icon: 'question-o'
                },
                {
                    title: '加载',
                    name: 'loading',
                    color: this.randomColor(),
                    icon: 'loading2'
                },
                {
                    title: '下拉刷新',
                    name: 'pulldown-refresh',
                    color: this.randomColor(),
                    icon: 'refresh'
                },
                {
                    title: '滑动操作',
                    name: 'swipe-action',
                    color: this.randomColor(),
                    icon: 'finger1-left'
                },
                {
                    title: '消息通知',
                    name: 'notify',
                    color: this.randomColor(),
                    icon: 'exclamation-o'
                },
                {
                    title: '轻提示',
                    name: 'toast',
                    color: this.randomColor(),
                    icon: 'exclamation-triangle'
                }
            ],
            zhanshi: [
                {
                    title: '头像',
                    name: 'avatar',
                    color: this.randomColor(),
                    icon: 'man'
                },
                {
                    title: '分隔线',
                    name: 'divider',
                    color: this.randomColor(),
                    icon: 'minus'
                },
                {
                    title: '进度条',
                    name: 'progress',
                    color: this.randomColor(),
                    icon: 'battery-middle'
                },
                {
                    title: '步骤条',
                    name: 'steps',
                    color: this.randomColor(),
                    icon: 'check-o'
                },
                {
                    title: '标签',
                    name: 'tag',
                    color: this.randomColor(),
                    icon: 'tag'
                },
                {
                    title: '时间轴',
                    name: 'timeline',
                    color: this.randomColor(),
                    icon: 'clock-fill'
                }
            ],
            daohang: [
                {
                    title: '浮动按钮',
                    name: 'fab',
                    color: this.randomColor(),
                    icon: 'plus-o-fill'
                },
                {
                    title: '宫格',
                    name: 'grid',
                    color: this.randomColor(),
                    icon: 'th'
                },
                {
                    title: '导航栏',
                    name: 'nav-bar',
                    color: this.randomColor(),
                    icon: 'angle-left'
                },
                {
                    title: 'Tab页',
                    name: 'tab',
                    color: this.randomColor(),
                    icon: 'folder'
                },
                {
                    title: 'Tab栏',
                    name: 'tab-bar',
                    color: this.randomColor(),
                    icon: 'home'
                },
                {
                    title: '标题栏',
                    name: 'title-bar',
                    color: this.randomColor(),
                    icon: 'dot'
                }
                // {
                // 	title: '列表',
                // 	name: 'list',
                // 	color: 'orange',
                // 	icon: 'list'
                // }
            ]
        }
    },
    methods: {
        randomColor() {
            const colors = [
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
                'brown',
                'grey',
                'black'
            ]
            let i = Math.floor(Math.random() * 13)
            return colors[i]
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 40rpx 0px;
    justify-content: space-between;
}

.nav-li {
    padding: 30rpx;
    border-radius: 12rpx;
    width: 45%;
    margin: 0 2.5% 40rpx;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEQ0EzRDkzRTFDNDExRThBMjQ1OEZFQ0NGQ0U5NkUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEQ0EzRDk0RTFDNDExRThBMjQ1OEZFQ0NGQ0U5NkUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NURDQTNEOTFFMUM0MTFFOEEyNDU4RkVDQ0ZDRTk2RTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NURDQTNEOTJFMUM0MTFFOEEyNDU4RkVDQ0ZDRTk2RTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ahpMuAAAaTklEQVR42uyd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);
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
}

.nav-li::after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: inherit;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -10%;
    border-radius: 10rpx;
    opacity: 0.2;
    transform: scale(0.9, 0.9);
}

.nav-li.cur {
    color: #fff;
    background: rgb(94, 185, 94);
    box-shadow: 4rpx 4rpx 6rpx rgba(94, 185, 94, 0.4);
}

.nav-title {
    font-size: 32rpx;
    font-weight: 300;
}

.nav-title::first-letter {
    font-size: 40rpx;
    margin-right: 4rpx;
}

.nav-name {
    font-size: 28rpx;
    text-transform: Capitalize;
    margin-top: 20rpx;
    position: relative;
}

.nav-name::before {
    content: '';
    position: absolute;
    display: block;
    width: 40rpx;
    height: 6rpx;
    background: #fff;
    bottom: 0;
    right: 0;
    opacity: 0.5;
}

.nav-name::after {
    content: '';
    position: absolute;
    display: block;
    width: 100rpx;
    height: 1px;
    background: #fff;
    bottom: 0;
    right: 40rpx;
    opacity: 0.3;
}

.nav-name::first-letter {
    font-weight: bold;
    font-size: 36rpx;
    margin-right: 1px;
}

.nav-li .nav-icon {
    display: inline-block;
    position: absolute;
    right: 30rpx;
    top: 30rpx;
    font-size: 52rpx;
    width: 60rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
}

.text-light {
    font-weight: 300;
}
</style>
