// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  css: ['~/assets/css/style.css'],
  app: {
    buildAssetsDir: '/_assets/',
    head: {
      title: 'TechSerm - Your Trusted IT Partner',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'TechSerm - Your trusted partner for IT solutions, web development, and digital transformation services.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    },
    baseURL: '/'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://admin.techserm.io'
    }
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: true
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    minify: true,
    compressPublicAssets: true,
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        }
      }
    }
  },
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  typescript: {
    strict: false
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws'
      }
    }
  },
})