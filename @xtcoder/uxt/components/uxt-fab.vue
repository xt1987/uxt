<template>
    <view
        :class="[classes, position, direction]"
        :style="[styles, positionStyle]"
        class="fab"
    >
        <view class="btn">
            <uxt-button
				:app-parameter="appParameter"
                :bg-color="bgColor"
                :disabled="disabled"
                :form-type="btns.length > 0 ? '' : formType"
                :open-type="btns.length > 0 ? '' : openType"
				:lang="lang"
				:session-from="sessionFrom"
				:send-message-title="sendMessageTitle"
				:send-message-path="sendMessagePath"
				:send-message-img="sendMessageImg"
                :shadow="shadow"
				:show-message-card="showMessageCard"
                @click="handleClick($event, -1)"
				@contact="handleContact"
                @error="handleError"
                @getphonenumber="handleGetPhoneNumber"
                @getuserinfo="handleGetUserInfo"
                @launchapp="handleLaunchApp"
                @opensetting="handleOpenSetting"
                classes="width-p100 height-p100"
                round
            >
                <view
                    :class="[btnAnimation]"
                    class="inline-block"
                >
                    <uxt-icon
                        :type="icon"
                        size="xxl"
                    ></uxt-icon>
                </view>
            </uxt-button>
        </view>
        <view
            :class="[animation]"
            :key="index"
            class="sub-btn"
            v-for="(btn, index) in btns"
            v-show="showSub"
        >
            <uxt-button
				:app-parameter="appParameter"
                :bg-color="bgColor"
                :disabled="btn.disabled || false"
                :form-type="btn.formType || ''"
                :open-type="btn.openType || ''"
				:lang="lang"
				:session-from="sessionFrom"
				:send-message-title="sendMessageTitle"
				:send-message-path="sendMessagePath"
				:send-message-img="sendMessageImg"
                :shadow="shadow"
				:show-message-card="showMessageCard"
                @click="handleClick($event, index)"
				@contact="handleContact"
                @error="handleError"
                @getphonenumber="handleGetPhoneNumber"
                @getuserinfo="handleGetUserInfo"
                @launchapp="handleLaunchApp"
                @opensetting="handleOpenSetting"
                classes="width-p100 height-p100"
                round
            >
                <uxt-icon
                    :type="btn.icon"
                    size="xxl"
                ></uxt-icon>
                <view
                    class="desc round bg-black text-sm"
                    v-if="btn.text"
                >{{ btn.text }}</view>
            </uxt-button>
        </view>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import btnMixin from '../mixins/btn.js'
import uxtButton from './uxt-button.vue'
import uxtIcon from './uxt-icon.vue'

export default {
    mixins: [baseMixin, btnMixin],
    components: {
        uxtButton,
        uxtIcon
    },
    props: {
        // 位置
        position: {
            type: String,
            default: 'rb',
            validator(value) {
                return ['lt', 'rt', 'lb', 'rb'].includes(value)
            }
        },
        // 子按钮弹出方向
        direction: {
            type: String,
            default: 'col',
            validator(value) {
                return ['row', 'col'].includes(value)
            }
        },
        // x轴边距
        x: {
            type: [Number, String],
            default: 50
        },
        // y轴边距
        y: {
            type: [Number, String],
            default: 50
        },
        // 图标
        icon: {
            type: String,
            default: 'plus'
        },
        // 子按钮 [{ text: '', icon: '', openType: '', formType: '', disabled: false }]
        btns: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            showSub: false,
            animation: '',
            btnAnimation: ''
        }
    },
    computed: {
        shadow() {
            return this.bgColor.replace('gradual-', '').replace('gradual-', '')
        },
        positionStyle() {
            let x = this.getSize(this.x).styles
            let y = this.getSize(this.y).styles
            switch (this.position) {
                case 'lt':
                    return {
                        left: x,
                        top: y
                    }
                case 'rt':
                    return {
                        right: x,
                        top: y
                    }
                case 'lb':
                    return {
                        left: x,
                        bottom: y
                    }
                case 'rb':
                    return {
                        right: x,
                        bottom: y
                    }
            }
        },
        animation2() {
            if (
                (this.position === 'lt' || this.position === 'lb') &&
                this.direction === 'row'
            ) {
                return 'ani-slide-left'
            }
            if (
                (this.position === 'rt' || this.position === 'rb') &&
                this.direction === 'row'
            ) {
                return 'ani-slide-right'
            }
            if (
                (this.position === 'lt' || this.position === 'rt') &&
                this.direction === 'col'
            ) {
                return 'ani-slide-top'
            }
            if (
                (this.position === 'lb' || this.position === 'rb') &&
                this.direction === 'col'
            ) {
                return 'ani-slide-bottom'
            }
        }
    },
    methods: {
        // 展开子按钮
        openSub() {
            this.animation = this.animation2
            this.btnAnimation = 'open'
            this.showSub = true
            setTimeout(() => {
                this.animation = ''
                this.btnAnimation = 'opened'
            }, 500)
        },
        // 收起子按钮
        closeSub() {
            this.animation = `${this.animation2} ani-reverse`
            this.btnAnimation = 'open ani-reverse'
            setTimeout(() => {
                this.showSub = false
                this.animation = ''
                this.btnAnimation = ''
            }, 500)
        },
        // 点击事件
        handleClick(e, index) {
            if (index === -1) {
                if (this.btns.length === 0) {
                    this.$emit('click')
                    return
                }
                this.showSub ? this.closeSub() : this.openSub()
            } else {
                this.closeSub()
                this.$emit('itemclick', index)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.fab {
    position: fixed;
    z-index: 777;
    display: flex;
    align-items: center;
    justify-content: center;
    &.lt,
    &.rt {
        &.row .sub-btn .desc {
            top: 120%;
            width: 44rpx;
            text-align: center;
            line-height: 1.2;
        }
        &.col {
            flex-direction: column;
            .sub-btn {
                margin-top: 10rpx;
            }
        }
    }
    &.rt,
    &.rb {
        &.row {
            flex-direction: row-reverse;
            .sub-btn {
                margin-right: 10rpx;
            }
        }
        &.col .sub-btn .desc {
            right: 120%;
            white-space: nowrap;
        }
    }
    &.lb,
    &.rb {
        &.row .sub-btn .desc {
            bottom: 120%;
            width: 44rpx;
            text-align: center;
            line-height: 1.2;
        }
        &.col {
            flex-direction: column-reverse;
            .sub-btn {
                margin-bottom: 10rpx;
            }
        }
    }
    &.lt,
    &.lb {
        &.row .sub-btn {
            margin-left: 10rpx;
        }
        &.col .sub-btn .desc {
            left: 120%;
            white-space: nowrap;
        }
    }
    .btn {
        width: 90rpx;
        height: 90rpx;
        .open {
            animation-name: rotate;
            animation-duration: 0.5s;
        }
        .opened {
            transform: rotate(225deg);
        }
    }
    .sub-btn {
        width: 80rpx;
        height: 80rpx;
        .desc {
            position: absolute;
            opacity: 0.7;
            padding: 10rpx;
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(225deg);
    }
}
</style>
