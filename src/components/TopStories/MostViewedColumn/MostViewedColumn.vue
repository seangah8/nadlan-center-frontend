<template>
  <div class="most-viewed-column">
    <h2>הכתבות הנצפות ביותר:</h2>
    <StoryCard/>
    <StoryCard/>
    <AdCard/>
    <StoryCard/>
  </div>
</template>

<script setup lang="ts">
  import StoryCard from '../../StoryCard/StoryCard.vue';
  import AdCard from '../AdCard/AdCard.vue';
</script>

<style scoped lang="scss" src="./MostViewedColumn.scss"></style>
