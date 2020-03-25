<template>
    <uxt-page :title="title">
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="动画"
        ></uxt-title-bar>
        <view class="grid col-2">
            <view
                :key="item.name"
                v-for="item in list"
            >
                <view
                    :class="[`bg-${item.color}`, ani === item.name ? `ani-${item.name}` : '']"
                    :data-class="item.name"
                    @click="setAnimation"
                    class="margin-sm padding text-center"
                >{{ item.name }}</view>
            </view>
        </view>
        <uxt-title-bar
            classes="margin-top-sm solid-bottom"
            title="反向动画"
        ></uxt-title-bar>
        <view class="grid col-2">
            <view
                :key="item.name"
                v-for="item in list"
            >
                <view
                    :class="[`bg-${item.color}`, ani === `${item.name}s` ? `ani-${item.name}` : '']"
                    :data-class="`${item.name}s`"
                    @click="setAnimation"
                    class="margin-sm padding text-center ani-reverse"
                >{{ item.name }}</view>
            </view>
        </view>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'

export default {
    components: {
        uxtTitleBar
    },
    data() {
        return {
            title: '动画样式',
            ani: '',
            list: [
                {
                    name: 'fade',
                    color: 'red'
                },
                {
                    name: 'scale-up',
                    color: 'orange'
                },
                {
                    name: 'scale-down',
                    color: 'olive'
                },
                {
                    name: 'slide-top',
                    color: 'green'
                },
                {
                    name: 'slide-bottom',
                    color: 'cyan'
                },
                {
                    name: 'slide-left',
                    color: 'blue'
                },
                {
                    name: 'slide-right',
                    color: 'purple'
                },
                {
                    name: 'shake',
                    color: 'mauve'
                }
            ]
        }
    },
    methods: {
        setAnimation(e) {
            var ani = e.currentTarget.dataset.class
            this.ani = ani
            setTimeout(() => {
                this.ani = ''
            }, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
