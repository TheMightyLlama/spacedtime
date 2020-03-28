require('dotenv').config()

export default {
  css: ['@/assets/css/mvp.css'],

  head: {
    htmlAttrs: {
      lang: 'en'
    },

    title: 'Remember the import things in your life',

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui'
      },

      { property: 'og:url', content: 'https://www.spacedtime.com' },
      { property: 'og:type', content: 'website' },

      {
        property: 'og:title',
        content: 'Remember the import things in your life'
      },

      {
        vmid: 'description',
        hid: 'description',
        name: 'description',
        content:
          'Using the spaced time repetition technique, you can permemantly store information in your brain, instead of the cloud'
      },

      {
        vmid: 'og:description',
        property: 'og:description',
        content:
          'Using the spaced time repetition technique, you can permemantly store information in your brain, instead of the cloud'
      },

      {
        property: 'og:image',
        content: 'https://www.spacedtime.com/spacedtime-logo.png'
      },

      { property: 'og:image:type', content: 'image/png' }
    ]
  },

  modules: [
      '@nuxtjs/pwa'
  ],

  pwa: {
      meta: {
          name: 'SpacedTime Website'
      },
      manifest: {
          name: 'SpacedTime Website',
          lang: 'en',
          short_name: 'SpacedTime'
      }
  },

  plugins: [
    { src: '@/plugins/heap.js', mode: 'client'}
  ],

  env: {
    HEAP: process.env.HEAP
  }
};
