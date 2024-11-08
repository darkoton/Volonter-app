import { createApp } from 'vue'
import '@/assets/style/style.css'
import App from './App.vue'
import router from '@plugins/router.js'

const app = createApp(App)

// include plugins
app.use(router)

app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})


