// stores/alert.js
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alert: {
      message: 'text',
      visible: false,
      type: "error"
    }
  }),
  actions: {
    showAlert(message, type, ms = 3000) {
      Object.assign(this.alert, { message, type })

      this.alert.visible = true

      setTimeout(() => {
        this.alert.visible = false
      }, ms);
    }
  },
})