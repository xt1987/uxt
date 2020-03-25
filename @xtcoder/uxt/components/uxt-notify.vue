<template>
    <uxt-modal
        :bg-color="bgColor2"
        :modal="false"
        position="top"
        v-model="show"
    >
        <view
            @click="handleClick"
            class="padding-sm text-center"
        >
            <uxt-icon
                :type="icon2"
                classes="margin-right-xs"
                v-if="icon2"
            ></uxt-icon>
            {{ message }}
        </view>
    </uxt-modal>
</template>

<script>
import baseMixin from '../mixins/base.js'
import uxtModal from './uxt-modal.vue'
import uxtIcon from './uxt-icon.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtModal,
        uxtIcon
    },
    props: {
        // 显示
        value: {
            type: Boolean,
            default: false
        },
        // 消息内容
        message: {
            type: String,
            required: true
        },
        // 消息类型
        type: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'primary', 'success', 'warn', 'danger'].includes(
                    value
                )
            }
        },
        // 持续时间(毫秒),0表示不关闭
        duration: {
            type: [Number, String],
            default: 3000
        },
        // 图标
        icon: {
            type: String
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    computed: {
        bgColor2() {
            let bg = ''
            switch (this.type) {
                case 'primary':
                    bg = 'theme'
                    break
                case 'success':
                    bg = 'green'
                    break
                case 'warn':
                    bg = 'orange'
                    break
                case 'danger':
                    bg = 'red'
                    break
                default:
                    bg = this.bgColor
                    break
            }
            return bg
        },
        icon2() {
            if (this.icon) {
                return this.icon
            }
            let icon = ''
            switch (this.type) {
                case 'success':
                    icon = 'roundcheck'
                    break
                case 'warn':
                    icon = 'warn'
                    break
                case 'danger':
                    icon = 'roundclose'
                    break
                default:
                    icon = 'info'
                    break
            }
            return icon
        }
    },
    watch: {
        value(newVal) {
            this.show = newVal
        },
        show(newVal) {
            !newVal && this.$emit('input', false)
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
