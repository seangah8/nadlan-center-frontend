<style scoped lang="scss" src="./MostViewedColumn.scss"></style>

<script setup lang="ts">
  import StoryCard from '../../StoryCard/StoryCard.vue';
  import AdCard from '../AdCard/AdCard.vue';
  import type { StoryModel } from '../../../models/StoryModel';

  const props = defineProps<{
    stories : StoryModel[],
  }>()

</script>


<template>
  <div class="most-viewed-column">
    <h2>הכתבות הנצפות ביותר</h2>
    <StoryCard :story="props.stories[0]"/>
    <StoryCard :story="props.stories[1]"/>
    <AdCard/>
    <StoryCard :story="props.stories[2]"/>
  </div>
</template>
