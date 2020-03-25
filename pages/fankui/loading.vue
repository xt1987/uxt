<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=xx"
            title="深色背景"
        ></uxt-title-bar>
        <view>
            <uxt-loading
                :bg-color="color"
                :key="color"
                classes="margin-top-sm"
                state="load"
                v-for="color in colors"
            ></uxt-loading>
            <uxt-loading
                :bg-color="color"
                :key="color"
                classes="margin-top-sm"
                color="white"
                state="load"
                v-for="color in colors2"
            ></uxt-loading>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=light-xx"
            title="浅色背景"
        ></uxt-title-bar>
        <view>
            <block
                :key="index"
                v-for="(color, index) in colors"
            >
                <uxt-loading
                    :bg-color="`light-${color}`"
                    classes="margin-top-sm"
                    state="load"
                    v-if="index < colors.length - 3"
                ></uxt-loading>
            </block>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="bg-color=gradual-xx"
            title="渐变背景"
        ></uxt-title-bar>
        <view>
            <block
                :key="index"
                v-for="(color, index) in colors"
            >
                <uxt-loading
                    :bg-color="`gradual-${color}`"
                    classes="margin-top-sm"
                    state="load"
                    v-if="index < colors.length - 3"
                ></uxt-loading>
            </block>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="state=load/over/error"
            title="状态"
        ></uxt-title-bar>
        <view>
            <uxt-loading
                bg-color="green"
                classes="margin-top-sm"
                state="load"
            ></uxt-loading>
            <uxt-loading
                bg-color="blue"
                classes="margin-top-sm"
                state="over"
            ></uxt-loading>
            <uxt-loading
                classes="margin-top-sm"
                state="error"
            ></uxt-loading>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="modal"
            title="模态加载框"
        ></uxt-title-bar>
        <view class="padding bg-white">
            <uxt-button
                @click="showModal"
                radius
                size="block"
            >modal</uxt-button>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            subTitle="progress"
            title="进度加载框"
        ></uxt-title-bar>
        <view class="padding bg-white">
			<uxt-button
				@click="showProgress"
				radius
				size="block"
			>progress</uxt-button>
        </view>
        <uxt-loading
            :state="modalState"
            modal
        ></uxt-loading>
        <uxt-loading
			:state="progressState"
			bg-color="red"
			progress
        ></uxt-loading>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtLoading from '@xtcoder/uxt/components/uxt-loading.vue'
import uxtButton from '@xtcoder/uxt/components/uxt-button.vue'

export default {
    components: {
        uxtTitleBar,
        uxtLoading,
        uxtButton
    },
    data() {
        return {
            title: '加载',
            modalState: 'over',
            progressState: 'over',
            colors: [
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
                'gray',
                'black',
                'white'
            ],
            colors2: ['#ff0000', '#00ff00', '#0000ff']
        }
    },
    methods: {
        showModal() {
            this.modalState = 'load'
            setTimeout(() => {
                this.modalState = 'over'
            }, 5000)
        },
        showProgress() {
            this.progressState = 'load'
            setTimeout(() => {
                this.progressState = 'over'
            }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
