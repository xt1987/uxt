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
		},
		// 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
		appParameter: {
			type: String
		},
		// 指定是否阻止本节点的祖先节点出现点击态
		hoverStopPropagation: {
			type: Boolean,
			default: false
		},
		// 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
		lang: {
			type: String,
			default: 'en'
		},
		// 会话来源，open-type="contact"时有效
		sessionFrom: {
			type: String
		},
		// 会话内消息卡片标题，open-type="contact"时有效
		sendMessageTitle: {
			type: String,
			default: '当前标题'
		},
		// 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
		sendMessagePath: {
			type: String,
			default: '当前分享路径'
		},
		// 会话内消息卡片图片，open-type="contact"时有效
		sendMessageImg: {
			type: String,
			default: '截图'
		},
		// 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
		showMessageCard: {
			type: Boolean,
			default: false
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
		},
		// 微信小程序客服消息回调
		handleContact(e) {
			this.$emit('contact', e)
		}
	}
}
