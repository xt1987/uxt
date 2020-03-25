<template>
    <scroll-view
        :class="[
			classes,
			bgColorClass,
			{
				'text-center': align === 'center'
			}
		]"
        :scroll-left="scrollLeft"
        :style="[
			styles,
			{
				backgroundColor: bgColorStyle
			}
		]"
        class="tab"
        scroll-with-animation
        scroll-x
    >
        <view :class="align === 'avg' ? 'flex text-center' : ''">
            <view
                :class="[`tab${index}`, index === tabIndex ? `${activeColorClass} active` : colorClass, align === 'avg' ? 'flex-sub' : '']"
                :key="index"
                :style="{ color: index === tabIndex ? activeColorStyle : colorStyle }"
                @click="handleItemClick(index)"
                class="item"
                v-for="(tab, index) in tabs"
            >
                <uxt-icon
                    :animation="tab.icon.animation"
                    :bg-color="tab.icon.bgColor"
                    :color="tab.icon.color"
                    :hollow="tab.icon.hollow"
                    :round="tab.icon.round"
                    :size="tab.icon.size"
                    :type="tab.icon.type"
                    v-if="tab.icon"
                ></uxt-icon>
                <text>{{ tab.text }}</text>
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
        // 排列方式 ''默认 'center'居中 'avg'平分
        align: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'center', 'avg'].includes(value)
            }
        },
        // 选中前景色
        activeColor: {
            type: String,
            default: 'theme'
        },
        // tab项 格式：{icon: iconObj, text: ''}
        tabs: {
            type: Array,
            default() {
                return []
            },
            required: true
        },
        // 当前选中tab索引
        activeIndex: {
            type: Number,
            default: 0
        },
        // 背景色
        bgColor: {
            default: 'white'
        }
    },
    data() {
        return {
            scrollLeft: 0,
            tabIndex: this.activeIndex
        }
    },
    computed: {
        activeColorClass() {
            return this.getColor(this.activeColor, 'text-').classes
        },
        activeColorStyle() {
            return this.getColor(this.activeColor).styles
        }
    },
    watch: {
        activeIndex(newVal, oldVal) {
            if (newVal < this.tabs.length) {
                this.handleItemClick(newVal)
            }
        }
    },
    methods: {
        async handleItemClick(index) {
            if (this.tabIndex === index) {
                return false
            } else {
                let width = 0
                for (let i = 0; i < index - 1; i++) {
                    let result = await this.getElSize(`.tab${i}`, this)
                    width += result.width + 10
                }
                this.scrollLeft = width
                this.tabIndex = index
                this.$emit('itemclick', index)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tab {
    position: relative;
    white-space: nowrap;
    .item {
        height: 90rpx;
        display: inline-block;
        line-height: 90rpx;
        padding: 0 20rpx;
        &.active {
            border-bottom: 4rpx solid;
        }
    }
}
</style>
