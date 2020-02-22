export default {
	props: {
		// 提示内容
		placeholder: {
			type: String,
			default: '请输入'
		},
		// 输入框类型 text/password/number/idcard/digit
		type: {
			type: String,
			default: 'text',
			validator(value) {
				return ['text', 'password', 'number', 'idcard', 'digit'].includes(value);
			}
		},
		// 值
		value: {
			type: String
		},
		// 最大输入长度,-1不限制长度
		maxlength: {
			type: Number,
			default: -1
		},
		// 是否聚焦
		focus: {
			type: Boolean,
			default: false
		},
		// 键盘右下角按钮的文字,type='text'时生效
		// send:发送 search:搜索 next:下一个 go:前往 done:完成
		confirmType: {
			type: String,
			default: 'done',
			validator(value) {
				return ['send', 'search', 'next', 'go', 'done'].includes(value);
			}
		},
		// 自动聚焦时有效,选中的起止位置
		selection: {
			type: Array,
			default () {
				return [-1, -1]
			},
			validator(value) {
				return value.length === 2;
			}
		},
		// 是否禁用
		disabled: {
			type: Boolean,
			default: false
		},
		// 清除按钮,双向绑定时有效
		clearable: {
			type: Boolean,
			default: false
		}
	}
};
