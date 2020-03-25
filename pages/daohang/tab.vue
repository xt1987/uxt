<template>
    <uxt-page :title="title">
        <view class="bg-white text-center padding-sm">Tab{{tabIndex}}</view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="默认"
        ></uxt-title-bar>
        <uxt-tab
            :activeIndex="tabIndex"
            :tabs="tabs9"
            @itemclick="tab"
        ></uxt-tab>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="居中"
        ></uxt-title-bar>
        <uxt-tab
            :activeIndex="tabIndex"
            :tabs="tabs2"
            @itemclick="tab"
            align="center"
        ></uxt-tab>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="平分"
        ></uxt-title-bar>
        <uxt-tab
            :activeIndex="tabIndex"
            :tabs="tabs3"
            @itemclick="tab"
            align="avg"
        ></uxt-tab>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="背景"
        ></uxt-title-bar>
        <uxt-tab
            :activeIndex="tabIndex"
            :tabs="tabs2"
            @itemclick="tab"
            activeColor="white"
            align="center"
            bg-color="red"
        ></uxt-tab>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="图标"
        ></uxt-title-bar>
        <uxt-tab
            :activeIndex="tabIndex"
            :tabs="tabs"
            @itemclick="tab"
            activeColor="white"
            align="center"
            bg-color="green"
        ></uxt-tab>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtTab from '@xtcoder/uxt/components/uxt-tab.vue'

export default {
    components: {
        uxtTitleBar,
        uxtTab
    },
    data() {
        const tabs = index => {
            const arr = []
            for (let i = 0; i <= index; i++) {
                arr.push({
                    text: `Tab${i}`
                })
            }
            return arr
        }
        return {
            title: 'Tab栏',
            tabs9: tabs(9),
            tabs2: tabs(2),
            tabs3: tabs(3),
            tabs: [
                {
                    icon: {
                        type: 'camerafill'
                    },
                    text: '数码'
                },
                {
                    icon: {
                        type: 'upstagefill'
                    },
                    text: '排行榜'
                },
                {
                    icon: {
                        type: 'clothesfill'
                    },
                    text: '皮肤'
                }
            ],
            tabIndex: 0
        }
    },
    methods: {
        tab(index) {
            this.tabIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
