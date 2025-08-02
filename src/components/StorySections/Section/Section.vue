<style scoped lang="scss" src="./Section.scss"></style>

<script setup lang="ts">
import { ref } from 'vue'
import { StoryService } from '../../../services/story.service';
import { svgService } from '../../../services/svg.service';
import type { StoryModel } from '../../../models/StoryModel';
import StoryCard from '../../StoryCard/StoryCard.vue';
import AdRow from '../../TopStories/AdRow/AdRow.vue';


  const props = defineProps<{
    category: {name: string, color: string, textColor: string}
    index: number
  }>()

  const stories = ref<StoryModel[]>   
    (StoryService.getStoriesFromCategory(4, props.category.name))

  const showAdAfter : boolean = (props.index % 2 === 1)

</script>

<template>
    <div class="section">
        <div class="top-area">
            <div class="tag">
                <div class="desktop-symbol" :style="{color: props.category.textColor}">
                    <div class="svg-tag" v-html="svgService.getSvg
                        ('tag', props.category.color, 117, 24)"/>
                    <i class="fa-solid fa-angle-left"></i>
                    <p>לעמוד המדור</p>
                </div>
                <div class="mobile-symbol">
                    <div class="svg-tag" v-html="svgService.getSvg
                        ('small-tag', props.category.color, 34, 24)"/>
                    <i :style="{color: props.category.textColor}" class="fa-solid fa-angles-left"></i>
                </div>
            </div>
            <div class="line" :style="{backgroundColor: props.category.color}"/>
            <div class="category-title">
                <h1>{{props.category.name}}</h1>
                <div class="logo" v-html="svgService.getSvg
                    ('nadlan-colored-logo', props.category.color)"/>
            </div>

        </div>
        <div class="card-list">
            <StoryCard v-for="story in stories"
            :key="story.id"
            :story="story"/>
        </div>
        <AdRow class="ad-part" v-if="showAdAfter" style="margin-top: 15px;"/>

    </div>
</template>