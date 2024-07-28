import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VTooltip from 'v-tooltip';

Vue.use(VTooltip);
Vue.config.productionTip = false
library.add(fas,fab,far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import './app.css'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
