// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxt/image'],
  app: {
    head: {
      title: 'window.top: No iFrames were Harmed',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'title', content: 'window.top: No iFrames were Harmed' },
        { name: 'description', content: 'Did an API need an annoyed chatbot trapped inside of a website? No.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://window.top' },
        { property: 'og:image', content: '/social-preview.png' },
        { property: 'twitter:image', content: '/social-preview.png' },
        { property: 'twitter:card', content: 'summary_image_large' },
        { property: 'twitter:creator', content: '@_jessicasachs' },
        { property: 'twitter:url', content: 'https://window.top' },
        { property: 'twitter:title', content: 'window.top: No iFrames were Harmed' },
        { property: 'twitter:description', content: 'Did an API need an annoyed chatbot trapped inside of a website? No.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
        { rel: 'icon', sizes: 'any', href: '/favicon.ico'},
        { rel: 'manifest', href: '/manifest.webmanifest'},

      ]
    }
  },
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
  },
  postcss: {
    plugins: {
      'postcss-100vh-fix': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
