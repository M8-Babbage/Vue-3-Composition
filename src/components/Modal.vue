<template>
  <div>
    <button @click="toggle">Modal</button>
    <Teleport to="body">
      <div v-show="show" class="modal">
        <h1>Titulo</h1>
        <p>Lorem ipsum</p>
        <button @click="toggle">Close</button>
      </div>
    </Teleport>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const toggle = () => {
  show.value = !show.value
}
</script>