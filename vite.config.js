import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
},
  server: {
    port: 3000,
    host : true,
    proxy: {
      '/Api': {
        target: 'https://metarealtors.in',
        changeOrigin: true,
      },
    },
  },
})

