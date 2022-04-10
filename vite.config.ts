import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react(), Unocss()],
    build: {
        sourcemap: true,
    },
    server: {
        open: true,
        host: true,
    },
})
