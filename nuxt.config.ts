import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    yup: 'yup/lib/index.js'
  },
  plugins: [
    '~/plugins/veeValidate.ts'
  ]
})
