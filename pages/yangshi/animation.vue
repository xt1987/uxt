<template>
    <uxt-page :title="title">
        <uxt-bar
            classes="margin-top-sm"
            title="动画"
			desc="ani-xx"
        >
			<template slot="right">
				反向：<uxt-switch v-model="reverse" size="sm" radius></uxt-switch>
			</template>
		</uxt-bar>
        <view class="grid col-2">
            <view
                :key="item.name"
                v-for="item in list"
            >
                <view
                    :class="[
						`bg-${item.color}`,
						(ani === item.name ? `ani-${item.name}` : ''),
						{
							'ani-reverse': reverse
						}
					]"
                    :data-class="item.name"
                    @click="setAnimation"
                    class="margin-sm padding text-center"
                >{{ item.name }}</view>
            </view>
        </view>
    </uxt-page>
</template>

<script>
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtSwitch from '@xtcoder/uxt/components/uxt-switch.vue'

export default {
    components: {
        uxtBar,
		uxtSwitch
    },
    data() {
        return {
            title: '动画样式',
            ani: '',
			reverse: false,
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
