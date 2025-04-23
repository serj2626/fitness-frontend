// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/global.scss"],
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "nuxt-aos",
    "@pinia/nuxt",
    "nuxt-swiper",
  ],
  app: {
    head: {
      title: "BS",
      htmlAttrs: {
        lang: "ru",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/fav/logo.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/public/fav/favicon.svg" },
        { rel: "shortcut icon", href: "/public/fav/favicon.ico" },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/public/fav/apple-touch-icon.png' },
        // { rel: 'manifest', href: '/public/fav/site.webmanifest' },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
        { charset: "UTF-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=5",
        },
        { name: "apple-mobile-web-app-title", content: "pavelpola" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    // server: {
    //   hmr: {
    //     protocol: 'ws',
    //     host: process.env.DOMAIN
    //   },
    // },
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @use '@/assets/scss/_vars.scss' as *;
              @use '@/assets/scss/_mixins.scss' as *;
              @use '@/assets/scss/_animations.scss' as *;
            `,
        },
      },
    },
  },
});
