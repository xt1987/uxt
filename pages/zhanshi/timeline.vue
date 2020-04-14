<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="position=left(默认)"
            title="在左边"
        ></uxt-title-bar>
        <uxt-timeline classes="padding-tb">
            <uxt-timeline-item>
                <view class="padding bg-green radius">22:22【广州市】快件已到达地球</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-blue radius">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-red radius">这是第一次，我家的铲屎官走了这么久。</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-yellow radius">20:00【月球】快件已到达月球，准备发往地球</view>
                <view class="margin-top padding bg-cyan radius">10:00 【银河系】快件已到达银河系，准备发往月球</view>
            </uxt-timeline-item>
        </uxt-timeline>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="position=right"
            title="在右边"
        ></uxt-title-bar>
        <uxt-timeline
            classes="padding-tb"
            position="right"
        >
            <uxt-timeline-item>
                <view class="padding bg-green radius">22:22【广州市】快件已到达地球</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-blue radius">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-red radius">这是第一次，我家的铲屎官走了这么久。</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-yellow radius">20:00【月球】快件已到达月球，准备发往地球</view>
                <view class="margin-top padding bg-cyan radius">10:00 【银河系】快件已到达银河系，准备发往月球</view>
            </uxt-timeline-item>
        </uxt-timeline>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="color"
            title="其它颜色"
        ></uxt-title-bar>
        <uxt-timeline
            classes="padding-tb"
            color="red"
        >
            <uxt-timeline-item>
                <view class="padding bg-green radius">22:22【广州市】快件已到达地球</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-blue radius">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-red radius">这是第一次，我家的铲屎官走了这么久。</view>
            </uxt-timeline-item>
            <uxt-timeline-item>
                <view class="padding bg-yellow radius">20:00【月球】快件已到达月球，准备发往地球</view>
                <view class="margin-top padding bg-cyan radius">10:00 【银河系】快件已到达银河系，准备发往月球</view>
            </uxt-timeline-item>
        </uxt-timeline>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="icon"
            title="自定义图标"
        ></uxt-title-bar>
        <uxt-timeline
            classes="padding-tb"
            color="blue"
        >
            <uxt-timeline-item icon="bell-fill">
                <view class="padding bg-green radius">22:22【广州市】快件已到达地球</view>
            </uxt-timeline-item>
            <uxt-timeline-item :icon="{ type: 'heart-fill', color: 'red', size: 'xxl' }">
                <view class="padding bg-blue radius">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</view>
            </uxt-timeline-item>
            <uxt-timeline-item :icon="{ type: 'flag-fill', color: 'yellow' }">
                <view class="padding bg-red radius">这是第一次，我家的铲屎官走了这么久。</view>
            </uxt-timeline-item>
            <uxt-timeline-item icon="thumb-up">
                <view class="padding bg-yellow radius">20:00【月球】快件已到达月球，准备发往地球</view>
                <view class="margin-top padding bg-cyan radius">10:00 【银河系】快件已到达银河系，准备发往月球</view>
            </uxt-timeline-item>
        </uxt-timeline>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtTimeline from '@xtcoder/uxt/components/uxt-timeline.vue'
import uxtTimelineItem from '@xtcoder/uxt/components/uxt-timeline-item.vue'

export default {
    components: {
        uxtTitleBar,
        uxtTimeline,
        uxtTimelineItem
    },
    data() {
        return {
            title: '时间轴'
        }
    }
}
</script>

<style lang="scss" scoped></style>
