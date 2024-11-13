<script setup>
import { computed } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import * as yup from "yup";
import { register } from "@plugins/firebase/auth.js";
import { setData } from "@plugins/firebase/firestore.js";
import { useAlertStore } from "@stores/alert.js";
import { useUserStore } from "@stores/user.js";

const { authorized } = useUserStore();
const alertStore = useAlertStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const typeUser = computed(() => {
  if (route.name === "volunteer-register") {
    return "volunteer";
  } else if (route.name === "user-register") {
    return "user";
  }
});

if (authorized) {
  router.push("/profile");
}

const schema = yup.object({
  name: yup.string().required("Заповніть поле"),
  email: yup.string().email("В правильний email").required("Заповніть поле"),
  phone: yup
    .string()
    .matches(/^[+]?[0-9]{10,15}$/, "Введіть правильний номер телефона")
    .required("Заповніть поле"),
  password: yup
    .string()
    .min(6, "Пароль має бути не менше 6 символів")
    .trim()
    .required("Заповніть поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Паролі мають співпадати") // Проверка на совпадение с password
    .min(6, "Пароль має бути не менше 6 символів")
    .trim()
    .required("Заповніть поле"),
});

const form = [
  {
    title: "Ваше ім'я",
    name: "name",
    placeholder: "Alex Muller",
    type: "text",
  },
  {
    title: "Ваший email",
    name: "email",
    placeholder: "name@company.com",
    type: "email",
  },
  {
    title: "Ваший номер телефона",
    name: "phone",
    placeholder: "+380986252683",
    type: "text",
  },
  {
    title: "Пароль",
    name: "password",
    placeholder: "••••••••",
    type: "password",
  },
  {
    title: "Підтвердіть пароль",
    name: "confirmPassword",
    placeholder: "••••••••",
    type: "password",
  },
];

async function submit(values, { resetForm }) {
  try {
    const user = await register(values.email, values.password);
    const { accessToken, uid, email } = user;

    const userInfo = await setData(["users", uid], {
      uid,
      email: email,
      name: values.name,
      phone: values.phone,
      role: typeUser.value,
      news: false,
      notification: false,
    });

    alertStore.showAlert("Ви успішно зареєструвалися як волонтер!", "success");
    resetForm();
    router.push("/profile");
  } catch (err) {
    alertStore.showAlert(err.message, "error");
  }
}
</script>


<template>
  <div class="register h-full flex items-center">
    <div class="container flex justify-center">
      <div
        class="w-full my-[30px] bg-turquoise-900 rounded-lg shadow border-turquoise-700 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl"
          >
            {{ typeUser === "volunteer" ? "Станьне волонтером" : "" }}
            {{ typeUser === "user" ? "Створіть акаунт" : "" }}
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
            <button :disabled="isSubmitting" type="submit" class="btn w-full">
              Cтворити акаунт
            </button>
            <p class="text-sm font-light text-turquoise-400">
              Вже маєте акаунт?
              <router-link to="/join/login" class="font-medium link"
                >Увійдіть тут</router-link
              >
            </p>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
