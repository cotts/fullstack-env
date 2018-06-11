import Vue from 'vue';
import App from './App';
import router from './router';
import Toaster from 'v-toaster';
import ToggleButton from 'vue-js-toggle-button';
import 'v-toaster/dist/v-toaster.css';

Vue.use(Toaster, { timeout: 4000 }).use(ToggleButton);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
