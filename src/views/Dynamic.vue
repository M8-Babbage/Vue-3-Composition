<template>
  <component :is="component" />
  <hr>
  <button @click="changeComponent()">Change component</button>
</template>
<script setup>
import { ref, shallowRef } from 'vue';
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'

const component = shallowRef(Button)

const changeComponent = () => {
  component.value = component.value === Button ? Card : Button
}

</script>