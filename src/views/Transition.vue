<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="ease">
    <Menu v-if="show" />
  </Transition>
</template>
<script setup>
import { ref } from 'vue';
import Menu from '../components/Menu.vue';
// En este caso usamos ref porque es un valor primitivo, si fuera un objeto usariamos reactive
const show = ref(false);
</script>
<style scoped>
.ease-enter-active,
.ease-leave-active {
  transition: opacity 0.5s ease;
}

.ease-enter-from,
.ease-leave-to {
  opacity: 0;
}
</style>