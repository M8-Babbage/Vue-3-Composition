<template>
  <span>{{ message }}</span>
</template>
<script setup>
import { ref } from 'vue';
const message = ref('Hello from button')
</script>
<style scoped></style>