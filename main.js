import Vue from 'vue'
import App from './App'
import uxt from '@xtcoder/uxt/uxt.js'
import uxtPage from '@xtcoder/uxt/components/uxt-page.vue'

Vue.component('uxt-page', uxtPage)
Vue.use(uxt)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
