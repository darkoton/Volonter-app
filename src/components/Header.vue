<script setup>
import { ref } from 'vue'
import Logo from '@components/Logo.vue'
import { Icon } from '@iconify/vue';

const activeMenu = ref(false)

</script>

<template>
  <header class="header fixed w-full bg-turquoise-900 z-50 top-0 left-0">
    <div class="container">
      <div class="py-[10px] flex justify-between items-center">


        <router-link to="/" class="ml-[55px] w-full max-w-[40px] md:max-w-[50px] md:ml-0">
          <Logo width="100%" />
        </router-link>

        <nav
          class="flex items-start md:items-center flex-col md:flex-row gap-x-[30px] gap-y-[15px] text-white text-[22px] md:text-[18px] right-full top-0 fixed md:static h-full w-full md:w-auto max-w-[75%] md:max-w-none bg-turquoise-500 md:bg-transparent px-[20px] py-[13px] md:p-0 transition"
          :class='activeMenu && "translate-x-[99.5%] md:translate-x-0"'>
          <Icon
            class="text-[67px] md:text-[78px] self-end md:hidden cursor-pointer transition bg-transparent absolute top-0 right-[1px] translate-x-full p-[14px]"
            :class="activeMenu && '!bg-turquoise-500'"
            :icon='!activeMenu ? "iconamoon:menu-burger-horizontal-duotone" : "ic:round-close"'
            @click="activeMenu = !activeMenu" />
          <router-link to="/"
            class="relative transition-hover hover:text-yellow-400 after:content-[''] after:absolute after:bg-yellow-400 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition hover:after:w-full">
            Пiдтримати
          </router-link>
          <router-link to="/join"
            class="relative transition-hover hover:text-yellow-400 after:content-[''] after:absolute after:bg-yellow-400 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition hover:after:w-full">
            Долучитись до нас
          </router-link>
          <router-link to="/shelters"
            class="relative transition-hover hover:text-yellow-400 after:content-[''] after:absolute after:bg-yellow-400 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition hover:after:w-full">
            Притулки Львова
          </router-link>
        </nav>

        <button class="text-[16px] md:text-[18px] btn">Зареєструватися</button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
