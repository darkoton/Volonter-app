<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { useAlertStore } from "@stores/alert.js";
import { login } from "@plugins/firebase/auth.js";
import { useUserStore } from "@stores/user.js";

const alertStore = useAlertStore();
const router = useRouter();
const userStore = useUserStore();

if (userStore.authorized) {
  router.push("/profile");
}

const schema = yup.object({
  email: yup.string().email("В правильний email").required("Заповніть поле"),
  password: yup.string().trim().required("Заповніть поле"),
});

const form = [
  {
    title: "Ваший email",
    name: "email",
    placeholder: "name@company.com",
    type: "email",
  },
  {
    title: "Пароль",
    name: "password",
    placeholder: "••••••••",
    type: "password",
  },
];

async function submit(values, { resetForm }) {
  try {
    await login(values.email, values.password);
    alertStore.showAlert("Ви успішно увійшли до облікового запису!", "success");
    resetForm();
    router.push("/profile");
  } catch (err) {
    alertStore.showAlert(err.message, "error");
  }
}
</script>

<template>
  <div class="login h-full flex items-center">
    <div class="container flex justify-center">
      <div
        class="w-full my-[30px] bg-turquoise-900 rounded-lg shadow border-turquoise-700 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl"
          >
            Увійдіть у свій обліковий запис
          </h1>
          <Form
            class="space-y-2 md:space-y-4"
            @submit="submit"
            :validation-schema="schema"
            v-slot="{ errors, isSubmitting }"
          >
            <div v-for="fieldData in form" :key="fieldData.name">
              <label
                :for="fieldData.name"
                class="block mb-2 text-sm font-medium text-white"
              >
                {{ fieldData.title }}
              </label>
              <Field
                autocomplete
                :type="fieldData.type"
                :name="fieldData.name"
                :id="fieldData.name"
                class="bg-turquoise-700 border-turquoise-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 placeholder-turquoise-400"
                :class="errors[fieldData.name] && 'border-red-400'"
                :placeholder="fieldData.placeholder"
                required
              />
              <ErrorMessage :name="fieldData.name" class="text-red-400" />
            </div>
            <!-- <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox"
                    class="w-4 h-4 border-turquoise-600 rounded bg-turquoise-700 text-yellow-600 focus:ring-offset-turquoise-900 focus:ring-yellow-600"
                    required />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-turquoise-300">Запам'ятати мене</label>
                </div>
              </div>
            </div> -->
            <button :disabled="isSubmitting" type="submit" class="btn w-full">
              Увійти
            </button>
            <p class="text-sm font-light text-turquoise-400">
              Ще не маєте облікового запису?
              <router-link
                :to="{ name: 'user-register' }"
                class="font-medium link"
                >Зареєструватися</router-link
              >
            </p>
            <p class="text-sm !mt-[5px] font-light text-turquoise-400">
              Хочете стати волонтером?
              <router-link
                :to="{ name: 'volunteer-register' }"
                class="font-medium link"
                >Стати волонтером</router-link
              >
            </p>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
