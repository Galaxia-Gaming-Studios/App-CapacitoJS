import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ai.galaxia_gaming_studios.app',
  appName: 'AI',
  webDir: 'dist',

  server: {
    url: 'http://localhost:5173/',
  },
  
};

export default config;
