// stores/user.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getData } from '@plugins/firebase/firestore.js'
import auth from '@plugins/firebase/auth.js'
import { onAuthStateChanged } from "firebase/auth";
import { useAlertStore } from './alert';
import { logOut } from "@plugins/firebase/auth.js"


export const useUserStore = defineStore('user', () => {
  const alertStore = useAlertStore()

  const user = ref(null)
  const accessToken = ref(null)

  const authorized = computed(() => {
    return !!((accessToken.value || localStorage.accessToken))
  })

  onAuthStateChanged(auth, async (userCredential) => {
    if (userCredential) {
      try {
        const { uid } = userCredential;
        accessToken.value = userCredential.accessToken
        localStorage.setItem("accessToken", userCredential.accessToken)
        const userData = await getData(['users', uid])
        user.value = userData
      } catch (err) {
        alertStore.showAlert('Вхід не виконано, виникла помилка на сервері', 'error')
      }
    } else {
      // alertStore.showAlert('Вхід не виконано, виникла помилка', 'error')
    }
  });

  async function signOut() {
    try {
      await logOut()
      user.value = null
      accessToken.value = null
    } catch {
      alertStore.showAlert('Виникла помилка при виході', 'error')
    }
  }

  return {
    user, accessToken, authorized, signOut
  }
})