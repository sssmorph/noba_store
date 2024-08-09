
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  router: {
    base: '/',
    mode: 'history',
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
    
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-swiper',
    "nuxt-marquee",
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@nuxt/image',
    'nuxt-lcp-speedup',

  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      cssCodeSplit: true,
      
   },
  },
  css: [
    '@/assets/css/reset.css',
    '@/public/fonts/main.css',
  ],  
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  lcpSpeedup: {
    disablePrefetchLinks: true,
    disableStylesheets: 'entry',
  }
})


