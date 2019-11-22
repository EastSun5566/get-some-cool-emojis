import Vue from 'vue';

// @ts-ignore
import VueHighlightJS from 'vue-highlightjs';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'highlight.js/styles/github.css';

import App from './App.vue';

Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
