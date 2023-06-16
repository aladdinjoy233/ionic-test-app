import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.vuememories',
  appName: 'Vue Memories',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
