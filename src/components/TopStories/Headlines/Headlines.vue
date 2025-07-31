<template>
  <div class="headlines">

    <div class="main-headline">
      <div class="main-headline-info">
        <p>שון גאח | 11:00</p>
        <h1>היה פיצוץ</h1>
        <h3>שלום לכל מי שקורא!לום לכל מי שקורא!</h3>
      </div> 
      <div class="main-headline-left">
        <img alt="main-headline-image" src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small_2x/3d-world-news-background-loop-free-video.jpg"/>
        <p class="tag">פוליטיקה</p>
      </div>
    </div>

    <div class="headlines-card-list">
      <StoryCard v-for="card in storiesCards"
      :key="card.id"/>
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import StoryCard from '../../StoryCard/StoryCard.vue';


  interface StoriesCardModel {
  id: number
}

const storiesCards: StoriesCardModel[] = 
  [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]
</script>

<style scoped lang="scss" src="./Headlines.scss"></style>