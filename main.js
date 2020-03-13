import Vue from 'vue'
import App from './App'
import uxt from '@/uxt/uxt.js'
import uxtLayout from '@/uxt/components/uxt-layout.vue'

Vue.component('uxt-layout', uxtLayout)
Vue.use(uxt)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
