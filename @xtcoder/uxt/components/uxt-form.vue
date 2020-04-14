<template>
	<view class="form">
		<slot></slot>
	</view>
</template>

<script>
import { deepCopy } from '../utils/util.js'

export default {
	name: 'uxt-form',
	data() {
		return {
			formId: Math.random(),
			initValues: {},
			values: {}
		}
	},
	provide() {
		return {
			formId: this.formId
		}
	},
	created() {
		uni.$on(`forminit.${this.formId}`, res => {
			this.initValues[res.name] = deepCopy(res.value)
			this.values = deepCopy(this.initValues)
		})
		uni.$on(`formchange.${this.formId}`, res => {
			this.values[res.name] = res.value
		})
		uni.$on(`formsubmit.${this.formId}`, () => {
			this.$emit('submit', deepCopy(this.values))
		})
		uni.$on(`formreset.${this.formId}`, () => {
			uni.$emit(`reset.${this.formId}`, this.initValues)
			this.$emit('reset')
		})
	},
	destroyed() {
		uni.$off(`forminit.${this.formId}`)
		uni.$off(`formchange.${this.formId}`)
		uni.$off(`formsubmit.${this.formId}`)
		uni.$off(`formreset.${this.formId}`)
	}
}
</script>

<style lang="scss" scoped>
.form {
	// display: inline-block;
	position: relative;
}
</style>
