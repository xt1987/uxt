<template>
    <uxt-layout :title="title">
        <view class="padding-tb-sm">
            <uxt-tab-bar :items="items0"></uxt-tab-bar>
            <uxt-tab-bar
                :items="items1"
                bg-color="black"
                classes="margin-top-sm"
            ></uxt-tab-bar>
            <uxt-tab-bar
                :items="items2"
                :styles="{marginTop: '60rpx'}"
            ></uxt-tab-bar>
            <uxt-tab-bar
                :items="items3"
                :styles="{marginTop: '60rpx'}"
                bg-color="black"
            ></uxt-tab-bar>
            <uxt-tab-bar
                :items="items4"
                classes="margin-top-sm"
            ></uxt-tab-bar>
            <uxt-tab-bar
                :items="items5"
                classes="margin-top-sm"
            ></uxt-tab-bar>
            <uxt-tab-bar
                :items="items6"
                @itemclick="itemclick6"
                classes="margin-top-sm"
            ></uxt-tab-bar>
        </view>
    </uxt-layout>
</template>

<script>
import uxtTabBar from '@/uxt/components/uxt-tab-bar.vue'

export default {
    components: {
        uxtTabBar
    },
    data() {
        return {
            title: '底部操作栏',
            items0: [
                {
                    icon: '/static/tabbar/basics_active.png',
                    text: '元素',
                    color: 'df'
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
            items1: [
                {
                    icon: {
                        type: 'homefill'
                    },
                    text: '首页'
                },
                {
                    icon: {
                        type: 'similar'
                    },
                    text: '分类',
                    color: 'df'
                },
                {
                    icon: {
                        type: 'recharge'
                    },
                    text: '积分'
                },
                {
                    icon: {
                        type: 'cart'
                    },
                    text: '购物车',
                    badge: '99'
                },
                {
                    icon: {
                        type: 'my'
                    },
                    text: '我的',
                    badge: '-'
                }
            ],
            items2: [
                {
                    icon: {
                        type: 'homefill'
                    },
                    text: '首页'
                },
                {
                    icon: {
                        type: 'similar'
                    },
                    text: '分类'
                },
                {
                    type: 'add',
                    icon: {
                        type: 'add'
                    },
                    text: '发布'
                },
                {
                    icon: {
                        type: 'cart'
                    },
                    text: '购物车',
                    badge: '99',
                    color: 'df'
                },
                {
                    icon: {
                        type: 'my'
                    },
                    text: '我的',
                    badge: '-'
                }
            ],
            items3: [
                {
                    icon: {
                        type: 'homefill'
                    },
                    text: '首页'
                },
                {
                    icon: {
                        type: 'similar'
                    },
                    text: '分类'
                },
                {
                    type: 'add',
                    icon: '/static/tabbar/plugin.png',
                    text: '发布'
                },
                {
                    icon: {
                        type: 'cart'
                    },
                    text: '购物车',
                    badge: '99'
                },
                {
                    icon: {
                        type: 'my'
                    },
                    text: '我的',
                    badge: '-',
                    color: 'df'
                }
            ],
            items4: [
                {
                    icon: {
                        type: 'service',
                        color: 'green'
                    },
                    badge: '-',
                    text: '客服',
                    color: 'black'
                },
                {
                    icon: {
                        type: 'favorfill'
                    },
                    text: '已收藏',
                    color: 'orange'
                },
                {
                    icon: {
                        type: 'cart'
                    },
                    text: '购物车',
                    badge: '99'
                },
                {
                    type: 'btn',
                    text: '立即订购',
                    btnBgColor: 'red',
                    btnColor: 'white'
                }
            ],
            items5: [
                {
                    icon: {
                        type: 'service',
                        color: 'green'
                    },
                    badge: '-',
                    text: '客服',
                    color: 'black'
                },
                {
                    icon: {
                        type: 'cart'
                    },
                    text: '购物车',
                    badge: '99'
                },
                {
                    type: 'btn',
                    text: '加入购物车',
                    btnBgColor: 'orange',
                    btnColor: 'white'
                },
                {
                    type: 'btn',
                    text: '立即订购',
                    btnBgColor: 'red',
                    btnColor: 'white'
                }
            ],
            items6: [
                {
                    icon: {
                        type: 'service',
                        color: 'green'
                    },
                    badge: '-',
                    text: '客服',
                    color: 'black'
                },
                {
                    icon: {
                        type: 'cart'
                    },
                    text: '购物车',
                    badge: '99'
                },
                {
                    type: 'btn',
                    round: true,
                    text: '加入购物车',
                    btnBgColor: 'orange',
                    btnColor: 'white'
                },
                {
                    type: 'btn',
                    round: true,
                    text: '立即订购',
                    btnBgColor: 'red',
                    btnColor: 'white',
                    shadow: 'red'
                }
            ]
        }
    },
    methods: {
        itemclick6(index) {
            console.log(index)
        }
    }
}
</script>

<style>
</style>
