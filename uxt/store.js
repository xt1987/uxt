
export default {
	state: {
		theme: 'green'
	},
	mutations: {
		setTheme(state, theme) {
			uni.setStorageSync('theme', theme);
			state.theme = theme;
		}
	}
}