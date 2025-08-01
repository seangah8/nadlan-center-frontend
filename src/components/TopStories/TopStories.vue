<style scoped lang="scss" src="./TopStories.scss"></style>

<script setup lang="ts">
    import Headlines from './Headlines/Headlines.vue';
    import AdRow from './AdRow/AdRow.vue';
    import MostViewedColumn from './MostViewedColumn/MostViewedColumn.vue';
    import { ref } from 'vue';
    import { utilService } from '../../services/util.service';
    import type { StoryModel } from '../../models/StoryModel';

    const headlines = ref<StoryModel[]>(utilService.getRandomStories(7))
    const mostViewed =  ref<StoryModel[]>(utilService.getRandomStories(3))
</script>

<template>
  <div class="top-stories">
    <div class="splitter-columns">
      <MostViewedColumn :stories="mostViewed"/>
      <div class="splitter-rows">
        <AdRow/>
        <Headlines :headlines="headlines"/>
        <AdRow class="ad-row-end"/>
      </div>
      <div class="vertical-line"></div>
    </div>
  </div>
</template>
