<script setup>
import { computed, ref } from "vue"
import data from './data.json'

const { shelters } = data

const searchText = ref('')
const searchTimeOut = ref()

const sheltersFiltred = computed(() => shelters.filter(sh => sh.name.includes(searchText.value)))

function searchInput({ target }) {
  if (searchTimeOut.value) {
    clearTimeout(searchTimeOut)
  }

  setTimeout(() => {
    searchText.value = target.value
  }, 300)
}

</script>

<template>
  <section class="shelters ">
    <div class="container">

      <div class="my-[40px] bg-turquoise-900 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-turquoise-400" fill="currentColor" viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input :value="searchText" @input="searchInput" type="text" id="simple-search"
                  class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 placeholder-turquoise-400"
                  placeholder="Search" required />
              </div>
            </form>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-turquoise-400">
            <thead class="text-xs uppercase bg-turquoise-700 text-turquoise-400">
              <tr>
                <th scope="col" class="px-4 py-3">Назва</th>
                <th scope="col" class="px-4 py-3">Розташування</th>
                <th scope="col" class="px-4 py-3">Адреса</th>
                <th scope="col" class="px-4 py-3">Опис</th>
                <th scope="col" class="px-4 py-3">Контакти</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-turquoise-700" v-for="shelter in sheltersFiltred" :key="shelter.name">
                <th scope="row" class="px-4 py-3 font-medium text-white whitespace-nowrap">{{ shelter.name }}"</th>
                <td class="px-4 py-3">{{ shelter.location }}</td>
                <td class="px-4 py-3">{{ shelter.address }}</td>
                <td class="px-4 py-3">{{ shelter.description }}</td>
                <td class="px-4 py-3">
                  <table width="100%">
                    <tr v-for="contact in shelter.contact" :key="contact.name">
                      <td>{{ contact.name }}:</td>
                      <td align="right">
                        <a v-if="contact.link" target="_blank" :href="contact.link" class="link">{{ contact.value }}</a>
                        <span v-else>{{ contact.value }}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
