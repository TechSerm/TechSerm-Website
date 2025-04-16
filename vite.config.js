import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  css: {
    preprocessorOptions: {
      tailwind: {
        config: './tailwind.config.js',
      },
    },
    postcss: {},
  },
  server: {
    host: 'https://website.tserm.com/',
    port: 8085,
  },
})
