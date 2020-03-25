<template>
    <!-- 模态加载 -->
    <block v-if="modal">
        <view
            class="modal radius"
            v-show="state === 'load'"
        >
            <image
                class="logo"
                src="/static/logo.png"
            />
            {{loadText}}
        </view>
    </block>
    <!-- 进度条加载 -->
    <block v-else-if="progress">
        <view
            :style="{top: progressTop}"
            class="load-progress flex flex-col"
            v-show="loading > 0"
        >
            <uxt-progress
                :bg-color="bgColor"
                :loading="loading"
                :showLoading="false"
                :styles="{position: 'absolute', height: '4rpx'}"
            ></uxt-progress>
            <uxt-icon
                :color="bgColor"
                :styles="{position: 'absolute', right: '10rpx'}"
                animation="pulse"
                type="icloading"
            ></uxt-icon>
        </view>
    </block>
    <!-- 普通加载框 -->
    <view
        :class="[
			classes,
			(state === 'error' ? '' : colorClass),
			(state === 'error' ? 'bg-red' : bgColorClass)
		]"
        :style="[
			styles,
			{
				color: (state === 'error' ? '' : colorStyle),
				backgroundColor: (state === 'error' ? '' : bgColorStyle)
			}
		]"
        class="loading"
        v-else
    >
        <block v-if="state === 'load'">
            <slot name="load">
                <uxt-icon
                    :bg-color="loadIcon.bgColor"
                    :color="loadIcon.color"
                    :hollow="loadIcon.hollow"
                    :round="loadIcon.round"
                    :size="loadIcon.size"
                    :type="loadIcon.type"
                    animation="spin"
                ></uxt-icon>
                {{loadText}}
            </slot>
        </block>
        <block v-else-if="state === 'over'">
            <slot name="over">
                <uxt-icon
                    :bg-color="overIcon.bgColor"
                    :color="overIcon.color"
                    :hollow="overIcon.hollow"
                    :round="overIcon.round"
                    :size="overIcon.size"
                    :type="overIcon.type"
                ></uxt-icon>
                {{overText}}
            </slot>
        </block>
        <block v-else-if="state === 'error'">
            <slot name="error">
                <uxt-icon
                    :bg-color="errorIcon.bgColor"
                    :color="errorIcon.color"
                    :hollow="errorIcon.hollow"
                    :round="errorIcon.round"
                    :size="errorIcon.size"
                    :type="errorIcon.type"
                ></uxt-icon>
                {{errorText}}
            </slot>
        </block>
    </view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import rrMixin from '../mixins/rr.js'
import uxtIcon from './uxt-icon.vue'
import uxtProgress from './uxt-progress.vue'

export default {
    mixins: [baseMixin, rrMixin],
    components: {
        uxtIcon,
        uxtProgress
    },
    props: {
        // 加载中图标
        loadIcon: {
            type: Object,
            default() {
                return {
                    type: 'icloading'
                }
            }
        },
        // 加载中文本
        loadText: {
            type: String,
            default: '加载中...'
        },
        // 加载完成图标
        overIcon: {
            type: Object,
            default() {
                return {
                    type: 'emoji'
                }
            }
        },
        // 加载完成文本
        overText: {
            type: String,
            default: '没有更多了'
        },
        // 加载失败图标
        errorIcon: {
            type: Object,
            default() {
                return {
                    type: 'roundclosefill'
                }
            }
        },
        // 加载失败文本
        errorText: {
            type: String,
            default: '加载失败'
        },
        // 状态 load/over/error
        state: {
            type: String,
            default: 'load',
            validator(value) {
                return ['load', 'over', 'error'].includes(value)
            }
        },
        // 模态
        modal: {
            type: Boolean,
            default: false
        },
        // 进度条
        progress: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            loading: 0,
            progressTop: `${this.gStatusBarHeight + this.gNavBarHeight}px`,
            tid: 0
        }
    },
    watch: {
        state(newVal, oldVal) {
            switch (newVal) {
                case 'load':
                    this.start()
                    break
                default:
                    this.end()
                    break
            }
        }
    },
    methods: {
        start(ms) {
            this.loading += (100.0 * 100) / (ms || 5000)
            if (this.loading < (ms > 0 ? 100 : 91)) {
                this.tid = setTimeout(() => {
                    this.start(ms)
                }, 100)
            } else if (ms > 0) {
                this.loading = 0
            }
        },
        end() {
            clearTimeout(this.tid)
            this.start(1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.loading {
    position: relative;
    display: block;
    line-height: 3em;
    text-align: center;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 260rpx;
    height: 260rpx;
    background-color: #ffffff;
    box-shadow: 0 0 0rpx 2000rpx rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 28rpx;
    z-index: 999;
    line-height: 2.4em;
    .logo {
        width: 70rpx;
        height: 70rpx;
    }
    &::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        border-radius: 50%;
        width: 200rpx;
        height: 200rpx;
        font-size: 10px;
        border-top: 6rpx solid rgba(0, 0, 0, 0.05);
        border-right: 6rpx solid rgba(0, 0, 0, 0.05);
        border-bottom: 6rpx solid rgba(0, 0, 0, 0.05);
        border-left: 6rpx solid #f37b1d;
        animation: spin 1s infinite linear;
        z-index: -1;
    }
}

.load-progress {
    pointer-events: none;
    top: 0;
    position: fixed;
    width: 100%;
    left: 0;
}
</style>
