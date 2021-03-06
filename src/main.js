import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000';
Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.config.productionTip = false;


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
