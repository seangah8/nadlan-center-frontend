<template>
  <div class="most-viewed-column">
    <h2>החדשות הנצפות ביותר</h2>
    <NewsCard/>
    <NewsCard/>
    <AdCard/>
    <NewsCard/>
  </div>
</template>

<script setup lang="ts">
  import NewsCard from '../../NewsCard/NewsCard.vue';
  import AdCard from '../AdCard/AdCard.vue';
</script>

<style scoped lang="scss" src="./MostViewedColumn.scss"></style>
