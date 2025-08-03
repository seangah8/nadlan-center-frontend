<style scoped lang="scss" src="./AdRow.scss"></style>

<script setup lang="ts">

    const props = defineProps<{
      imageName : string
      height: number
    }>()

</script>

<template>
  <div class="ad-row" :style="{ height: props.height + 'px' }">
    <img alt="ad-row-image" :src="`/${props.imageName}.png`">
  </div>
</template>

