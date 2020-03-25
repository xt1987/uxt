import Vue from 'vue'

import uxtNotify from './components/uxt-notify.js'
import uxtToast from './components/uxt-toast.js'
import uxtDialog from './components/uxt-dialog.js'

// const baseUrl = 'https://localhost/';
// const baseUrl = 'http://192.168.24.107/';
// const baseUrl = 'https://app.huntkey.com/'
// const env = 'zbox/test/www/'
// const env = 'zbox/dev/';

// 取颜色, 返回: {classes: '', styles: ''}
const getColor = (color, prev) => {
    if (color && typeof color === 'string') {
        if (color.startsWith('#')) {
            return {
                classes: '',
                styles: color
            }
        } else {
            return {
                classes: `${prev}${color}`,
                styles: ''
            }
        }
    } else {
        return {
            classes: '',
            styles: ''
        }
    }
}

// 取大小 返回: {classes: '', styles: ''}
const getSize = size => {
    if (size && (typeof size === 'string' || (typeof size === 'number' && size > 0))) {
        if (typeof size === 'number' && size > 0) {
            return {
                classes: '',
                styles: `${size}rpx`
            }
        } else if (size.endsWith('px') || size.endsWith('%')) {
            return {
                classes: '',
                styles: size
            }
        } else {
            return {
                classes: `text-${size}`,
                styles: ''
            }
        }
    } else {
        return {
            classes: '',
            styles: ''
        }
    }

    return size && typeof size === 'string' ? size : ''
}

const getElSize = (selector, component) => {
	//得到元素的size
	return new Promise((resolve, reject) => {
	    uni.createSelectorQuery()
	        .in(component)
	        .select(selector)
	        .fields(
	            {
	                size: true,
	                scrollOffset: true
	            },
	            data => {
	                resolve(data)
	            }
	        )
	        .exec()
	})
}

export default {
    install() {
        Vue.use(uxtNotify)
        Vue.use(uxtToast)
        Vue.use(uxtDialog)

        Object.assign(Vue.prototype, {
            getColor,
            getSize,
			getElSize
        })

        // 取状态栏和顶部导航栏高度
        uni.getSystemInfo({
            success: function(e) {
                let statusBarHeight = e.statusBarHeight
                let windowHeight = e.windowHeight

                // #ifndef MP
                if (e.platform == 'android') {
                    Vue.prototype.gNavBarHeight = 50
                } else {
                    Vue.prototype.gNavBarHeight = 45
                }
                // #endif

                // #ifdef MP-WEIXIN
                let custom = wx.getMenuButtonBoundingClientRect()
                // Vue.prototype.Custom = custom;
                console.log(custom)
                let navBarHeight = custom.bottom + custom.top - statusBarHeight * 2
                console.log('navBarHeight')
                console.log(navBarHeight)
                if (navBarHeight < 42) {
                    navBarHeight = 42
                }
                Vue.prototype.gNavBarHeight = navBarHeight

                statusBarHeight = custom.bottom
                // #endif

                // #ifdef MP-ALIPAY
                Vue.prototype.gNavBarHeight = e.titleBarHeight
                // #endif

                console.log('statusBarHeight')
                console.log(statusBarHeight)
                Vue.prototype.gStatusBarHeight = statusBarHeight
                Vue.prototype.gWindowHeight = windowHeight
                console.log('windowHeight')
                console.log(windowHeight)
            }
        })

        // 添加rest请求方法
        // this.rest = {}
        // ['get', 'post', 'put', 'delete'].forEach(m => {
        // 	this.rest[m] = ps => {
        // 		if (!(ps instanceof Array) && typeof ps === 'object') {
        // 			ps = [ps]
        // 		}
        // 		if (!(ps instanceof Array)) {
        // 			throw new Error(`uxt.rest.${m}参数错误`)
        // 		}
        // 		ps.forEach(p => {
        // 			if (typeof p === 'string') {
        // 				p = {
        // 					method: m,
        // 					url: p
        // 				}
        // 			} else if (typeof p === 'object') {
        // 				p.method = m
        // 			} else {
        // 				throw new Error(`uxt.rest.${m}参数错误`)
        // 			}
        // 		})
        // 		return this.request(ps)
        // 	}
        // })

        // 添加uni.xxx异步方法的Promise包装版
        // ['login', 'showModal', 'showToast'].forEach(f => {
        // 	this[f] = p => {
        // 		return new Promise((resolve, reject) => {
        // 			uni[f](
        // 				Object.assign({}, p, {
        // 					success(res) {
        // 						resolve(res)
        // 					},
        // 					fail(err) {
        // 						reject(err)
        // 					}
        // 				})
        // 			)
        // 		})
        // 	}
        // })

        // this.baseUrl = baseUrl
    }
    // uni.request的Promise包装版,支持同时发起多个请求
    // request(ps) {
    // 	return new Promise((resolve, reject) => {
    // 		if (!(ps instanceof Array) && typeof ps === 'object') {
    // 			ps = [ps]
    // 		}
    // 		if (!(ps instanceof Array)) {
    // 			throw new Error('uxt.request参数错误')
    // 		};
    // 		(async function(ps) {
    // 			try {
    // 				let [...ress] = await Promise.all(
    // 					ps.map(p => {
    // 						if (!p.url || typeof p.url !== 'string') {
    // 							throw new Error('uxt.request参数对象中url是必须的')
    // 						}
    // 						if (!p.url.startsWith('http://') && !p.url.startsWith('https://')) {
    // 							p.url = baseUrl + (p.env === false ? '' : env) + p.url
    // 						}
    // 						return new Promise((resolve, reject) => {
    // 							uni.request(
    // 								Object.assign({}, p, {
    // 									success(res) {
    // 										resolve(res)
    // 									},
    // 									error(err) {
    // 										reject(err)
    // 									}
    // 								})
    // 							)
    // 						})
    // 					})
    // 				)
    // 				if (ress.length === 1) {
    // 					resolve(ress[0])
    // 				} else {
    // 					resolve(ress)
    // 				}
    // 			} catch (e) {
    // 				reject(e)
    // 			}
    // 		})(ps)
    // 	})
    // }
}
