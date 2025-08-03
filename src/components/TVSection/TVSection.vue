<style scoped lang="scss" src="./TVSection.scss"></style>

<script setup lang="ts">
    import { computed, ref } from 'vue'  
    import SectionTitle from '../SectionTitle/SectionTitle.vue';
    import VideoCard from './VideoCard/VideoCard.vue';
    import type { VideoModel } from '../../models/VideoModel';
    import { svgService } from '../../services/svg.service';
    import { VideoService } from '../../services/video.service';

    const props = defineProps<{
        onMobile: boolean
    }>()

    const playLogoSize = computed(() => props.onMobile ? 55 : 83)
    const tagSize = computed(() => 
        props.onMobile ? {w: 166, h: 35} : {w: 117, h: 24})

    const sideVideos = ref<VideoModel[]>(VideoService.getRandomVideos(3))
    const mainVideo = ref<VideoModel>(VideoService.getRandomVideos(1)[0])


</script>

<template>
    <div class="tv-backgound">
        <div class="tv-section">

            <!-- title -->
            <SectionTitle style="height: 45px;"
                :onMobile="onMobile"
                logoBackColor="white"
                logoFrontColor="#f20286"
                title="TV נדל״ן"
                titleColor="white"
                lineColor="white"
                tagColor="#f20286"
                tagTextColor="white"
            />

            <!-- main part -->
            <div class="context">

                <!-- video list -->
                <div class="left-side">
                    <VideoCard v-for="vid in sideVideos" 
                        :onMobile="props.onMobile"
                        :key="vid.id"
                        :video="vid"
                    />
                </div>

                <!-- main video -->
                <div class="right-side">

                    <!-- image area -->
                    <div class="top-area">
                        <img alt="video-image" :src="mainVideo.imageUrl"/>
                        <div class="tag">
                            <div class="svg-tag" v-html="svgService.getSvg
                            ('tag',  '#f20286', tagSize.w, tagSize.h)"/>
                            <p>TV נדל״ן</p>
                        </div>
                        <div class="play-logo" v-html="svgService.getSvg
                            ('play-logo', '', playLogoSize, playLogoSize)"/>
                    </div>

                    <!-- text area -->
                    <div class="bottom-area">
                        <p class="info">
                            <span>{{mainVideo.autor}}</span> | 
                            <span>{{mainVideo.date}}</span>
                        </p>
                        <h1>{{mainVideo.title}}</h1>
                        <p class="description">{{mainVideo.description}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>