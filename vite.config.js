import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import htmlMinifier from 'vite-plugin-html-minifier';
// https://vite.dev/config/
var url = "https://websote.tserm.com";


export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(),
    htmlMinifier({
      collapseWhitespace: true, // Remove spaces and tabs
      removeComments: true,     // Remove HTML comments
      removeAttributeQuotes: true, // Optional: Remove quotes from attributes when safe
      minifyJS: true,            // Minify inline JavaScript
      minifyCSS: true            // Minify inline CSS
    })
  ],
  css: {
    preprocessorOptions: {
      tailwind: {
        config: './tailwind.config.js',
      },
    },
    postcss: {},
  },
  base: "./",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '192.168.31.8',
    port: 8085,
  },
})
