<style scoped lang="scss" src="./StoryCard.scss"></style>

<script setup lang="ts">
  import type { StoryModel } from '../../models/StoryModel';
  import { svgService } from '../../services/svg.service';

  const props = defineProps<{
    story: StoryModel
  }>()

</script>


<template>
  <div class="story-card" v-if="props.story">
    <div class="upper-part">
        <img alt="stories-card-image" :src="props.story.imageUrl"/>
        <div class="tag" :style="{ 
          color: props.story.category.textColor
          }">
            <div class="svg-tag-desktop" v-html="svgService.getSvg
              ('tag',  props.story.category.color, 120, 27)"/>
            <div class="svg-tag-mobile" v-html="svgService.getSvg
              ('tag',  props.story.category.color, 85, 20)"/>
            <p>{{props.story.category.name}}</p>
        </div>
    </div>
    <div class="lower-part">
      <h3 class="title">{{props.story.title}}</h3>
        <p class="info">
          <span>{{props.story.autor}}</span> | 
          <span>{{props.story.date}}</span>
        </p>
    </div>
  </div>
</template>