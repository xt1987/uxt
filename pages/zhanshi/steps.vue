<template>
    <uxt-page :title="title">
        <uxt-bar
            classes="margin-top-sm"
            title="基本用法"
        >
            <template slot="right">
                <uxt-button
                    @click="next"
                    radius
                >下一步</uxt-button>
            </template>
        </uxt-bar>
        <uxt-steps
            :step="step"
            :steps="steps1"
            bg-color="white"
            classes="padding"
        ></uxt-steps>
        <uxt-steps
            :step="step"
            :steps="steps2"
            bg-color="white"
            classes="padding margin-top-xs"
            color="green"
        ></uxt-steps>
        <uxt-bar
            classes="margin-top-sm"
            desc="arrow"
            title="箭头连接"
        >
            <template slot="right">
                <uxt-button
                    @click="next"
                    bg-color="red"
                    radius
                >下一步</uxt-button>
            </template>
        </uxt-bar>
        <uxt-steps
            :step="step"
            :steps="steps2"
            arrow
            bg-color="white"
            classes="padding"
            color="red"
        ></uxt-steps>
        <uxt-bar
            classes="margin-top-sm"
            title="数字图标"
        >
            <template slot="right">
                <uxt-button
                    @click="next"
                    bg-color="yellow"
                    radius
                >下一步</uxt-button>
            </template>
        </uxt-bar>
        <uxt-steps
            :step="step"
            :steps="steps3"
            bg-color="white"
            classes="padding"
            color="yellow"
        ></uxt-steps>
        <uxt-bar
            classes="margin-top-sm"
            title="长步骤"
        >
            <template slot="right">
                <uxt-button
                    @click="next4"
                    bg-color="cyan"
                    radius
                >下一步</uxt-button>
            </template>
        </uxt-bar>
        <uxt-steps
            :step="step4"
            :steps="steps4"
            bg-color="white"
            classes="padding"
            color="cyan"
        ></uxt-steps>
    </uxt-page>
</template>

<script>
import uxtBar from '@xtcoder/uxt/components/uxt-bar.vue'
import uxtButton from '@xtcoder/uxt/components/uxt-button.vue'
import uxtSteps from '@xtcoder/uxt/components/uxt-steps.vue'

export default {
    components: {
        uxtBar,
        uxtButton,
        uxtSteps
    },
    data() {
        return {
            title: '步骤条',
            step: 0,
            steps1: [
                { iconed: 'square-fill', text: '开始' },
                { iconed: 'dot-o-fill', text: '等待' },
                { iconed: 'close-o-fill', text: '错误' },
                { iconed: 'check-o-fill', text: '完成' }
            ],
            steps2: [
                { icon: 'square-fill', iconed: 'square-fill', text: '开始' },
                { icon: 'dot-o-fill', iconed: 'dot-o-fill', text: '等待' },
                {
                    icon: 'close-o-fill',
                    iconed: 'close-o-fill',
                    text: '错误'
                },
                {
                    icon: 'check-o-fill',
                    iconed: 'check-o-fill',
                    text: '完成'
                }
            ],
            steps3: [
                { icon: 1, iconed: 'check-o-fill', text: '开始' },
                { icon: 2, iconed: 'check-o-fill', text: '等待' },
                { icon: 3, iconed: 'close-o-fill', text: '错误' },
                { icon: 4, iconed: 'check-o-fill', text: '完成' }
            ],
            step4: 0,
            steps4: [
                { icon: 1, iconed: 'check-o-fill', text: '第1步' },
                { icon: 2, iconed: 'check-o-fill', text: '第2步' },
                { icon: 3, iconed: 'check-o-fill', text: '第3步' },
                { icon: 4, iconed: 'check-o-fill', text: '第4步' },
                { icon: 5, iconed: 'check-o-fill', text: '第5步' },
                { icon: 6, iconed: 'check-o-fill', text: '第6步' },
                { icon: 7, iconed: 'check-o-fill', text: '第7步' },
                { icon: 8, iconed: 'check-o-fill', text: '第8步' },
                { icon: 9, iconed: 'check-o-fill', text: '第9步' }
            ]
        }
    },
    methods: {
        next() {
            this.step++
            if (this.step === 4) {
                this.step = 0
            }
        },
        next4() {
            this.step4++
            if (this.step4 === 9) {
                this.step4 = 0
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
