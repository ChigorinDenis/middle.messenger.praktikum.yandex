import { defineConfig } from 'vite'
// import eslint from 'vite-plugin-eslint'
import handlebars from 'vite-plugin-handlebars'
import ViteRawPlugin  from 'vite-plugin-raw';

export default defineConfig({
  plugins: [
    handlebars(),
    ViteRawPlugin({
      match: /\.hbs$/ 
    }),
    // eslint(),
  ],
  css: {
    postcss: './postcss.config.js',
    scss: {
      api: 'legacy-js-api', // or "modern", "legacy"
    },

  },
  assetsInclude: ['**/*.hbs'],
  publicDir: 'static',
});
