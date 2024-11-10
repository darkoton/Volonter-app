<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router'
import * as yup from 'yup';

const router = useRouter()

const schema = yup.object({
  name: yup.string().required("Заповніть поле"),
  email: yup.string().email("В правильний email").required("Заповніть поле"),
  phone: yup.string().matches(/^[+]?[0-9]{10,15}$/, "Введіть правильний номер телефона").required("Заповніть поле"),
  password: yup.string().min(8, "Пароль має бути не менше 8 символів").trim().required("Заповніть поле"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], "Паролі мають співпадати") // Проверка на совпадение с password
    .min(8, "Пароль має бути не менше 8 символів")
    .trim()
    .required("Заповніть поле"),
});

const form = [
  {
    title: "Ваше ім'я",
    name: "name",
    placeholder: "Alex Muller",
    type: "text"
  },
  {
    title: "Ваший email",
    name: "email",
    placeholder: "name@company.com",
    type: "email"
  },
  {
    title: "Ваший номер телефона",
    name: "phone",
    placeholder: "+380986252683",
    type: "text"
  },
  {
    title: "Пароль",
    name: "password",
    placeholder: "••••••••",
    type: "text"
  },
  {
    title: "Підтвердіть пароль",
    name: "confirmPassword",
    placeholder: "••••••••",
    type: "text"
  }
]

function submit() {
  console.log('submit')
  // router.push('/profile')
}
</script>


<template>
  <div class="register h-full flex items-center">
    <div class="container flex justify-center">
      <div class="w-full bg-turquoise-900 rounded-lg shadow border-turquoise-700 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            Створіть акаунт
          </h1>
          <Form class="space-y-2 md:space-y-4" @submit="submit" :validation-schema="schema" v-slot="{ errors }">
            <div v-for="fieldData in form" :key="fieldData.name">
              <label :for="fieldData.name" class="block mb-2 text-sm font-medium text-white">
                {{ fieldData.title }}
              </label>
              <Field :type="fieldData.type" :name="fieldData.name" :id="fieldData.name"
                class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                :class="errors[fieldData.name] && 'border-red-400'" :placeholder="fieldData.placeholder" required />
              <ErrorMessage :name="fieldData.name" class="text-red-400" />
            </div>
            <button type="submit" class="btn w-full">
              Cтворити акаунт
            </button>
            <p class="text-sm font-light text-turquoise-400">
              Вже маєте акаунт? <router-link to="login" class="font-medium link">Увійдіть
                тут</router-link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
