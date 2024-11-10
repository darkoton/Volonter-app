<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { onMounted } from "vue";
import { initDatepickers } from "flowbite";
import { useRouter } from "vue-router";

const router = useRouter();

const schema = yup.object({
  name: yup.string().trim().required("Заповніть поле"),
  number: yup.number().positive("Не правильний номер картки").min(999999999999999, "Не правильний номер картки").required("Заповніть поле"),
  date: yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Введіть правильну дату (mm/yy)") // Проверка формата mm/yy
    .test("valid-date", "Введіть правильну дату", value => {
      console.log(value);

      if (!value) return false;

      const [month, year] = value.split('/');
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1; // Месяцы от 0 до 11

      // Проверка на валидность года и месяца
      const isValidYear = parseInt(year, 10) >= (currentYear % 100); // Последние 2 цифры текущего года
      const isValidMonth = parseInt(month, 10) >= currentMonth || (parseInt(year, 10) > currentYear % 100);

      return isValidMonth && isValidYear;
    })
    .required("Заповніть поле"), cvv: yup.number().min(99, 'Код повинен бути 3-х значним').max(999, 'Код повинен бути 3-х значним').required("Заповніть поле"),
});

function submit() {
  // router.push("/payment-confirm");
}

onMounted(() => {
  initDatepickers();
});
</script>


<template>
  <section class="py-8 antialiased md:py-16">
    <div class="container">
      <div class="mx-auto">
        <h2 class="text-xl font-semibold text-white sm:text-2xl">Оплата</h2>

        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
          <Form
            class="w-full rounded-lg border border-turquoise-700 bg-turquoise-900 p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8"
            @submit="submit" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-6 grid grid-cols-2 gap-4">
              <div class="col-span-2 sm:col-span-1">
                <label for="name" class="mb-2 block text-sm font-medium text-white">
                  Повне ім'я (як зазначено на картці)*
                </label>
                <!-- <Field name="name" :rules="rules" v-slot="{ field, errors, errorMessage }">
                  {{ console.log(field) }}
                  <input v-bind="field" type="text" />
                  <span>{{ errors[0] }}</span>
                  <span>{{ errorMessage }}</span>
                </Field> -->
                <Field name="name" type="text" id="name"
                  class="block w-full rounded-lg border border-turquoise-600 bg-turquoise-700 p-2.5 text-sm text-white placeholder:text-turquoise-400 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Алекс Мюллер" required />
                <ErrorMessage name="name" class="text-red-400" />

              </div>

              <div class="col-span-2 sm:col-span-1">
                <label for="number" class="mb-2 block text-sm font-medium text-white">
                  Номер картки*
                </label>
                <Field name="number" type="number" id="number"
                  class="block w-full rounded-lg border border-turquoise-600 bg-turquoise-700 p-2.5 pe-10 text-sm text-white placeholder:text-turquoise-400 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="xxxxxxxxxxxxxxxx" pattern="^[0-9]{12}(?:[0-9]{3})?$" required />
                <ErrorMessage name="number" class="text-red-400" />
              </div>

              <div>
                <label for="date" class="mb-2 block text-sm font-medium text-white">Термін дії
                  картки*</label>
                <div class="relative">
                  <div class="pointer-events-none inline-block absolute top-[12px] inset-y-0 start-0 ps-3.5">
                    <svg class="h-4 w-4 text-turquoise-500 dark:text-turquoise-400" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                        d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <Field name="date" datepicker datepicker-format="mm/yy" id="date" type="text"
                    class="block w-full rounded-lg border p-2.5 ps-9 text-sm border-turquoise-600 bg-turquoise-700 text-white placeholder:text-turquoise-400 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="12/23" required />
                  <ErrorMessage name="date" class="text-red-400" />
                </div>
              </div>

              <div>
                <label for="cvv-input" class="mb-2 flex items-center gap-1 text-sm font-medium text-white">
                  CVV*
                  <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover"
                    class="text-turquoise-500 hover:text-white">
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 24 24">
                      <!-- SVG content -->
                    </svg>
                  </button>
                  <div id="cvv-desc" role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-turquoise-700 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300">
                    Останні 3 цифри на звороті картки
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </label>
                <Field name="cvv" type="number" id="cvv" aria-describedby="helper-text-explanation"
                  class="block w-full rounded-lg border border-turquoise-600 bg-turquoise-700 p-2.5 text-sm text-white placeholder:text-turquoise-400 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="•••" required />
                <ErrorMessage name="cvv" class="text-red-400" />

              </div>
            </div>

            <button type="submit" class="flex justify-center w-full btn">
              Підтримати зараз
            </button>
          </Form>

          <div class="mt-6 grow sm:mt-8 lg:mt-0">
            <div class="space-y-4 rounded-lg border border-turquoise-700 bg-turquoise-900 p-6">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-turquoise-400">Сума</dt>
                  <dd class="text-base font-medium text-white">₴200</dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t border-turquoise-700 pt-2">
                <dt class="text-base font-bold text-white">
                  Загальна сума пожертви
                </dt>
                <dd class="text-base font-bold text-white">₴200</dd>
              </dl>
            </div>

            <div class="mt-6 flex items-center justify-center gap-8">
              <img class="h-8 w-auto dark:hidden" src="/img/paypal.svg" alt="" />
              <img class="hidden h-8 w-auto dark:flex" src="/img/paypal-dark.svg" alt="" />
              <img class="h-8 w-auto dark:hidden" src="/img/visa.svg" alt="" />
              <img class="hidden h-8 w-auto dark:flex" src="/img/visa-dark.svg" alt="" />
              <img class="h-8 w-auto dark:hidden" src="/img/mastercard.svg" alt="" />
              <img class="hidden h-8 w-auto dark:flex" src="/img/mastercard-dark.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
