import { defineConfig } from 'vite'
// import eslint from 'vite-plugin-eslint'
import handlebars from 'vite-plugin-handlebars'
// import vitePluginString from 'vite-plugin-string';
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
    postcss: './postcss.config.js'
  },
  assetsInclude: ['**/*.hbs'],
}) 
