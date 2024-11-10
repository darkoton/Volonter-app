<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function submit() {
  router.push('/profile')
}
</script>

<template>
  <div class="login h-full flex items-center">
    <div class="container flex justify-center">
      <div class="w-full bg-turquoise-900 rounded-lg shadow border-turquoise-700 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            Увійдіть у свій обліковий запис
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Ваший email</label>
              <input type="email" name="email" id="email"
                class="bg-turquoise-700 border-turquoise-600 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                placeholder="name@company.com" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Пароль</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-turquoise-700 border-turquoise-600 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                required />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox"
                    class="w-4 h-4 border-turquoise-600 rounded bg-turquoise-700 text-yellow-600 focus:ring-offset-turquoise-900 focus:ring-yellow-600"
                    required />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-turquoise-300">Запам'ятати мене</label>
                </div>
              </div>
            </div>
            <button @click="submit" type="submit" class="btn w-full">
              Створити
            </button>
            <p class="text-sm font-light text-turquoise-400">
              Ще не маєте облікового запису?
              <router-link to="register" class="font-medium link">Зареєструватися</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
