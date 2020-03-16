<template>
    <uxt-modal
        :modal-close="false"
        :title="title"
        classes="radius"
        v-model="show"
        width="90%"
    >
        <view class="padding-lr padding-tb-lg text-center flex align-center">
            <view v-if="icon">
                <uxt-icon
                    :type="icon"
                    classes="margin-right-sm"
                    size="sl"
                ></uxt-icon>
            </view>
            <view class="flex-sub">{{ message }}</view>
        </view>
        <view class="flex solid-top">
            <view
                @click="handleCancel"
                class="flex-sub padding-sm text-center solid-right"
                v-if="type === 'confirm'"
            >取消</view>
            <view
                @click="handleSure"
                class="flex-sub padding-sm text-center text-df"
            >确定</view>
        </view>
    </uxt-modal>
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
        // 标题
        title: {
            type: String,
            default: '提示'
        },
        // 消息
        message: {
            type: String,
            required: true
        },
        // 类型
        type: {
            type: String,
            default: 'alert',
            validator(value) {
                return ['alert', 'confirm'].includes(value)
            }
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
    watch: {
        value(newVal) {
            this.show = newVal
        },
        show(newVal) {
            !newVal && this.$emit('input', false)
        }
    },
    methods: {
        handleSure() {
            this.show = false
            this.$emit('sure')
        },
        handleCancel() {
            this.show = false
            this.$emit('cancel')
        }
    }
}
</script>

<style lang="scss"></style>
