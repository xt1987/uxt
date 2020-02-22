<script>
	export default {
		onLaunch() {
			const theme = uni.getStorageSync('theme');
			theme && this.$store.commit('setTheme', theme);
			console.log('App Launch');
		},
		onShow() {
			console.log('App Show');
		},
		onHide() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/*每个页面公共css */
	@import url("uxt/uxt.css");
</style>
