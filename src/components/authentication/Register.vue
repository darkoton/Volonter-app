<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function submit() {
  router.push('/profile')
}
</script>


<template>
  <div class="register h-full flex items-center">
    <div class="container flex justify-center">
      <div class="w-full bg-turquoise-900 rounded-lg shadow border-turquoise-700 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            Створіть акаунт
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Ваший email</label>
              <input type="email" name="email" id="email"
                class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                placeholder="name@company.com" required />
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-white">Ваший номер телефона</label>
              <input type="text" name="phone" id="phone"
                class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                placeholder="+380 98 625 268 3" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Пароль</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                required />
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-white">Підтвердіть пароль</label>
              <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••"
                class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                required />
            </div>
            <button @click="submit" type="submit" class="btn w-full">
              Cтворити акаунт
            </button>
            <p class="text-sm font-light text-turquoise-400">
              Вже маєте акаунт? <router-link to="login" class="font-medium link">Увійдіть
                тут</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
