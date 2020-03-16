export default {
	install: (Vue, option) => {
		const dialog = p => {
			return new Promise((resolve, reject) => {
				let pages = getCurrentPages()

				// #ifdef H5
				let layout = pages[pages.length - 1].$children[0]
				// #endif

				// #ifndef H5
				let layout = pages[pages.length - 1].$vm.$children[0]
				// #endif

				// console.log(layout)
				layout.showDialog(Object.assign(p, {
					resolve,
					reject
				}))
			})
		}
		Object.assign(dialog, {
			alert(p) {
				return dialog(Object.assign(p, {
					type: 'alert'
				}))
			},
			confirm(p) {
				return dialog(Object.assign(p, {
					type: 'confirm'
				}))
			}
		})
		Vue.prototype.uxtDialog = dialog
	}
}
