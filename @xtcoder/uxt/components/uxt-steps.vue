<template>
    <scroll-view
        :class="[classes, colorClass, bgColorClass]"
        :scroll-into-view="`item${step}`"
        :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorClass
			}
		]"
        scroll-with-animation
        scroll-x
    >
        <view class="steps flex">
            <view
                :class="[index <= step ? colorClass : 'text-grey']"
                :id="`item${index}`"
                :key="index"
                :style="{
					color: index <= step ? colorStyle : ''
				}"
                class="item flex-sub"
                v-for="(item, index) in steps"
            >
                <block v-if="index !== 0">
                    <block v-if="arrow">
                        <view class="arrow">
                            <uxt-icon type="right"></uxt-icon>
                        </view>
                    </block>
                    <block v-else>
                        <view class="line solid-top"></view>
                        <view
                            :class="[colorClass.replace('text-', 'solid-top-'), index <= step ? '' : 'hide']"
                            :style="{
								borderTop: colorStyle ? `solid 1rpx ${colorStyle}` : ''
							}"
                            class="line"
                        ></view>
                    </block>
                </block>
                <view class="text-center">
                    <block v-if="index <= step">
                        <view
                            class="num"
                            v-if="Number.isInteger(item.iconed)"
                        >{{ item.iconed }}</view>
                        <uxt-icon
                            :type="item.iconed || 'title'"
                            size="xl"
                            v-else
                        ></uxt-icon>
                    </block>
                    <block v-else>
                        <view
                            class="num"
                            v-if="Number.isInteger(item.icon)"
                        >{{ item.icon }}</view>
                        <uxt-icon
                            :type="item.icon || 'title'"
                            size="xl"
                            v-else
                        ></uxt-icon>
                    </block>
                </view>
                <view class="text-center margin-top-sm padding-lr-xs">{{ item.text }}</view>
            </view>
        </view>
    </scroll-view>
</template>

<script>
import baseMixin from '../mixins/base.js'
import uxtIcon from './uxt-icon.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtIcon
    },
    props: {
        // 步骤 [{icon: '', iconed: '', text: ''}]
        steps: {
            type: Array,
            default() {
                return []
            }
        },
        // 当前处于哪个步骤，从0开始计数，符合程序员习惯
        step: {
            type: Number,
            default: 0
        },
        // 前头连接，默认是短线连接
        arrow: {
            type: Boolean,
            default: false
        },
        color: {
            default: 'theme'
        },
        bgColor: {
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.steps {
    .item {
        position: relative;
        transition: all 0.3s ease-in-out 0s;
        min-width: 160rpx;
        .line {
            position: absolute;
            width: calc(100% - 80rpx);
            height: 1rpx;
            top: 10px;
            left: calc(0rpx - (100% - 80rpx) / 2);
            transition: all 0.3s ease-in-out 0s;
            &.hide {
                width: 0;
            }
        }
        .arrow {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .num {
            display: inline-flex;
            width: 40rpx;
            height: 40rpx;
            border: solid 1rpx currentColor;
            border-radius: 10000rpx;
            font-size: 24rpx;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
