<template>
    <uxt-layout :title="title">
        <uxt-pulldown-refresh
            @refresh="load"
            v-model="refresh"
        >
            <view
                :key="i"
                class="padding solid-bottom"
                v-for="(item, i) in num"
            >下拉刷新{{ i + 1 }}</view>
        </uxt-pulldown-refresh>
    </uxt-layout>
</template>

<script>
import uxtPulldownRefresh from '@/uxt/components/uxt-pulldown-refresh.vue'

export default {
    components: {
        uxtPulldownRefresh
    },
    data() {
        return {
            title: '下拉刷新',
			num: 0,
            refresh: false
        }
    },
    methods: {
        load() {
            setTimeout(() => {
				this.num += 10
                this.refresh = false
            }, 3000)
        }
    },
    onLoad() {
        this.refresh = true
        this.load()
    }
}
</script>

<style lang="scss" scoped>
</style>
