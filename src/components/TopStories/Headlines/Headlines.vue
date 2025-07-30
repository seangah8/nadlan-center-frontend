<template>
  <div class="headlines">

    <div class="main-headline">
      <div class="main-headline-info">
        <p>שון גאח | 11:00</p>
        <h1>היה פיצוץ</h1>
        <h3>שלום לכל מי שקורא!</h3>
      </div>
      <img alt="main-headline-image" src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small_2x/3d-world-news-background-loop-free-video.jpg"/>
    </div>

    <div class="headlines-card-list">
      <NewsCard v-for="card in newsCards"
      :key="card.id"/>
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import NewsCard from '../../NewsCard/NewsCard.vue';


  interface NewsCardModel {
  id: number
}

const newsCards: NewsCardModel[] = 
  [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]
</script>

<style scoped lang="scss" src="./Headlines.scss"></style>