
<template>
  <div>
    <p class="line">You clicked {{ count }} times</p>
    <button @click="increment">Click me</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref<number>(0)

  function increment() : void {
    count.value++
  }
</script>

<style scoped lang="scss" src="./Counter.scss"></style>

