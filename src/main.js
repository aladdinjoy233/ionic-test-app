import { createApp } from 'vue'

import App from './App.vue'
import BaseLayout from './components/base/BaseLayout.vue';
import router from './router';
import store from './stores';
import { createPinia } from 'pinia'

import { IonicVue } from '@ionic/vue';
import { isPlatform } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

const pinia = createPinia();

const app = createApp(App)
	.use(IonicVue)
	.use(router)
	.use(pinia);

if (isPlatform('hybrid')) {
	app.config.globalProperties.$baseUrl = 'http://192.168.23.182/gestioo_core_medicina/debug_externo/';
} else {
	app.config.globalProperties.$baseUrl = 'http://127.0.0.1/gestioo_core_medicina/debug_externo/';
}

app.component('base-layout', BaseLayout);
	
router.isReady().then(() => {
	app.mount('#app');
});