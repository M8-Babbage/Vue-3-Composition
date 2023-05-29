<template>
  <!-- Añadimos una referencia al button -->
  <button ref="refButton">Button ref</button>
</template>
<script setup>
import { onMounted, ref } from 'vue';

// Creamos la variable con el mismo nombre del atributo ref, en este caso refButton, y le asignamos el valor de ref(null), que es el valor inicial que le asignamos a la referencia.
const refButton = ref(null)

// Ya podemos usarlo en cualquier lugar, en este caso en el onMounted, para ver que efectivamente se ha creado la referencia.
onMounted(() => {
  console.log(refButton.value);
})
</script>
<style scoped></style>