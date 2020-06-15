import './prototypes';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './lib/google-analytics';

Vue.config.productionTip = false

new Vue({
	store: store.original,
	render: h => h(App)
}).$mount('#app')
