<script setup>
defineProps({
  width: {
    type: String,
    default: "100px",
  },
});
</script>

<template>
  <img class="w-full h-full" :style="{ maxWidth: width }" src="/img/logo.png" alt="" />
</template>