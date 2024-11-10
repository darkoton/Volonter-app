<template>
  <div class="profile h-full flex items-center">
    <div class="container">
      <div class="flex justify-center">
        <div class="p-5 border rounded text-center ">
          <img class="w-32 h-32 rounded-full mx-auto" src="https://loremflickr.com/320/320/dog" alt="">
          <div class="text-sm mt-5">
            <a href="#"
              class="text-[22px] font-medium leading-none hover:text-yellow-400 transition duration-500 ease-in-out">Jane
              Doe
            </a>

          </div>

          <ul class="flex flex-col gap-y-[5px] text-[18px] leading-[20px]">
            <li class="flex items-center gap-x-[5px]">
              <span class="text-yellow-400">Email: </span>
              <span>tester@gmail.com</span>
            </li>
            <li class="flex items-center gap-x-[5px]">
              <span class="text-yellow-400">Телефон: </span>
              <span>+380 98 877 667 2</span>
            </li>



            <li class="flex items-center gap-x-[5px]">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 border-turquoise-600 rounded bg-turquoise-700 text-yellow-600 focus:ring-offset-turquoise-900 focus:ring-yellow-600">
              <label for="default-checkbox">
                Надсилати новини
              </label>
            </li>
            <li class="flex items-center gap-x-[5px]">
              <input id="notification" type="checkbox" value=""
                class="w-4 h-4 border-turquoise-600 rounded bg-turquoise-700 text-yellow-600 focus:ring-offset-turquoise-900 focus:ring-yellow-600">
              <label for="notification">
                Надсилати волонтерські оповіщення
              </label>
            </li>
            <li class="flex justify-center items-center gap-x-[5px] mt-[10px]">
              <button class="btn">Вийти</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>