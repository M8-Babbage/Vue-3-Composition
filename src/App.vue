<template>
  <ol>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <hr>
    <RouterLink :to="{name: 'dynamic'}">Dynamic</RouterLink>
    <hr>
    <RouterLink :to="{name: 'async'}">Async</RouterLink>
    <hr>
    <RouterLink :to="{name: 'transition'}">Transition</RouterLink>
    <hr>
    <RouterLink :to="{name: 'teleports'}">Teleports</RouterLink>
    <hr>
    <RouterLink :to="{name: 'cycle'}">Life cycle</RouterLink>
  </ol>
  <router-view></router-view>
</template>

<script setup>
</script>

<style scoped></style>
