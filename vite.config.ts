import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    sourcemap: false,
    cssMinify: 'lightningcss'
  },
  server: {
    host: true
  }
});
