<template>
    <view
        :class="[
			classes,
			bgColorClass,
			colorClass,
			{
				'align-center': direction === 'row' && type !== 'textarea',
				'align-start': direction === 'row' && type === 'textarea',
				'flex-col': direction === 'col'
			}
		]"
        :style="[
			styles,
			{
				color: colorStyle,
				backgroundColor: bgColorStyle
			}
		]"
        class="input padding-sm flex justify-between solid-bottom"
    >
        <view
            :class="[
				{
					'padding-right-sm': direction === 'row',
					'padding-bottom-sm': direction === 'col'
				}
			]"
            :style="{width: titleWidthStyle}"
            v-if="title !== ''"
        >
            <text
                class="text-red"
                v-if="star"
            >*</text>
            {{title}}
        </view>
        <view class="flex-sub flex align-center">
            <slot name="left"></slot>
            <!-- 输入 -->
            <block v-if="isInput">
                <input
                    :confirm-type="confirmType"
                    :disabled="disabled"
                    :focus="focus"
                    :maxlength="maxlength"
                    :placeholder="inputPlaceholder"
                    :selection-end="selection[1]"
                    :selection-start="selection[0]"
                    :type="inputType"
                    :value="val"
                    @input="handleInput"
                    class="flex-sub"
                    placeholder-class="text-grey"
                />
                <uxt-icon
                    @click="handleClear"
                    color="grey"
                    type="roundclosefill"
                    v-if="clearable && !disabled && val !== ''"
                ></uxt-icon>
                <uxt-icon
                    :type="passIcon"
                    @click="handleSwitchPass"
                    color="grey"
                    v-if="type === 'password'"
                ></uxt-icon>
            </block>
            <!-- textarea -->
            <block v-else-if="type === 'textarea'">
                <textarea
                    :auto-height="autoHeight"
                    :confirm-type="confirmType"
                    :disabled="disabled"
                    :focus="focus"
                    :maxlength="maxlength"
                    :placeholder="inputPlaceholder"
                    :selection-end="selection[1]"
                    :selection-start="selection[0]"
                    :type="inputType"
                    :value="val"
                    @input="handleInput"
                    class="flex-sub"
                    placeholder-class="text-grey"
                    style="width: auto;"
                />
            </block>
            <!-- 单选picker -->
            <block v-else-if="type === 'selector'">
                <picker
                    :disabled="disabled"
                    :mode="inputType"
                    :range="range"
                    :range-key="rangeKey"
                    :value="val"
                    @change="handleSelectorChange"
                    class="flex-sub text-right"
                >
                    <text
                        class="text-grey"
                        v-if="val === -1"
                    >{{pickerPlaceholder}}</text>
                    <block v-else>{{rangeKey ? range[value][rangeKey] : range[value]}}</block>
                    <uxt-icon
                        classes="margin-left-sm"
                        type="right"
                    ></uxt-icon>
                </picker>
            </block>
            <!-- 多选picker -->
            <block v-else-if="type === 'multiSelector'">
                <picker
                    :disabled="disabled"
                    :mode="inputType"
                    :range="multiSelectorRange"
                    :range-key="rangeKey"
                    :value="val"
                    @change="handleMultiSelectorChange"
                    @columnchange="handleMultiSelectorColumnChange"
                    class="flex-sub text-right"
                >
                    <text
                        class="text-grey"
                        v-if="multiSelectorShowPH"
                    >{{pickerPlaceholder}}</text>
                    <block v-else>{{multiSelectorText}}</block>
                    <uxt-icon
                        classes="margin-left-sm"
                        type="right"
                    ></uxt-icon>
                </picker>
            </block>
            <!-- date/time -->
            <block v-else-if="type === 'time' || type === 'date'">
                <picker
                    :disabled="disabled"
                    :end="range[1] || ''"
                    :fields="fields"
                    :mode="inputType"
                    :start="range[0] || ''"
                    :value="val"
                    @change="handleDTChange"
                    class="flex-sub text-right"
                >
                    <text
                        class="text-grey"
                        v-if="!val"
                    >{{pickerPlaceholder}}</text>
                    <block v-else>{{val}}</block>
                    <uxt-icon
                        classes="margin-left-sm"
                        type="right"
                    ></uxt-icon>
                </picker>
            </block>
            <!-- multiCheck -->
            <block v-else-if="type === 'multiCheck'">
                <view
                    @click="handleMultiCheckShow"
                    class="flex-sub text-right"
                >
                    <text
                        class="text-grey"
                        v-if="multiCheckShowPH"
                    >{{pickerPlaceholder}}</text>
                    <block v-else>{{multiCheckText}}</block>
                    <uxt-icon
                        classes="margin-left-sm"
                        type="right"
                    ></uxt-icon>
                </view>
                <uxt-modal
                    max-height="30%"
                    position="bottom"
                    v-model="multiCheckShow"
                >
                    <view class="modal-top bg-white solid-bottom text-lg flex justify-between">
                        <view
                            @click="handleMultiCheckCancel"
                            class="padding-sm"
                        >取消</view>
                        <view
                            @click="handleMultiCheckChange"
                            class="padding-sm text-blue"
                        >确定</view>
                    </view>
                    <view class="modal-content padding-sm">
                        <view
                            :class="[
								{
									'solid-bottom': index !== range.length - 1
								}
							]"
                            :key="index"
                            class="padding-sm flex justify-between"
                            v-for="(item, index) in range"
                        >
                            {{rangeKey ? item[rangeKey] : item}}
                            <uxt-checkbox
                                :values="valueKey ? item[valueKey] : (rangeKey ? item[rangeKey] : item)"
                                v-model="val"
                            ></uxt-checkbox>
                        </view>
                    </view>
                </uxt-modal>
            </block>
            <view
                class="flex-sub"
                v-else
            ></view>
            <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
import baseMixin from '@/uxt/mixins/base.js'
import inputMixin from '@/uxt/mixins/input.js'
import uxtIcon from '@/uxt/components/uxt-icon.vue'
import uxtModal from '@/uxt/components/uxt-modal.vue'
import uxtCheckbox from '@/uxt/components/uxt-checkbox.vue'

export default {
    mixins: [baseMixin, inputMixin],
    components: {
        uxtIcon,
        uxtModal,
        uxtCheckbox
    },
    props: {
        // 方向 row/col
        direction: {
            type: String,
            default: 'row',
            validator(value) {
                return ['row', 'col'].includes(value)
            }
        },
        // 标题
        title: {
            type: String,
            default: ''
        },
        // 红星
        star: {
            type: Boolean,
            default: false
        },
        // 标题宽度，0表示自动宽度，direction=row时有效
        titleWidth: {
            type: Number,
            default: 0
        },
        // textarea自动高度
        autoHeight: {
            type: Boolean,
            default: false
        },
        // selector/multiSelector/multiCheck时，数据源
        // date/time时，有效区间 ['YYYY-MM-DD', ''YYYY-MM-DD'']/['hh:mm', 'hh:mm']
        range: {
            type: Array,
            default() {
                return []
            }
        },
        // range为Array<Object>时，指定要显示的key
        rangeKey: {
            type: String
        },
        // multiSelector时的显示分隔符
        split: {
            type: String,
            default: ','
        },
        // datePicker时指定选择的粒度
        fields: {
            type: String,
            default: 'day',
            validator(value) {
                return ['day', 'month', 'year'].includes(value)
            }
        },
        // multiCheck时指定值的key
        valueKey: {
            type: String
        },
        bgColor: {
            default: 'white'
        },
        value: {
            type: [String, Number, Array]
        },
        type: {
            type: String,
            default: '',
            validator(value) {
                return [
                    '',
                    'text',
                    'password',
                    'number',
                    'idcard',
                    'digit',
                    'textarea',
                    'selector',
                    'multiSelector',
                    'time',
                    'date',
                    'multiCheck'
                ].includes(value)
            }
        }
    },
    data() {
        return {
            val: this.getVal(this.value),
            passIcon: 'attentionfill',
            password: this.type === 'password',
            multiSelectorRange:
                this.type === 'multiSelector'
                    ? this.getMultiSelectorRange(this.range).range
                    : null, // multiSelector联动时需要重组range
            multiSelectorShowPH:
                this.type === 'multiSelector'
                    ? this.getVal(this.value).length === 0
                    : null, // multiSelector是否显示placeholder
            multiSelectorText: '', // multiSelector显示文本
            multiCheckShowPH:
                this.type === 'multiCheck'
                    ? this.getVal(this.value).length === 0
                    : null, // multiCheck是否显示placeholder
            multiCheckShow: false, // multiCheck显示弹出层
            multiCheckText: '' // multiCheck显示文本
        }
    },
    computed: {
        titleWidthStyle() {
            return this.getSize(this.direction === 'col' ? 0 : this.titleWidth)
                .styles
        },
        inputType() {
            if (this.type === 'password' && !this.password) {
                return 'text'
            } else {
                return this.type
            }
        },
        // 是否输入框
        isInput() {
            return ['text', 'password', 'number', 'idcard', 'digit'].includes(
                this.type
            )
        },
        // 选择时显示请选择
        pickerPlaceholder() {
            return this.placeholder === '请输入'
                ? this.disabled
                    ? ''
                    : '请选择'
                : this.placeholder
        },
        inputPlaceholder() {
            return this.disabled && this.placeholder === '请输入'
                ? ''
                : this.placeholder
        }
    },
    methods: {
        // 输入处理事件
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        // 清除输入内容
        handleClear() {
            this.$emit('input', '')
            this.$emit('clear', '')
        },
        // 切换密码显示
        handleSwitchPass() {
            this.password = !this.password
            if (this.password) {
                this.passIcon = 'attentionfill'
            } else {
                this.passIcon = 'attentionforbidfill'
            }
        },
        // 根据不同type设置初始值
        getVal(value) {
            if (
                this.type === 'selector' &&
                !value &&
                value !== 0 &&
                value !== ''
            ) {
                return -1
            }
            if (this.type === 'multiSelector' || this.type === 'multiCheck') {
                if (!value) {
                    return []
                } else {
                    return Object.assign([], this.value)
                }
            }
            return value
        },
        // selector确定
        handleSelectorChange(e) {
            if (this.val !== -1 && this.val === e.detail.value) {
                return
            }
            this.val = e.detail.value === -1 ? 0 : e.detail.value
            this.$emit('change', this.val)
            this.$emit('input', this.val)
        },
        // multiSelector是否联动
        isCascade(range) {
            return range[1][0] instanceof Array
        },
        // 联动时range需要转换
        getMultiSelectorRange(range, column = 0, index = 0) {
            if (!this.isCascade(range)) {
                return {
                    range,
                    select: null
                }
            }

            const res = {
                range: [],
                select: Object.assign([], this.val)
            }

            if (res.select.length === 0) {
                range.forEach(() => res.select.push(0))
            }

            res.select[column] = index
            for (let i = column + 1; i < res.select.length; i++) {
                res.select[i] = 0
            }

            for (let i = 0; i < range.length; i++) {
                let d = Object.assign([], range[i])
                for (let j = 0; j < i; j++) {
                    d = Object.assign([], d[res.select[j]])
                }
                res.range.push(d)
            }
            return res
        },
        // multiSelector列变换时
        handleMultiSelectorColumnChange(e) {
            const d = this.getMultiSelectorRange(
                this.range,
                e.detail.column,
                e.detail.value
            )
            this.multiSelectorRange = d.range
            this.val = d.select
        },
        // multiSelector确定
        handleMultiSelectorChange(e) {
            if (e.detail.value.length === 0) {
                this.range.forEach(() => this.val.push(0))
            } else {
                this.val = e.detail.value
            }

            // 处理显示文本
            let arr = []
            for (let i = 0; i < this.range.length; i++) {
                if (this.rangeKey) {
                    arr.push(
                        this.multiSelectorRange[i][this.val[i]][this.rangeKey]
                    )
                } else {
                    arr.push(this.multiSelectorRange[i][this.val[i]])
                }
            }
            this.multiSelectorText = arr.join(this.split)
            this.multiSelectorShowPH = false

            this.$emit('change', this.val)
            this.$emit('input', this.val)
        },
        // 日期时间确定
        handleDTChange(e) {
            if (this.val === e.detail.value) {
                return
            }
            this.val = e.detail.value
            this.$emit('change', this.val)
            this.$emit('input', this.val)
        },
        // 显示multiCheck model
        handleMultiCheckShow() {
            this.multiCheckShow = true
            this.val = this.getVal(this.value)
        },
        // 取消multiCheck model
        handleMultiCheckCancel() {
            this.multiCheckShow = false
        },
        // multiCheck确定
        handleMultiCheckChange() {
            // console.log(this.val);
            if (this.val.length === 0) {
                this.multiCheckShowPH = true
            } else {
                this.multiCheckText = this.val.join(',')
                this.multiCheckShowPH = false
            }
            this.$emit('change', this.val)
            this.$emit('input', this.val)
            this.multiCheckShow = false
        }
    },
    watch: {
        value(newVal) {
            this.val = this.getVal(newVal)
        },
        range(newVal) {
            if (this.type === 'multiSelector') {
                this.multiSelectorRange = this.getMultiSelectorRange(
                    newVal
                ).range
            }
        }
    }
}
</script>

<style lang="scss">
.input {
    .modal-top {
        position: fixed;
        z-index: 1;
        width: 100%;
    }
    .modal-content {
        margin-top: 80rpx;
    }
}
</style>
