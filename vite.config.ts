import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: './src',
    plugins: [react()],
    server: {
        port: 3069,
    },
})
