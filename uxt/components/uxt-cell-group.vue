<template>
    <view
        :class="[
			classes,
			bgColorClass
		]"
        :style="[
			styles,
			{
				backgroundColor: bgColorStyle
			}
		]"
        class="cell-group"
    >
        <view
            :class="[colorClass]"
            :style="{ color: colorStyle }"
            class="padding"
            v-if="title"
        >{{ title }}</view>
        <slot></slot>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import { allTag } from '@/uxt/utils/validator.js'

export default {
    mixins: [baseMixin],
    props: {
        title: {
            type: String
        },
        color: {
            default: 'grey'
        },
        bgColor: {
            default: 'gray'
        }
    },
    created() {
        // if (!allTag(this.$slots.default, 'uxt-cell')) {
        // 	throw new Error('uxt-cell-group组件中只能包含uxt-cell子组件')
        // }
    }
}
</script>

<style lang="scss">
.cell-group {
    position: relative;
}
</style>
