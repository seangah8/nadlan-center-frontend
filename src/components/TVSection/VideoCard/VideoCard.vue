<style scoped lang="scss" src="./VideoCard.scss"></style>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { VideoModel } from '../../../models/VideoModel';
  import { svgService } from '../../../services/svg.service';

  const props = defineProps<{
    onMobile: boolean
    video: VideoModel
  }>()

  const playLogoSize = 
    computed(()=>props.onMobile ? 36 : 54)

</script>

<template>
    <div class="video-card">

        <!-- text area -->
        <div class="left-area">
            <h3>{{props.video.title}}</h3>
            <p class="info">
                <span>{{props.video.autor}}</span> | 
                <span>{{props.video.date}}</span>
            </p>
        </div>

        <!-- image area -->
        <div class="right-area">
            <img alt="video-image" :src="props.video.imageUrl"/>
            <div class="tag">
                <div class="svg-tag" v-html="svgService.getSvg
                    ('tag',  '#f20286', 117, 24)"/>
                <p>TV נדל״ן</p>
            </div>
            <div class="play-logo" v-html="svgService.getSvg
                ('play-logo', '', playLogoSize, playLogoSize)"/>
        </div>
        
    </div>
</template>