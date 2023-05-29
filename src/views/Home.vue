<template>
  Hello!
</template>
<script setup>
import { onMounted, reactive } from 'vue';

// Cuando usamos reactive, es para objetos, cuando usamos ref es para valores primitivos, la diferencia es que al usar reactive, no debemos apuntar al valor, sino a la propiedad del objeto, en cambio con ref, apuntamos al valor directamente "item.value". 
const obj = reactive({
  msg: 'Hello World!'
});

onMounted(() => {
  console.log('mounted');
  obj.msg = 'Hello Vue 3!';
  console.log(obj.msg);
});
</script>
<style scoped></style>