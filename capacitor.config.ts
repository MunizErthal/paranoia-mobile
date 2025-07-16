import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Paranoia',
  webDir: 'www',
  plugins:{
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#ffffffff',
      launchAutoHide: true,
      androidSplashResourceName: 'launch_splash'
    },
    Keyboard: {
      resize: "body",
      style: "DARK",
      resizeOnFullScreen: true
    }
  },
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      "http://paranoiars.com.br:8094/api/*"
    ]
  }
};

export default config;