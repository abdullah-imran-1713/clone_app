// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  build: {
    transpile: [],
  },
  devtools: { enabled: true }
})
