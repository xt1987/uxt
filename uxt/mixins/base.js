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
            default() {
                return {}
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
            default: 'df'
        }
    },
    computed: {
        colorClass() {
            return this.getColor(this.color, 'text-').classes
        },
        colorStyle() {
            return this.getColor(this.color).styles
        },
        bgColorClass() {
            return this.getColor(this.bgColor, 'bg-').classes
        },
        bgColorStyle() {
            return this.getColor(this.bgColor).styles
        }
    }
}
