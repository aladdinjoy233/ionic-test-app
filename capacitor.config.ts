import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.vuememories',
  appName: 'Vue Memories',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  },
	plugins: {
		PushNotifications: {
			presentationOptions: ['badge', 'sound', 'alert']
		}
	}
};

export default config;
