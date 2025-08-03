<style scoped lang="scss" src="./StoryCard.scss"></style>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { StoryModel } from '../../models/StoryModel';
  import { svgService } from '../../services/svg.service';

  const props = defineProps<{
    onMobile: boolean
    story: StoryModel
  }>()

  const tagSize = computed(() => 
        props.onMobile ? {w: 85, h: 20} : {w: 120, h: 27}
  )

</script>


<template>
  <div class="story-card" v-if="props.story">

    <!-- image area -->
    <div class="upper-part">
        <img alt="stories-card-image" :src="props.story.imageUrl"/>
        <div class="tag" :style="{ 
          color: props.story.category.textColor
          }">
            <div class="svg-tag" v-html="svgService.getSvg
              ('tag',  props.story.category.color, tagSize.w, tagSize.h)"/>
            <p>{{props.story.category.name}}</p>
        </div>
    </div>

    <!-- text area -->
    <div class="lower-part">
      <h3 class="title">{{props.story.title}}</h3>
        <p class="info">
          <span>{{props.story.autor}}</span> | 
          <span>{{props.story.date}}</span>
        </p>
    </div>
    
  </div>
</template>