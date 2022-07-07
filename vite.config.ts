import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
