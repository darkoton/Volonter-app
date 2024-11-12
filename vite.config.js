import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // electron({
    //   main: {
    //     // Shortcut of `build.lib.entry`.
    //     entry: 'electron/main.js',
    //     onstart: (options) => {
    //       // Опция для перезагрузки приложения при изменении файлов
    //       options.reload();
    //     },
    //   },
    //   preload: {
    //     // Shortcut of `build.rollupOptions.input`.
    //     // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
    //     input: path.join(__dirname, 'electron/preload.js'),
    //   },
    //   // Ployfill the Electron and Node.js API for Renderer process.
    //   // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
    //   // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
    //   renderer: process.env.NODE_ENV === 'test'
    //     // https://github.com/electron-vite/vite-plugin-electron-renderer/issues/78#issuecomment-2053600808
    //     ? undefined
    //     : {},
    // }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@plugins', replacement: fileURLToPath(new URL('./src/plugins', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
    ]
  }
})
