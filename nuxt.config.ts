// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'github-pages'
  },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Syne': [700, 800, 900],
      'IBM Plex Mono': [400, 500, 600]
    },
    display: 'swap',
    download: false
  },
  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/main.css'
  ]
})
