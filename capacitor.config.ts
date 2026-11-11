import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ai.galaxia_gaming_studios.app',
  appName: 'AI',
  webDir: 'dist',

  server: {
    url: 'http://0.0.0.0:5173/',
    cleartext: true,
  },
  
};

export default config;
