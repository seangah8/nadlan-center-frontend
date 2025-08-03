<style scoped lang="scss" src="./Section.scss"></style>

<script setup lang="ts">
import { ref } from 'vue'
import { StoryService } from '../../../services/story.service';
import type { StoryModel } from '../../../models/StoryModel';
import StoryCard from '../../StoryCard/StoryCard.vue';
import AdRow from '../../AdRow/AdRow.vue';
import SectionTitle from '../../SectionTitle/SectionTitle.vue';


  const props = defineProps<{
    onMobile: boolean
    category: {name: string, color: string, textColor: string}
    index: number
  }>()

  const stories = ref<StoryModel[]>   
    (StoryService.getStoriesFromCategory(4, props.category.name))

  const showAdAfter : boolean = (props.index % 2 === 1)

</script>

<template>
    <div class="section">

      <!-- title -->
      <SectionTitle 
        :onMobile="props.onMobile"
        :logoBackColor="props.category.color"
        logoFrontColor="#404040"
        :title="props.category.name"
        titleColor="#404040"
        :lineColor="props.category.color"
        :tagColor="props.category.color"
        :tagTextColor="props.category.textColor"
      />

      <!-- card list -->
      <div class="card-list">
          <StoryCard v-for="story in stories"
          :onMobile="props.onMobile"
          :key="story.id"
          :story="story"/>
      </div>

      <!-- ad -->
      <AdRow class="ad-part" v-if="showAdAfter" style="margin-top: 15px;"/>

    </div>
</template>