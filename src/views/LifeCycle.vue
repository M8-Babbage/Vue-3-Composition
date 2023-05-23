<template>
  <span>Watch console!</span>
  <hr>
  <button id="count" @click="count++">{{ count }} Update component</button>
  <button>
    <router-link to="/">Unmount component</router-link>
    </button>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated } from 'vue'

const count = ref(0)

// First life cycle
onMounted(() => {
  console.log('onMounted');
})

// This hook will launch when state component is updated, be careful with infinite loops
onUpdated(() => {
  console.log('onUpdated');
})

// This hook will launch when component is unmounted, for example when you change the route, is useful to remove listeners
onUnmounted(() => {
  console.log('onUnmounted');
})

// This hook will launch before component is mounted
onBeforeMount(() => {
  console.log('onBeforeMount');
})

// This hook will launch before component is updated
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
})

// This hook will launch before component is unmounted
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
})
</script>
<style scoped></style>