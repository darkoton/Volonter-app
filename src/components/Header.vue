<script setup>
import { ref, watch } from 'vue'
import Logo from '@components/Logo.vue'
import { Icon } from '@iconify/vue';
import { useUserStore } from '@stores/user.js'

const userStore = useUserStore()
const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}


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
          <router-link @click="closeMenu" to="/" class="link after:h-[2px]">
            Пiдтримати
          </router-link>

          <!-- <router-link @click="closeMenu" to="/join" class="link after:h-[2px]">
            Долучитись до нас
          </router-link> -->
          <router-link @click="closeMenu" to="/shelters" class="link after:h-[2px]">
            Притулки Львова
          </router-link>
          <router-link @click="closeMenu" to="/news" class="link after:h-[2px]">
            Новини
          </router-link>
        </nav>
        <div v-if="userStore.authorized && userStore.user" class="flex gap-x-[10px]">
          <router-link v-if="userStore.user.role === 'admin'" to="/admin"
            class="text-[16px] md:text-[18px] btn">Адмін</router-link>
          <router-link to="/profile" class="text-[16px] md:text-[18px] btn">Профіль</router-link>
        </div>

        <div v-else class="flex gap-x-[10px]">
          <router-link to="/join/user" class="text-[16px] md:text-[18px] btn">Зареєструватися</router-link>
          <router-link to="/join/volunteer" class="text-[16px] md:text-[18px] btn">Стати волонтером</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
