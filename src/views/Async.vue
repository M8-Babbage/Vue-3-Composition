<template>
  <AsyncComponent />
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const AsyncComponent = defineAsyncComponent(() => import('../components/Button.vue'));
</script>
<style scoped></style>