<script setup>
import { ref, computed, onMounted } from 'vue';
import { getDatas, addData, deleteData } from '@plugins/firebase/firestore.js'
import { useAlertStore } from '@stores/alert.js'

const alertStore = useAlertStore()

const searchText = ref('')
const news = ref([]);
const searchTimeOut = ref(null)

const newsFiltred = computed(() => {
  if (news.value) {
    return news.value.filter(nw => nw.title.includes(searchText.value))
  }
  return null
})


function searchInput({ target }) {
  if (searchTimeOut.value) {
    clearTimeout(searchTimeOut)
  }

  setTimeout(() => {
    searchText.value = target.value
  }, 300)
}

async function deleteItem(index) {
  try {
    await deleteData(['news', news.value[index].id])
    news.value.splice(index, 1)
    alertStore.showAlert("Новину видалено.", "success")
  } catch {
    alertStore.showAlert("Виникла помилка.", "error")
  }
}

onMounted(async () => {
  const newsList = (await getDatas(['news'], {}, { id: true })).data

  if (newsList.length) {
    news.value = newsList
  } else {
    news.value = null
  }
})
</script>

<template>
  <section class="shelters h-full">
    <div class="container h-full flex">
      <div class="my-[40px] flex flex-col flex-auto bg-turquoise-900 relative shadow-md sm:rounded-lg overflow-hidden">
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
                  class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2 placeholder-turquoise-400"
                  placeholder="Search" required />
              </div>
            </form>
          </div>
        </div>
        <div class="overflow-x-auto flex-auto">
          <table class="w-full text-sm text-left text-turquoise-400">
            <thead class="text-xs uppercase bg-turquoise-700 text-turquoise-400">
              <tr>
                <th scope="col" class="px-4 py-3">Назва</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="newsFiltred && newsFiltred.length">
              <tr class="border-b border-turquoise-700" v-for="(newItem, index) in newsFiltred" :key="newItem.title">
                <td scope="row" class="px-4 py-3 font-medium text-white whitespace-nowrap">{{ newItem.title }}</td>
                <td align="right" class="flex gap-x-[5px]">
                  <button class="btn ">Змінити</button>
                  <button @click="deleteItem(index)" class="btn bg-red-500 hover:bg-red-400">Видалити</button>
                </td>
              </tr>
            </tbody>
            <tbody v-else-if="newsFiltred">
              <tr>
                <td align="center" class="py-[30px]">
                  <div role="status" class="flex flex-col gap-y-[20px] items-center">
                    <span class="text-[20px]">Загрузка...</span>
                    <svg aria-hidden="true"
                      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-turquoise-400"
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td class="py-[30px]">
                  <p class="text-[20px] text-center">Новин поки що немає</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-1 flex justify-end gap-x-[10px]">
          <router-link to="/admin/news-editor" class="btn">
            Додати
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>
