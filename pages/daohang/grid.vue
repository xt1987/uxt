<template>
    <uxt-page :title="title">
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            title="基本用法"
        ></uxt-title-bar>
        <uxt-grid>
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
                icon="image-fill"
                text="文字"
                v-for="(item, i) in 4"
            ></uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            sub-title="grid指定col"
            title="自定义列数"
        ></uxt-title-bar>
        <uxt-grid col="3">
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
                icon="image-fill"
                text="文字"
                v-for="(item, i) in 6"
            ></uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            sub-title="grid指定border"
            title="无边框"
        ></uxt-title-bar>
        <uxt-grid
            :border="false"
            col="3"
        >
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
                icon="image-fill"
                text="文字"
                v-for="(item, i) in 6"
            ></uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            sub-title="grid指定square=true"
            title="正方形格子"
        ></uxt-title-bar>
        <uxt-grid
            col="3"
            square
        >
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
                icon="image-fill"
                text="文字"
                v-for="(item, i) in 3"
            ></uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            sub-title="grid指定spacing"
            title="格子间距"
        ></uxt-title-bar>
        <uxt-grid
            :spacing="20"
            bg-color=" "
            col="3"
            square
        >
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
                bg-color="white"
                icon="image-fill"
                text="文字"
                v-for="(item, i) in 6"
            ></uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            title="角标"
			sub-title="badge"
        ></uxt-title-bar>
        <uxt-grid>
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
				:badge="`${i + 1}`"
                icon="image-fill"
                text="文字"
                v-for="(item, i) in 4"
            ></uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            title="自定义内容"
        ></uxt-title-bar>
        <uxt-grid square>
            <uxt-grid-item
                :key="i"
                @click="click(i + 1)"
                v-for="(item, i) in 4"
            >
                <text class="text-xxl">{{ i + 1 }}</text>
            </uxt-grid-item>
        </uxt-grid>
        <uxt-title-bar
            bg-color=" "
            classes="margin-top-sm"
            title="背景色"
        ></uxt-title-bar>
        <uxt-grid square>
            <uxt-grid-item
                @click="click(1)"
                bg-color="red"
                icon="image-fill"
                text="文字"
            ></uxt-grid-item>
            <uxt-grid-item
                @click="click(2)"
                bg-color="green"
                icon="image-fill"
                text="文字"
            ></uxt-grid-item>
            <uxt-grid-item
                @click="click(3)"
                bg-color="blue"
                icon="image-fill"
                text="文字"
            ></uxt-grid-item>
            <uxt-grid-item
                @click="click(4)"
                bg-color="yellow"
                icon="image-fill"
                text="文字"
            ></uxt-grid-item>
        </uxt-grid>
    </uxt-page>
</template>

<script>
import uxtTitleBar from '@xtcoder/uxt/components/uxt-title-bar.vue'
import uxtGrid from '@xtcoder/uxt/components/uxt-grid.vue'
import uxtGridItem from '@xtcoder/uxt/components/uxt-grid-item.vue'

export default {
    components: {
        uxtTitleBar,
        uxtGrid,
        uxtGridItem
    },
    data() {
        return {
            title: '宫格'
        }
    },
    methods: {
        click(index) {
            this.uxtToast({ message: `点击了第 ${index} 个格子` })
        }
    }
}
</script>

<style lang="scss" scoped></style>
