<template>
    <uxt-modal
        :bg-color="bgColor"
        :close="close"
        :max-height="maxHeight"
        :title="title"
        classes="radius-tl radius-tr"
        position="bottom"
        v-model="show"
    >
        <slot></slot>
        <view
            :class="[{ 'text-grey': action.disabled }]"
            :key="index"
            @click="handleItemClick(index)"
            class="padding bg-white text-lg text-center solid-bottom"
            v-for="(action, index) in actions"
        >
            {{ action.text }}
            <text class="margin-left-sm text-sm text-grey">{{ action.sub }}</text>
        </view>
        <view
            @click="handleCancel"
            class="margin-top-xs padding bg-white text-lg text-center"
            v-if="cancel"
        >{{ cancelText }}</view>
    </uxt-modal>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import uxtModal from '@/uxt/components/uxt-modal.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtModal
    },
    props: {
        // 显示
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        // 选项 [{text, sub}, ...]
        actions: {
            type: Array,
            default() {
                return []
            }
        },
        // 取消按钮
        cancel: {
            type: [Boolean, String],
            default: false
        },
        // 最大高度
        maxHeight: {
            type: [Number, String],
            default: '50%'
        },
        // 关闭按钮
        close: {
            type: Boolean,
            default: false
        },
        bgColor: {
            default: 'gray'
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    computed: {
        cancelText() {
            return typeof this.cancel === 'string' ? this.cancel : '取消'
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
        handleItemClick(index) {
            if (this.actions[index].disabled) {
                return
            }
            this.$emit('itemclick', index)
            this.show = false
        },
        handleCancel() {
            this.$emit('cancel')
            this.show = false
        }
    }
}
</script>

<style lang="scss"></style>
