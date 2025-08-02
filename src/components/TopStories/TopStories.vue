<style scoped lang="scss" src="./TopStories.scss"></style>

<script setup lang="ts">
    import Headlines from './Headlines/Headlines.vue';
    import AdRow from './AdRow/AdRow.vue';
    import MostViewedColumn from './MostViewedColumn/MostViewedColumn.vue';
    import { ref } from 'vue';
    import { StoryService } from '../../services/story.service';
    import type { StoryModel } from '../../models/StoryModel';

    const headlines = ref<StoryModel[]>(StoryService.getRandomStories(7))
    const mostViewed =  ref<StoryModel[]>(StoryService.getRandomStories(3))
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
