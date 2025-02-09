import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/VueHelloWorld/', // Replace with your GitHub repo name
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
