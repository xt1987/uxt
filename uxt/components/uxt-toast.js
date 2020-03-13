export default {
    install: (Vue, option) => {
        Vue.prototype.uxtToast = p => {
            let pages = getCurrentPages()

            // #ifdef H5
            let layout = pages[pages.length - 1].$children[0]
            // #endif

            // #ifndef H5
            let layout = pages[pages.length - 1].$vm.$children[0]
            // #endif

            // console.log(layout)
            layout.showToast(p)
            return Object.assign(layout.toast, {
                close() {
                    layout.closeToast()
                }
            })
        }
    }
}
