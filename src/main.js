import { createApp } from 'vue'
import App from './App.vue'
import router from '@plugins/router.js'
import { VueFire, VueFireAuth } from 'vuefire'
import firebaseApp from '@plugins/firebase'
import '@/assets/style/style.css'

const app = createApp(App)

// include plugins
app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
})

app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})


