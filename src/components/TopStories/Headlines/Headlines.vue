<style scoped lang="scss" src="./Headlines.scss"></style>

<script setup lang="ts">
  import StoryCard from '../../StoryCard/StoryCard.vue';
  import type { StoryModel } from '../../../models/StoryModel';

  const props = defineProps<{
    headlines: StoryModel[]
  }>()

  const mainHeadline: StoryModel = props.headlines[0]
  const otherHeadlines: StoryModel[] = props.headlines.slice(1, 7)



</script>


<template>
  <div class="headlines">

    <div class="main-headline">
      <div class="main-headline-left">
        <p>
          <span>{{mainHeadline.autor}}</span> | 
          <span>{{mainHeadline.date}}</span>
        </p>
        <h1>{{ mainHeadline.title }}</h1>
        <h3>{{ mainHeadline.description }}</h3>
        <div class="fade"></div>
      </div> 
      <div class="main-headline-right">
        <img alt="main-headline-image" :src="mainHeadline.imageUrl"/>
        <p class="tag" :style="{
          backgroundColor: mainHeadline.category.color,
          color: mainHeadline.category.textColor
        }">{{ mainHeadline.category.name }}</p>
      </div>
    </div>

    <div class="headlines-card-list">
      <StoryCard v-for="card in otherHeadlines"
      :key="card.id"
      :story="card"/>
    </div>
    
  </div>
</template>