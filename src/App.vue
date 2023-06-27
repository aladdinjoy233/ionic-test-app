<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';

export default {
	name: 'App',
	data() { return{
	}},
	components: {
		IonApp,
		IonRouterOutlet
	},
	methods: {
		push_notification() {
			PushNotifications.requestPermissions().then(permission => {
				if (permission.receive === 'granted') {
					PushNotifications.register();
				}
				else {
					// If permission is not granted
				}
			});
			PushNotifications.addListener('registration', (token) => {
				console.log(token);
			});
			PushNotifications.addListener('registrationError', (error)=> {
				console.log(error);
			}); PushNotifications.addListener('pushNotificationReceived', (notifications) => {
				console.log(notifications);
			});
		}
	},
	mounted() {
		var vm = this;
		vm.push_notification();
	}
}
</script>
