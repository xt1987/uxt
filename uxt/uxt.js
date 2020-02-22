import Vue from 'vue';

// const baseUrl = 'https://localhost/';
// const baseUrl = 'http://192.168.24.107/';
const baseUrl = 'https://app.huntkey.com/';
const env = 'zbox/test/www/';
// const env = 'zbox/dev/';

export default {
	init() {
		// 取颜色, type: 1前景色 2背景色 3边框色 4渐变背景色 5浅背景色, 返回: {classes: '', styles: ''}
		Vue.prototype.getColor = (color, type) => {
			if (color && typeof color === 'string') {
				if (color.startsWith('#')) {
					return {
						classes: '',
						styles: color
					};
				} else {
					let prev = '';
					if (type === 1) {
						prev = 'text-';
					} else if (type === 2) {
						prev = 'bg-';
					} else if (type === 3) {
						prev = 'border-';
					} else if (type === 4) {
						prev = 'bg-gradual-';
					} else if (type === 5) {
						prev = 'light bg-';
					}
					return {
						classes: `${prev}${color}`,
						styles: ''
					};
				}
			} else {
				return {
					classes: '',
					styles: ''
				};
			}
		};
		// 取大小 返回: {classes: '', styles: ''}
		Vue.prototype.getSize = size => {
			if (size && (typeof size === 'string' || (typeof size === 'number' && size > 0))) {
				if (typeof size === 'number' && size > 0) {
					return {
						classes: '',
						styles: `${size}rpx`
					};
				} else if (size.endsWith('px')) {
					return {
						classes: '',
						styles: size
					};
				} else {
					return {
						classes: `text-${size}`,
						styles: ''
					};
				}
			} else {
				return {
					classes: '',
					styles: ''
				};
			}

			return size && typeof size === 'string' ? size : '';
		};

		// 取状态栏和顶部导航栏高度
		uni.getSystemInfo({
			success: function(e) {
				Vue.prototype.gStatusBarHeight = e.statusBarHeight;
				Vue.prototype.gWindowHeight = e.windowHeight;
				// #ifndef MP
				if (e.platform == 'android') {
					Vue.prototype.gNavBarHeight = 50;
				} else {
					Vue.prototype.gNavBarHeight = 45;
				}
				// #endif

				// #ifdef MP-WEIXIN
				let custom = wx.getMenuButtonBoundingClientRect();
				// Vue.prototype.Custom = custom;
				Vue.prototype.gNavBarHeight = custom.bottom + custom.top - e.statusBarHeight * 2;
				// #endif		

				// #ifdef MP-ALIPAY
				Vue.prototype.gNavBarHeight = e.titleBarHeight;
				// #endif
			}
		});

		// 添加rest请求方法
		this.rest = {};
		['get', 'post', 'put', 'delete'].forEach(m => {
			this.rest[m] = ps => {
				if (!(ps instanceof Array) && typeof ps === 'object') {
					ps = [ps];
				}
				if (!(ps instanceof Array)) {
					throw new Error(`uxt.rest.${m}参数错误`);
				}
				ps.forEach(p => {
					if (typeof p === 'string') {
						p = {
							method: m,
							url: p
						};
					} else if (typeof p === 'object') {
						p.method = m;
					} else {
						throw new Error(`uxt.rest.${m}参数错误`);
					}
				});
				return this.request(ps);
			}
		});

		// 添加uni.xxx异步方法的Promise包装版
		['login', 'showModal', 'showToast'].forEach(f => {
			this[f] = p => {
				return new Promise((resolve, reject) => {
					uni[f](Object.assign({}, p, {
						success(res) {
							resolve(res);
						},
						fail(err) {
							reject(err);
						}
					}));
				});
			};
		});
		
		this.baseUrl = baseUrl;
	},
	// uni.request的Promise包装版,支持同时发起多个请求
	request(ps) {
		return new Promise((resolve, reject) => {
			if (!(ps instanceof Array) && typeof ps === 'object') {
				ps = [ps];
			}
			if (!(ps instanceof Array)) {
				throw new Error('uxt.request参数错误');
			}
			(async function(ps) {
				try {
					let [...ress] = await Promise.all(ps.map(p => {
						if (!p.url || typeof p.url !== 'string') {
							throw new Error('uxt.request参数对象中url是必须的');
						}
						if (!p.url.startsWith('http://') && !p.url.startsWith('https://')) {
							p.url = baseUrl + (p.env === false ? '' : env) + p.url;
						}
						return new Promise((resolve, reject) => {
							uni.request(Object.assign({}, p, {
								success(res) {
									resolve(res);
								},
								error(err) {
									reject(err);
								}
							}));
						});
					}));
					if (ress.length === 1) {
						resolve(ress[0]);
					} else {
						resolve(ress);
					}
				} catch (e) {
					reject(e);
				}
			}(ps));
		})
	}
};
