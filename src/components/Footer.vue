<script setup>
import Logo from "@components/Logo.vue";
</script>

<template>
  <footer class="footer bg-turquoise-900">
    <div class="container">
      <div class="py-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <router-link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3">
            <Logo width="50px" />
          </router-link>
          <ul
            class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-[5px] mb-6 text-sm font-medium text-turquoise-400 sm:mb-0">
            <li>
              <router-link to="/" class="me-4 md:me-6 link">
                Пiдтримати
              </router-link>
            </li>
            <li>
              <router-link to="/join" class="me-4 md:me-6 link">
                Долучитись до нас
              </router-link>
            </li>
            <li>
              <router-link to="/shelters" class="me-4 md:me-6 link">
                Притулки Львова
              </router-link>
            </li>
          </ul>
        </div>
        <hr class="my-2 border-turquoise-700 sm:mx-auto lg:my-4" />
        <span class="block text-sm text-turquoise-400 text-center">
          © 2024
          <router-link to="/"
            class="text-yellow-400 relative transition-hover after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-hover hover:after:w-full">
            Animal volunteer
          </router-link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>;
