<script setup>
import { useAlertStore } from "@stores/alert.js"

const { alert } = useAlertStore()
const types = {
  info: "text-blue-400 bg-turquoise-800 border-blue-800",
  success: "text-green-400 bg-turquoise-800 border-green-500",
  warning: "text-yellow-400 bg-turquoise-800 border-yellow-500",
  error: "text-red-400 bg-turquoise-800 border-red-500",
}

</script>

<template>
  <div id="alert-border-1"
    class="fixed transition z-[100] top-[15px] right-0 translate-x-full max-w-full flex items-center p-4 py-2 mb-4 border-solid border-t-4"
    :class="[types[alert.type], alert.visible && '!-translate-x-[15px]'].join(' ')" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
      viewBox="0 0 20 20">
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <div class="ms-3 mr-[5px] text-[16px] font-medium" v-html="alert.message">
    </div>

  </div>
</template>