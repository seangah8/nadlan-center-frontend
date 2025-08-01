<style scoped lang="scss" src="./StoryCard.scss"></style>

<script setup lang="ts">
  import type { StoryModel } from '../../models/StoryModel';

  const props = defineProps<{
    story: StoryModel
  }>()

</script>


<template>
  <div class="story-card" v-if="props.story">
    <div class="upper-part">
        <img alt="stories-card-image" :src="props.story.imageUrl"/>
        <p class="tag" :style="{ 
          backgroundColor: props.story.category.color,
          color: props.story.category.textColor
          }">
          {{props.story.category.name}}
        </p>
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