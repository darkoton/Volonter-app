<script setup>
import { ref } from "vue"
import TextEditor from './TextEditor.vue';

const value = ref("")
</script>

<template>
  <div class="news-editor">
    <div class="container">
      <TextEditor v-model="value" />
      {{ value }}
    </div>
  </div>

</template>