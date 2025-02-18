import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/Portfolio-react",
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 kB
  }
});
