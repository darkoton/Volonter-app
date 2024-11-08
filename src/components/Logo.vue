<script setup>
import { defineProps } from 'vue'
defineProps({
  width: {
    type: String,
    default: '100%'
  }
})
</script>

<template>
  <img class="w-full h-full" :style="{ maxWidth: width }" src="/img/logo.png" alt="">
</template>