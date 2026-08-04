import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://nightkuzan.github.io/My-Portfolio/
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [react()],
  build: {
    target: 'es2020',
  },
})
