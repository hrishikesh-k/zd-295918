import {defineConfig} from 'astro/config'
import netlify from '@astrojs/netlify'

export default defineConfig({
  adapter: netlify({
    edgeMiddleware: true
  }),
  output: 'server'
})
