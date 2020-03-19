<template>
    <view
        :class="[classes, bgColorClass]"
        :style="[
			styles,
			{
				backgroundColor: bgColorStyle
			}
		]"
        class="title-bar padding-sm"
    >
        <uxt-icon
            :animation="icon.animation"
            :bg-color="icon.bgColor"
            :color="icon.color || 'df'"
            :hollow="icon.hollow"
            :round="icon.round"
            :size="icon.size || 'xl'"
            :type="icon.type"
            v-if="icon"
        ></uxt-icon>
        <view class="title">
            <text
                :class="[
					colorClass,
					titleSizeClass,
					{
						'text-bold': titleBold
					}
				]"
                :style="{
					color: colorStyle,
					fontSize: titleSizeStyle
				}"
            >{{ title }}</text>
            <!-- 英文标题阴影 -->
            <text
                :class="[
					enTitleColorClass,
					titleSizeClass,
					{
						'text-bold': titleBold
					}
				]"
                :style="{
					color: enTitleColorStyle,
					width: `${title.length}em`
				}"
                class="underline shadow en-title text-ABC text-shadow"
                v-if="enTitle"
            >{{ enTitle }}</text>
            <!-- 下划线 -->
            <text
                :class="underlineColorClass"
                :style="{
					backgroundColor: underlineColorStyle,
					width: `${title.length}em`
				}"
                class="underline"
                v-else-if="underline"
            ></text>
            <!-- 阴影 -->
            <text
                :class="shadowColorClass"
                :style="{
					backgroundColor: shadowColorStyle,
					width: `${title.length}em`
				}"
                class="underline shadow"
                v-else-if="shadow"
            ></text>
            <!-- 副标题 -->
            <text
                class="sub-title text-grey margin-left-sm"
                v-if="subTitle"
            >{{ subTitle }}</text>
        </view>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import uxtIcon from '@/uxt/components/uxt-icon.vue'

export default {
    mixins: [baseMixin],
    components: {
        uxtIcon
    },
    props: {
        // 图标 iconObj
        icon: {
            type: Object,
            default() {
                return {
                    type: 'title'
                }
            }
        },
        // 标题
        title: {
            type: String,
            default: '标题'
        },
        // 标题大小
        titleSize: {
            type: [Number, String]
        },
        // 标题是否加粗
        titleBold: {
            type: Boolean,
            default: false
        },
        // 副标题
        subTitle: {
            type: String
        },
        // 英文标题
        enTitle: {
            type: String
        },
        // 是否下划线
        underline: {
            type: Boolean,
            default: false
        },
        // 下划线样式，支持渐变class
        underlineColor: {
            type: String
        },
        // 是否阴影
        shadow: {
            type: Boolean,
            default: false
        },
        bgColor: {
            default: 'white'
        }
    },
    computed: {
        enTitleColorClass() {
            return this.getColor(this.color, 'text-').classes
        },
        enTitleColorStyle() {
            return this.getColor(this.color, 'text-').styles
        },
        underlineColorClass() {
            return this.getColor(this.underlineColor || this.color, 'bg-')
                .classes
        },
        underlineColorStyle() {
            return this.getColor(this.underlineColor || this.color, 'bg-')
                .styles
        },
        shadowColorClass() {
            return this.getColor(this.color, 'bg-').classes
        },
        shadowColorStyle() {
            return this.getColor(this.color, 'bg-').styles
        },
        titleSizeClass() {
            return this.getSize(this.titleSize).classes
        },
        titleSizeStyle() {
            return this.getSize(this.titleSize).styles
        }
    }
}
</script>

<style lang="scss" scoped>
.title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    .title {
        display: inline-block;
        position: relative;
    }
    .underline {
        position: absolute;
        bottom: -0.3em;
        height: 4rpx;
        left: 0;
        &.shadow {
            bottom: -0.2em;
            height: 0.6em;
            opacity: 0.3;
            border-radius: 6rpx;
            left: 0.5em;
            box-shadow: none;
            &.en-title {
                bottom: -0.1em;
            }
        }
        &.sub-title {
            bottom: -0.6em;
            height: 1em;
        }
    }
}
</style>
