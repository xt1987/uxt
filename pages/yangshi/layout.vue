<template>
    <uxt-page :title="title">
        <view
            :style="{ height: contentHeight }"
            class="flex flex-col"
        >
            <uxt-tab
                :activeIndex="index"
                :tabs="tabs"
                @itemclick="tab"
                align="center"
            ></uxt-tab>
            <swiper
                :current="index"
                @change="swiper"
                class="flex-sub"
            >
                <swiper-item>
                    <scroll-view
                        scroll-y
                        style="height: 100%;"
                    >
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(flex[ flex-col]) 子(basis-xx)"
                            title="固定尺寸"
                        ></uxt-bar>
                        <view class="padding-sm bg-white">
                            <view class="flex flex-wrap">
                                <view class="basis-xs bg-theme margin-xs padding-sm radius">xs(20%)</view>
                                <view class="basis-df"></view>
                                <view class="basis-sm bg-theme margin-xs padding-sm radius">sm(40%)</view>
                                <view class="basis-df"></view>
                                <view class="basis-df bg-theme margin-xs padding-sm radius">df(50%)</view>
                                <view class="basis-lg bg-theme margin-xs padding-sm radius">lg(60%)</view>
                                <view class="basis-xl bg-theme margin-xs padding-sm radius">xl(80%)</view>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(flex[ flex-col]) 子(flex-xx)"
                            title="比例布局"
                        ></uxt-bar>
                        <view class="padding-sm bg-white">
                            <view class="flex solid-bottom">
                                <view class="flex-sub bg-theme margin-xs padding-sm radius">sub(1)</view>
                                <view class="flex-sub bg-theme margin-xs padding-sm radius">sub(1)</view>
                            </view>
                            <view class="flex solid-bottom">
                                <view class="flex-sub bg-theme margin-xs padding-sm radius">sub(1)</view>
                                <view class="flex-twice bg-theme margin-xs padding-sm radius">twice(2)</view>
                            </view>
                            <view class="flex">
                                <view class="flex-sub bg-theme margin-xs padding-sm radius">sub(1)</view>
                                <view class="flex-twice bg-theme margin-xs padding-sm radius">twice(2)</view>
                                <view class="flex-treble bg-theme margin-xs padding-sm radius">treble(3)</view>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(flex[ flex-col] justify-xx) 默认start"
                            title="水平对齐"
                        ></uxt-bar>
                        <view class="padding-sm bg-white">
                            <view class="flex justify-start solid-bottom">
                                <view class="bg-theme margin-xs padding-sm radius">start</view>
                                <view class="bg-theme margin-xs padding-sm radius">start</view>
                            </view>
                            <view class="flex justify-end solid-bottom">
                                <view class="bg-theme margin-xs padding-sm radius">end</view>
                                <view class="bg-theme margin-xs padding-sm radius">end</view>
                            </view>
                            <view class="flex justify-center solid-bottom">
                                <view class="bg-theme margin-xs padding-sm radius">center</view>
                                <view class="bg-theme margin-xs padding-sm radius">center</view>
                            </view>
                            <view class="flex justify-between solid-bottom">
                                <view class="bg-theme margin-xs padding-sm radius">between</view>
                                <view class="bg-theme margin-xs padding-sm radius">between</view>
                            </view>
                            <view class="flex justify-around">
                                <view class="bg-theme margin-xs padding-sm radius">around</view>
                                <view class="bg-theme margin-xs padding-sm radius">around</view>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(flex[ flex-col] align-xx) 默认stretch"
                            title="垂直对齐"
                        ></uxt-bar>
                        <view class="padding-sm bg-white">
                            <view class="flex align-start solid-bottom">
                                <view class="bg-theme margin-xs padding-lg radius">start</view>
                                <view class="bg-theme margin-xs padding-sm radius">start</view>
                            </view>
                            <view class="flex align-end solid-bottom">
                                <view class="bg-theme margin-xs padding-lg radius">end</view>
                                <view class="bg-theme margin-xs padding-sm radius">end</view>
                            </view>
                            <view class="flex align-center solid-bottom">
                                <view class="bg-theme margin-xs padding-lg radius">center</view>
                                <view class="bg-theme margin-xs padding-sm radius">center</view>
                            </view>
                            <view class="flex align-stretch">
                                <view class="bg-theme margin-xs padding-lg radius">stretch</view>
                                <view class="bg-theme margin-xs padding-sm radius">stretch</view>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(flex justify-center align-center)"
                            title="水平垂直居中"
                        ></uxt-bar>
                        <view
                            class="padding-sm bg-white flex justify-center align-center"
                            style="height: 300rpx;"
                        >
                            <view
                                class="flex justify-center align-center bg-theme radius"
                                style="width: 200rpx; height: 200rpx;"
                            >center</view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(flex flex-col)"
                            title="列布局"
                        ></uxt-bar>
                        <view class="padding-sm bg-white flex flex-col">
                            <view class="bg-theme margin-xs padding-lg radius">flex-col</view>
                            <view class="bg-theme margin-xs padding-lg radius">flex-col</view>
                        </view>
                    </scroll-view>
                </swiper-item>
                <swiper-item>
                    <scroll-view
                        scroll-y
                        style="height: 100%;"
                    >
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(grid col-(1-5)) 子(view,无margin)"
                            title="等分列"
                        ></uxt-bar>
                        <view class="padding-sm bg-white">
                            <view
                                :class="[`col-${index + 1}`]"
                                :key="index"
                                class="grid margin-bottom text-center"
                                v-for="(item, index) in 5"
                            >
                                <view
                                    :class="indexs % 2 === 0 ? 'bg-cyan' : 'bg-blue'"
                                    :key="indexs"
                                    class="padding"
                                    v-for="(item, indexs) in (index + 1) * 2"
                                >{{ indexs + 1 }}</view>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(grid col-(1-5) grid-square) 子(view,无margin)"
                            title="等高"
                        ></uxt-bar>
                        <view class="bg-white padding">
                            <view class="grid col-4 grid-square">
                                <view
                                    :key="index"
                                    class="bg-blue"
                                    v-for="(item, index) in 4"
                                ></view>
                            </view>
                        </view>
                    </scroll-view>
                </swiper-item>
                <swiper-item>
                    <scroll-view
                        scroll-y
                        style="height: 100%;"
                    >
                        <uxt-bar
                            classes="margin-top-sm"
                            desc="父(cf) 子(fl/fr)"
                            title="浮动"
                        ></uxt-bar>
                        <view class="bg-white padding">
                            <view class="cf padding-sm">
                                <view class="bg-theme radius fl padding-sm">fl</view>
                                <view class="bg-theme radius fr padding-sm">fr</view>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            title="外边距"
                        ></uxt-bar>
                        <view class="bg-white">
                            <view class="grid col-3">
                                <view class="flex flex-col justify-center align-center padding-sm solid-right solid-bottom">
                                    <view class="solid-red">
                                        <view class="bg-theme margin-0 padding-sm"></view>
                                    </view>
                                    <view>margin-0</view>
                                </view>
                                <block
                                    :key="index"
                                    v-for="(pos, index) in poses"
                                >
                                    <view
                                        :key="index2"
                                        class="flex flex-col justify-center align-center padding-sm solid-right solid-bottom"
                                        v-for="(size, index2) in sizes"
                                    >
                                        <view class="solid-red">
                                            <view
                                                :class="[`margin${pos + size}`]"
                                                class="bg-theme padding-sm"
                                            ></view>
                                        </view>
                                        <view>margin{{ pos + size }}</view>
                                    </view>
                                </block>
                            </view>
                        </view>
                        <uxt-bar
                            classes="margin-top-sm"
                            title="内边距"
                        ></uxt-bar>
                        <view class="bg-white">
                            <view class="grid col-3">
                                <view class="flex flex-col justify-center align-center padding-sm solid-right solid-bottom">
                                    <view class="solid-red padding-0">
                                        <view class="bg-theme padding-sm"></view>
                                    </view>
                                    <view>padding-0</view>
                                </view>
                                <block
                                    :key="index"
                                    v-for="(pos, index) in poses"
                                >
                                    <view
                                        :key="index2"
                                        class="flex flex-col justify-center align-center padding-sm solid-right solid-bottom"
                                        v-for="(size, index2) in sizes"
                                    >
                                        <view
                                            :class="[`padding${pos + size}`]"
                                            class="solid-red"
                                        >
                                            <view class="bg-theme padding-sm"></view>
                                        </view>
                                        <view>padding{{ pos + size }}</view>
                                    </view>
                                </block>
                            </view>
                        </view>
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
    </uxt-page>
</template>

<script>
import uxtTab from '@xtcoder/uxt/components/uxt-tab.vue'
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'

export default {
    components: {
        uxtTab,
        uxtBar
    },
    data() {
        return {
            title: '布局',
            contentHeight: `${this.systemInfo.windowHeight -
                this.systemInfo.statusBarHeight -
                this.systemInfo.navBarHeight}px`,
            tabs: [
                {
                    text: 'Flex布局'
                },
                {
                    text: 'Grid布局'
                },
                {
                    text: '辅助布局'
                }
            ],
            index: 0,
            poses: ['', '-top', '-right', '-bottom', '-left', '-lr', '-tb'],
            sizes: ['-xs', '-sm', '', '-lg', '-xl']
        }
    },
    methods: {
        tab(index) {
            this.index = index
        },
        swiper(e) {
            this.index = e.detail.current
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
