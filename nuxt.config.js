import i18n from "./languages/i18n";

export default {
  server: {
    host: "0.0.0.0",
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Vibha",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content:
          "",
      },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "/",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content:
          "",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
        "user-scalable": 0,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/styles/main.scss", "~assets/styles/roboto.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/buefy.ts"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    
    
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
    'vue-scrollto/nuxt',
    ['vue-scrollto/nuxt', {
      duration: 500
    }]
    //OR like this
  ],
  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "th", name: "Thai" },
    ],
    defaultLocale: "en",
    vueI18n: i18n,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  target: 'static'
};
