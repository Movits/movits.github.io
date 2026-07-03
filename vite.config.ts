import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site de usuário do GitHub Pages (movits.github.io) — servido na raiz.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) return 'three'
        },
      },
    },
  },
})
