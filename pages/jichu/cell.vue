<template>
    <uxt-page :title="title">
        <uxt-cell-group title="基础用法">
            <uxt-cell
                title="单元格"
                value="内容"
            ></uxt-cell>
            <uxt-cell
                desc="描述信息"
                title="单元格"
                value="内容"
            ></uxt-cell>
        </uxt-cell-group>
        <uxt-cell-group title="展示箭头">
            <uxt-cell
                right-arrow
                title="单元格"
                value="内容"
            ></uxt-cell>
            <uxt-cell
                desc="right-arrow=true"
                right-arrow
                title="单元格"
                value="内容"
            ></uxt-cell>
        </uxt-cell-group>
        <uxt-cell-group title="页面跳转">
            <uxt-cell
                desc="url=xxx"
                title="首页"
                url="/"
            ></uxt-cell>
        </uxt-cell-group>
        <uxt-cell-group title="使用插槽">
            <uxt-cell
                desc="slot=left"
                right-arrow
                value="内容"
            >
                <template slot="left">
                    单元格
                    <uxt-tag bg-color="red">标签</uxt-tag>
                </template>
            </uxt-cell>
            <uxt-cell
                desc="slot=right"
                title="单元格"
            >
                <template slot="left">
                    <uxt-icon type="location"></uxt-icon>
                </template>
                <template slot="right">
                    <uxt-icon type="search"></uxt-icon>
                </template>
            </uxt-cell>
        </uxt-cell-group>
        <uxt-cell-group title="更改背景">
            <uxt-cell
                bg-color="light-blue"
                right-arrow
                title="单元格"
                value="内容"
            ></uxt-cell>
            <uxt-cell
                bg-color="light-green"
                desc="bg-color=light-green"
                right-arrow
                title="单元格"
                value="内容"
            ></uxt-cell>
        </uxt-cell-group>
    </uxt-page>
</template>

<script>
import uxtCellGroup from '@xtcoder/uxt/components/uxt-cell-group.vue'
import uxtCell from '@xtcoder/uxt/components/uxt-cell.vue'
import uxtTag from '@xtcoder/uxt/components/uxt-tag.vue'
import uxtIcon from '@xtcoder/uxt/components/uxt-icon.vue'

export default {
    components: {
        uxtCellGroup,
        uxtCell,
        uxtTag,
        uxtIcon
    },
    data() {
        return {
            title: '单元格'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
