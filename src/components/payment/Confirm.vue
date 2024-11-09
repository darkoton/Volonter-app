<template>
  <section class="py-8 md:py-16">
    <div class="container">
      <div class="w-full max-w-[500px] mx-auto">
        <h2 class="text-xl font-semibold text-white sm:text-2xl mb-2">
          Дякуємо за вашу підтримку!
        </h2>
        <p class="text-gray-400 mb-6 md:mb-8">
          Ваш чек
          <a href="#" class="font-medium text-white hover:underline"
            >#7564804</a
          >
          буде оброблено протягом 24 годин в робочі дні.
        </p>
        <div
          class="space-y-4 sm:space-y-2 rounded-lg border border-gray-700 bg-gray-800 p-6 mb-6 md:mb-8"
        >
          <dl class="sm:flex items-center justify-between gap-4">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-400">Дата</dt>
            <dd class="font-medium text-white sm:text-end">14 Травня 2024</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-400">
              Спосіб оплати
            </dt>
            <dd class="font-medium text-white sm:text-end">Єдиний платіж</dd>
          </dl>
        </div>
        <div class="flex items-center space-x-4">
          <router-link
            to="/"
            class="py-2.5 px-5 text-sm font-medium text-gray-400 bg-gray-800 rounded-lg border border-gray-600 hover:text-white hover:bg-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-700 focus:outline-none"
            >Повернутися на головну</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
    