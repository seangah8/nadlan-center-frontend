<script setup lang="ts">
  import './App.scss'
  import Navigation from './components/Navigation/Navigation.vue';
  import TopStories from './components/TopStories/TopStories.vue';
  import StorySections from './components/StorySections/StorySections.vue';
  import TVSection from './components/TVSection/TVSection.vue'; 
  import PodcastSection from './components/PodcastSection/PodcastSection.vue';
  import { ref, onMounted, onUnmounted } from 'vue'

  // helps avoid creating separate elements for different screen sizes
  const onMobile = ref(window.innerWidth < 600)
  const handleResize = () => {onMobile.value = window.innerWidth < 600}
  onMounted(() => {window.addEventListener('resize', handleResize)})
  onUnmounted(() => {window.removeEventListener('resize', handleResize)})

</script>

<template>
  <Navigation/>
  <TopStories :onMobile="onMobile"/>
  <StorySections :onMobile="onMobile"/>
  <TVSection :onMobile="onMobile"/>
  <PodcastSection/>
</template>