export default {
	props: {
		// 左侧图标
		icon: {
	        type: [String, Object],
	        default() {
				return {
					type: 'dot',
					color: 'theme'
				}
			}
		},
	    // 左侧标题
	    title: {
	        type: String,
	        default: ''
	    },
	    // 右侧内容
	    content: {
	        type: String,
	        default: ''
	    },
	    // 下方说明文字
	    desc: {
	        type: String,
	        default: ''
	    },
		// 是否显示箭头
	    arrow: {
	        type: Boolean,
	        default: false
	    }
	}
}