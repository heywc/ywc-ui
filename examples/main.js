import Vue from 'vue';
import App from './App.vue';
import Yui from '../lib/index/index';
import '../lib/index/index.css';
Vue.use(Yui)

Vue.config.productionTip = false;

new Vue({
    render: function (h) { return h(App); },
}).$mount('#app');
