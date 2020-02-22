export default {
	props: {
		// 附加到组件内部父级容器的class,只支持公共class
		classes: {
			type: String,
			default: ''
		},
		// 附加到组件内部父级容器的style
		styles: {
			type: Object,
			default () {
				return {};
			}
		},
		// 前景色,df表示跟随主题
		color: {
			type: String,
			default: ''
		},
		// 背景色,df表示跟随主题
		bgColor: {
			type: String,
			default: ''
		},
		// 是否亮色背景, 使用系统预设主题时有效
		light: {
			type: Boolean,
			default: false
		},
		// 是否渐变背景, 使用系统预设主题时有效
		gradual: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		colorClass() {
			return this.getColor(this.color === 'df' ? this.$store.state.uxtStore.theme : this.color, 1).classes;
		},
		colorStyle() {
			return this.getColor(this.color).styles;
		},
		bgColorClass() {
			return this.getColor(this.bgColor === 'df' ? this.$store.state.uxtStore.theme : this.bgColor, this.gradual ? 4 : this.light ? 5 : 2).classes;
		},
		bgColorStyle() {
			return this.getColor(this.bgColor).styles;
		}
	}
};
