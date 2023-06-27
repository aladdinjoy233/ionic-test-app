import { createApp } from 'vue'

import App from './App.vue'
import BaseLayout from './components/base/BaseLayout.vue';
import router from './router';
import store from './stores';
import { createPinia } from 'pinia'

import { IonicVue } from '@ionic/vue';
import { isPlatform } from '@ionic/vue';

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';

import { PushNotifications } from '@capacitor/push-notifications';

// const firebaseConfig = {
// 	apiKey: "AIzaSyD0RTs6Ux09w8rkkw30pl65UZJFAPXxF5c",
// 	authDomain: "test-ionic-49d10.firebaseapp.com",
// 	projectId: "test-ionic-49d10",
// 	storageBucket: "test-ionic-49d10.appspot.com",
// 	messagingSenderId: "1027056283254",
// 	appId: "1:1027056283254:web:2258d137881ccad0203957",
// 	measurementId: "G-G7H6Q7LK0D"
// }

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
	app.config.globalProperties.$baseUrl = 'http://192.168.1.241/gestioo_core_medicina/debug_externo/';
} else {
	app.config.globalProperties.$baseUrl = 'http://127.0.0.1/gestioo_core_medicina/debug_externo/';
}

app.component('base-layout', BaseLayout);
	
router.isReady().then(() => {
	app.mount('#app');
});

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);
// onMessage(messaging, payload => console.log('Message received. ', payload));

// getToken(messaging, { vapidKey: 'BKzJxQxHsKMtW479TspE8naZDQ6XwudcOHB08vfAbQalbCYVsIVUclEFYVJbHmjJWTvo-BNsXvjiGbLFIXoZwps' })
// 	.then((currentToken) => {
// 		if (currentToken) {
// 			console.log(currentToken);
// 		} else {
// 			console.log('No registration token available. Request permission to generate one.');
// 		}
// 	})
// 	.catch(error => {
// 		console.log('An error occurred while retrieving token. ', error);
// 	})

// Push Notifications
PushNotifications.register();