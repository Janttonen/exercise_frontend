import './assets/main.css'

import { applyPolyfills, defineCustomElements } from '@cscfi/csc-ui/loader';
import { vControl } from '@cscfi/csc-ui-vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.directive('control', vControl);

applyPolyfills().then(() => {
    defineCustomElements();
  });

app.use(router)

app.mount('#app')