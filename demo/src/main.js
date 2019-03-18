import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/github.css';

import App from './App.vue';
import './registerServiceWorker';

Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
