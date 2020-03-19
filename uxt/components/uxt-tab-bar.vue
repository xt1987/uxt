<template>
    <view
        :class="[
			classes
		]"
        :style="[
			styles
		]"
        class="tab-bar flex"
    >
        <view
            :class="[
				{
					add: item.type === 'add'
				},
				item.cls,
				(item.colorClass || colorClass),
				(item.bgColorClass || bgColorClass)
			]"
            :key="index"
            :style="[
				{
					color: (item.colorStyle || colorStyle),
					backgroundColor: (item.bgColorStyle || bgColorStyle)
				}
			]"
            @click="onItemClick(index)"
            class="item flex align-center justify-center"
            v-for="(item, index) in items2"
        >
            <uxt-badge
                :badge="item.badge"
                classes="padding-lr-sm"
                v-if="item.type !== 'btn'"
            >
                <view
                    :class="[
						item.type === 'add' ? item.addBgColorClass : ''
					]"
                    :style="[
						{
							backgroundColor: item.type === 'add' ? item.addBgColorStyle : ''
						}
					]"
                    class="icon-img flex align-center justify-center"
                    v-if="item.icon"
                >
                    <uxt-icon
                        :animation="item.icon.animation"
                        :color="item.icon.color"
                        :size="item.icon.size || 'xxl'"
                        :type="item.icon.type"
                        v-if="item.isIcon"
                    ></uxt-icon>
                    <view
                        class="icon flex align-center justify-center"
                        v-else
                    >
                        <image
                            :src="item.icon"
                            class="img"
                        />
                    </view>
                </view>
                <view class="text-sm">{{item.text}}</view>
            </uxt-badge>
            <uxt-button
                :bg-color="item.btnBgColor"
                :class="[item.round ? '' : 'width-p100 height-p100']"
                :classes="item.round ? '' : 'width-p100 height-p100'"
                :color="item.btnColor"
                :round="item.round"
                :shadow="item.shadow"
                v-else
            >{{item.text}}</uxt-button>
        </view>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import uxtBadge from '@/uxt/components/uxt-badge.vue'
import uxtIcon from '@/uxt/components/uxt-icon.vue'
import uxtButton from '@/uxt/components/uxt-button.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtBadge,
        uxtIcon,
        uxtButton
    },
    props: {
        /**
         * 选项
         * [
         *     {
         *         type: 选项类型，null/'add'/'btn',
         *         icon: iconObj/图片地址,
         *         text: 文字,
         *         color: 选项前景色,
         *         bgColor: 选项背景色,
         *         addBgColor: add选项圆圈背景色,
         *         btnColor: btn选项前景色,
         *         btnBgColor: btn选项背景色,
         *         round: 是否圆弧btn,
         *         shadow: btn阴影
         *     },
         *     ...
         * ]
         */
        items: {
            type: Array,
            default() {
                return []
            },
            required: true
        },
        color: {
            default: 'grey'
        },
        bgColor: {
            default: 'white'
        }
    },
    computed: {
        items2() {
            const items = this.items
            let hasBtn = false
            for (let item of items) {
                if (item.type === 'btn') {
                    hasBtn = true
                    break
                }
            }

            for (let item of items) {
                item.isIcon = typeof item.icon === 'object'
                const color = this.getColor(item.color, 'text-')
                const bgColor = this.getColor(item.bgColor, 'bg-')
                item.colorClass = color.classes
                item.colorStyle = color.styles
                item.bgColorClass = bgColor.classes
                item.bgColorStyle = bgColor.styles
                item.round = item.round || false
                // add btn bgColor
                if (item.type === 'add') {
                    const addBgColor = this.getColor(
                        item.addBgColor || 'df',
                        'bg-'
                    )
                    item.addBgColorClass = addBgColor.classes
                    item.addBgColorStyle = addBgColor.styles
                }
                // item width
                if (!hasBtn || item.type === 'btn') {
                    item.cls = 'flex-sub'
                } else {
                    item.cls = 'padding-lr-sm'
                }
            }

            return items
        }
    },
    methods: {
        onItemClick(index) {
            this.$emit('itemclick', index)
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-bar {
    height: 100rpx;
    .item {
        height: 100%;
        text-align: center;
        .icon {
            margin: 0 auto;
            .img {
                width: 50rpx;
                height: 50rpx;
                display: inline-block;
            }
        }
    }
    .add {
        position: relative;
        z-index: 888;
        padding-top: 50rpx;
        .icon-img {
            position: absolute;
            width: 70rpx;
            z-index: 888;
            height: 70rpx;
            border-radius: 50%;
            line-height: 70rpx;
            font-size: 50rpx;
            top: -84rpx;
            left: 0;
            right: 0;
            margin: auto;
            padding: 0;
        }
        &::before {
            content: '';
            position: absolute;
            width: 100rpx;
            height: 100rpx;
            top: -40rpx;
            left: 0;
            right: 0;
            margin: auto;
            box-shadow: 0 -3rpx 8rpx rgba(0, 0, 0, 0.08);
            border-radius: 50rpx;
            background-color: inherit;
        }
    }
}
</style>
