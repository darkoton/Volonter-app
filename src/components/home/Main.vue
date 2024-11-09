<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const money = ref(100);
const isError = ref(false);

function submit() {
  if (money.value > 0) {
    isError.value = false;
    router.push("/payment");
    return;
  }
  isError.value = true;
}
</script>

<template>
  <div
    class="main flex-auto"
    :style="{
      background: `url('/img/puppy.jpg') 0 0/cover no-repeat`,
    }"
  >
    <div
      class="relative h-full z-10 before:content-[''] before:bg-black before:-z-10 before:bg-opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full"
    >
      <div class="container h-full">
        <div
          class="flex h-full items-center flex-col lg:flex-row flex-wrap justify-center lg:justify-between gap-y-[40px] gap-x-[20px] py-[40px] md:py-[80px] lg:py-[100px]"
        >
          <div class="flex flex-col lg:max-w-[48%]">
            <h1
              class="text-[23px] leading-[25px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[34px] lg:text-[36px] lg:leading-[38px] xl:text-[40px] xl:leading-[42px] font-bold mb-[20px]"
            >
              <span
                class="text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-yellow-300 after:h-[2px] sm:after:h-[4px] after:w-full"
                >Допоможи</span
              >
              тваринам - стань волонтером сьогодні!
            </h1>

            <p
              class="mb-[10px] text-[16px] leading-[18px] sm:text-[18px] sm:leading-[20px] lg:text-[20px] lg:leading-[21px]"
            >
              Кожна тварина заслуговує на любов, турботу та захист. Приєднуйтесь
              до нас і разом змінюємо їхнє життя на краще! Ваші руки, серце та
              час можуть стати рятівними для тих, хто не може захистити себе
              сам.
            </p>

            <p
              class="text-[16px] leading-[18px] sm:text-[18px] sm:leading-[20px] lg:text-[20px] lg:leading-[21px]"
            >
              Долучись до нашої команди волонтерів! Відкрий для себе можливості
              допомоги, навчання та підтримки тварин, що потребують нашої уваги.
            </p>
          </div>

          <div
            class="flex flex-col lg:max-w-[48%] bg-white p-[10px] md:p-[20px] rounded-md"
          >
            <h2
              class="text-[20px] md:text-[24px] font-semibold text-turquoise-800 mb-[5px] md:mb-[10px]"
            >
              Разова допомога
            </h2>
            <form
              class="w-full flex flex-col gap-y-[10px] md:gap-y-[20px] text-black"
            >
              <div
                class="flex items-center gap-x-[20px] px-[15px] py-[3px] border-turquoise-600 rounded-lg border-[2px]"
                :class="isError && '!border-red-500'"
              >
                <input
                  v-model="money"
                  min="1"
                  class="w-full p-0 border-0 !shadow-[#0000] text-[25px] leading-[27px] md:text-[35px] md:leading-[34px]"
                  type="number"
                  placeholder="Сума"
                  style="--tw-ring-shadow: #0000"
                />
                <span class="text-[26px] font-bold">ГРН</span>
              </div>

              <div class="flex justify-between gap-x-[8px]">
                <button
                  type="button"
                  @click="money += 200"
                  class="text-center py-[8px] w-full border-[2px] border-turquoise-600 text-[18px] md:text-[20px] font-medium rounded-lg transition-hover hover:bg-turquoise-600 hover:text-white"
                >
                  +200
                </button>
                <button
                  type="button"
                  @click="money += 500"
                  class="text-center py-[8px] w-full border-[2px] border-turquoise-600 text-[18px] md:text-[20px] font-medium rounded-lg transition-hover hover:bg-turquoise-600 hover:text-white"
                >
                  +500
                </button>
                <button
                  @click="money += 1000"
                  type="button"
                  class="text-center py-[8px] w-full border-[2px] border-turquoise-600 text-[18px] md:text-[20px] font-medium rounded-lg transition-hover hover:bg-turquoise-600 hover:text-white"
                >
                  +1000
                </button>
              </div>

              <textarea
                class="text-[20px] resize-y px-[10px] min-h-[100px] py-[5px] border-turquoise-600 border-[2px] rounded-lg"
                placeholder="Повiдомлення"
              ></textarea>
              <button
                type="button"
                @click="submit"
                class="btn py-[8px] md:py-[10px] text-[18px] md:text-[20px] font-bold"
              >
                Підтримати
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>