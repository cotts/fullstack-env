import Vue from 'vue';
import App from './App';
import router from './router';
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';

Vue.use(Toaster, { timeout: 4000 });

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
