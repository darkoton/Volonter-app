<script setup>
import { ref, onMounted } from 'vue';
import { getDatas } from '@plugins/firebase/firestore.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { Icon } from '@iconify/vue';

const volunteers = ref([]);

onMounted(async () => {
  volunteers.value = (await getDatas(['users'], { wheres: [['role', '==', 'volunteer']] })).data
})

</script>

<template>
  <div class="volunteer" v-if="volunteers.length">
    <div class="container">
      <div class="py-[50px]">
        <h2
          class="text-center mb-[20px] font-bold text-[22px] leading-[24px] md:text-[26px] md:leading-[28px] lg:text-[30px] lg:leading-[32px]">
          Наші волонтери</h2>
        <div class="flex justify-end gap-x-[10px] mb-[10px]">
          <button id="swiperPrev"
            class="rounded-full border-[1px] border-white transition-hover hover:border-yellow-400 hover:text-yellow-400 disabled:border-gray-500 disabled:text-gray-500">
            <Icon class="w-[45px] h-[45px]" icon="humbleicons:chevron-left" />
          </button>
          <button id="swiperNext"
            class="rounded-full border-[1px] border-white transition-hover hover:border-yellow-400 hover:text-yellow-400 disabled:border-gray-500 disabled:text-gray-500">
            <Icon class="w-[45px] h-[45px]" icon="humbleicons:chevron-right" />
          </button>
        </div>
        <swiper :modules="[Navigation]" :navigation="{
          prevEl: '#swiperPrev',
          nextEl: '#swiperNext',
        }" :slides-per-view="4.5" :space-between="20" ref="swiperSlider">
          <swiper-slide v-for="volunteer in volunteers" :key="volunteer.uid">
            <div
              class="flex flex-col items-center gap-y-[20px] border-[1px] border-solid border-white py-[30px] rounded-[10px]">
              <img class="w-full max-w-[100px] rounded-full" src="https://loremflickr.com/320/320/pets" alt="pet">
              <h3 class="text-[18px] leading-[20px]">{{ volunteer.name }}</h3>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>