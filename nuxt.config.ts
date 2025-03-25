import { version } from './package.json'
import locales from './i18n/locales/index'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 13120
  },
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["vuetify-nuxt-module", '@nuxtjs/i18n'],
  vuetify: {
    vuetifyOptions: './vuetify.options.js'
  },
  runtimeConfig: {
    public: {
      version
    }
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: Object.keys(locales).map((key: string) => ({
      code: key,
      // name: locales[key],
      file: `./${key}.json`,// 'loader.ts',
      language: key
    })),
    langDir: 'locales',
    lazy: true,
    strategy: 'no_prefix',
    skipSettingLocaleOnNavigate: true,

    compilation: {
      strictMessage: false // allow HTML in locales
    }
  },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          // See https://github.com/nuxt/nuxt/issues/14126
          //     https://github.com/unjs/nitro/issues/273
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
  },
})
