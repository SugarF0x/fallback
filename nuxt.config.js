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
  css: ['~/assets/css/tailwind.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],
  modules: [],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
      },
    },
  },
}
