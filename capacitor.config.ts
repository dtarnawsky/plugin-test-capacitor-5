import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'plugin.test.capacitor.v5',
  appName: 'plugin-test-capacitor-5',
  webDir: 'build'
,
    android: {
       buildOptions: {
          keystorePath: '/Users/damiantarnawsky/Code/plugin-test-capacitor-5/android/keys/Untitled',
          keystoreAlias: 'key0',
       }
    }
  };

export default config;
