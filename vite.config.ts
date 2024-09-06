import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    vueDevTools(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'esnext',
    copyPublicDir: false,
    sourcemap: false,
    minify: true,
    cssCodeSplit: true,
    lib: {
      entry: './src/index.ts',
      name: 'ScrollNumber',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue']
    },
    emptyOutDir: true
  }
})
