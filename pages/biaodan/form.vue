<template>
	<uxt-page title="表单">
		<uxt-form @submit="submit">
			<!-- <view class="padding-sm solid-bottom">
				<uxt-checkbox-group name="cbxg" type="btn" v-model="checkeds">
					<uxt-checkbox classes="margin-sm" value="1" checked label="选项1"></uxt-checkbox>
					<uxt-checkbox classes="margin-sm" value="2" label="选项2"></uxt-checkbox>
					<uxt-checkbox classes="margin-sm" value="3" label="选项3"></uxt-checkbox>
					<uxt-checkbox classes="margin-sm" value="4" label="选项4"></uxt-checkbox>
				</uxt-checkbox-group>
			</view>
			<view class="padding-sm solid-bottom">
				<uxt-checkbox classes="margin-sm" name="rememberme" v-model="checked" label="记住我"></uxt-checkbox>
			</view>
			<view class="padding-sm solid-bottom">
				<uxt-radio-group name="rdog" type="btn" v-model="radio">
					<uxt-radio classes="margin-sm" value="1" checked label="选项1"></uxt-radio>
					<uxt-radio classes="margin-sm" value="2" label="选项2"></uxt-radio>
					<uxt-radio classes="margin-sm" value="3" label="选项3"></uxt-radio>
					<uxt-radio classes="margin-sm" value="4" label="选项4"></uxt-radio>
				</uxt-radio-group>
			</view> -->
			<uxt-selector
				title="选择"
				v-model="selector"
				:items="['left', 'right']"
			></uxt-selector>
			<!-- <view class="padding-sm solid-bottom">
				<uxt-input type="text" title="文本" name="text"></uxt-input>
			</view> -->
			<uxt-button classes="margin" size="block" form-type="submit">提交</uxt-button>
			<uxt-button classes="margin" size="block" bg-color="red" form-type="reset">重置</uxt-button>
		</uxt-form >
		<!-- <uxt-form>
			<uxt-input
				placeholder="两字短标题+横向排列"
				title="邮件"
				name="b"
				type="text"
			></uxt-input>
		</uxt-form> -->
		<view>{{ret}}</view>
	</uxt-page>
</template>

<script>
import uxtForm from '@xtcoder/uxt/components/uxt-form.vue'
import uxtInput from '@xtcoder/uxt/components/uxt-input.vue'
import uxtCheckbox from '@xtcoder/uxt/components/uxt-checkbox.vue'
import uxtCheckboxGroup from '@xtcoder/uxt/components/uxt-checkbox-group.vue'
import uxtRadio from '@xtcoder/uxt/components/uxt-radio.vue'
import uxtRadioGroup from '@xtcoder/uxt/components/uxt-radio-group.vue'
import uxtButton from '@xtcoder/uxt/components/uxt-button.vue'
import uxtSelector from '@xtcoder/uxt/components/uxt-selector.vue'

export default {
	components: {
		uxtForm,
		uxtInput,
		uxtCheckbox,
		uxtCheckboxGroup,
		uxtRadio,
		uxtRadioGroup,
		uxtButton,
		uxtSelector
	},
	data() {
		return {
			checked: false,
			ret: '',
			checkeds: ['2', '3'],
			radio: '4',
			selector: 0
		}
	},
    methods: {
        submit(e) {
            this.ret = JSON.stringify(e)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
