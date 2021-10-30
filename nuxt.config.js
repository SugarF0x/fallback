import locales from './locales'

export default {
  target: 'static',
  head: {
    title: 'fallback',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css'
  ],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],
  modules: ['nuxt-i18n'],
  i18n: {
    vueI18nLoader: true,
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'ru',
      silentFallbackWarn: true,
      messages: locales
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
      },
    },
  },
}
