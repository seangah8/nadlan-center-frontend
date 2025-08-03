<style scoped lang="scss" src="./PodcastCard.scss"></style>

<script setup lang="ts">
    import type { PodcastModel } from '../../../models/PodcastModel';

    const { podcast } = defineProps<{
        podcast: PodcastModel
    }>()

</script>

<template>
    <div class="podcast-card">

        <!-- icons -->
        <div class="icons-area">
            <i class="fa-solid fa-headphones"></i>
            <i class="fa-solid fa-play"></i>
        </div>

        <!-- text area -->
        <div class="text-area">
            <div class="main-text">
                <h1>{{ podcast.host }}</h1>
                <h3>{{ podcast.aboutHost }}</h3>
                <p class="description">{{ podcast.description }}</p>
            </div>
            <p class="info">פודקסטים  |  {{ podcast.date }}  |  {{ podcast.autor }}</p>
        </div>

        <!-- image area -->
        <div class="overflow-controller">
            <img alt="podcast-image" :src="podcast.imageUrl"></img>
        </div>

            
    </div>
</template>