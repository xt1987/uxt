import Vue from 'vue';
import App from './App';
import uxt from '@/uxt/uxt.js';
import store from './store';
import uxtLayout1 from '@/uxt/components/uxt-layout1.vue';

uxt.init();
Vue.component('uxt-layout1', uxtLayout1);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
	store,
    ...App
});
app.$mount();
