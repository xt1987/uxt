<template>
    <view class="toast">
        <uxt-modal
            :modal="noClick2"
            :modal-close="false"
            bg-color=" "
            classes="radius"
            duration="100"
            max-width="70%"
            min-width="200rpx"
            opacity="0"
            position="center"
            v-model="show"
        >
            <view class="content padding-sm text-center">
                <view
                    class="margin-bottom-sm"
                    v-if="icon2"
                >
                    <uxt-icon
                        :animation="animation"
                        :type="icon2"
                        size="sl"
                    ></uxt-icon>
                </view>
                <view>{{ message }}</view>
            </view>
        </uxt-modal>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import uxtModal from '@/uxt/components/uxt-modal.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

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
                return ['', 'loading', 'success', 'fail'].includes(value)
            }
        },
        // 持续时间(毫秒), 0表示不关闭
        duration: {
            type: [Number, String],
            default: 3000
        },
        // 图标
        icon: {
            type: String
        },
        // 禁止点击页面其它内容
        noClick: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    computed: {
        animation() {
            return this.type === 'loading' ? 'spin' : ''
        },
        icon2() {
            if (this.icon) {
                return this.icon
            }
            let icon = ''
            switch (this.type) {
                case 'loading':
                    icon = 'loading2'
                    break
                case 'success':
                    icon = 'check'
                    break
                case 'fail':
                    icon = 'close'
                    break
            }
            return icon
        },
        noClick2() {
            return this.type === 'loading' ? true : this.noClick
        }
    },
    watch: {
        value(newVal) {
            this.show = newVal
        },
        show(newVal) {
            !newVal && this.$emit('input', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.toast {
    .content {
        background-color: rgba(#000, 0.7);
        color: #fff;
    }
}
</style>
