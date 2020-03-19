export default {
	props: {
		// 禁用
		disabled: {
			type: Boolean,
			default: false
		},
		// 开放能力
		openType: {
			type: String,
			default: '',
			validator(value) {
				return ['',
					'feedback',
					'share',
					'getUserInfo',
					'contact',
					'getPhoneNumber',
					'launchApp',
					'openSetting',
					'getAuthorize',
					'contactShare',
					'lifestyle',
					'openGroupProfile'
				].includes(
					value
				)
			}
		},
		// 触发form组件submit/reset
		formType: {
			type: String,
			default: '',
			validator(value) {
				return ['', 'submit', 'reset'].includes(value)
			}
		}
	},
	methods: {
		// 当使用微信小程序开放能力时，发生错误时回调
		handleError(e) {
			this.$emit('error', e)
		},
		// 微信小程序获取用户手机号回调
		handleGetPhoneNumber(e) {
			this.$emit('getphonenumber', e)
		},
		// 微信小程序获取用户信息回调
		handleGetUserInfo(e) {
			this.$emit('getuserinfo', e)
		},
		// 微信小程序打开 APP 成功的回调
		handleLaunchApp(e) {
			this.$emit('launchapp', e)
		},
		// 微信小程序在打开授权设置页并关闭后回调
		handleOpenSetting(e) {
			this.$emit('opensetting', e)
		}
	}
}
