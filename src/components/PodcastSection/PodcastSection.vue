<style scoped lang="scss" src="./PodcastSection.scss"></style>

<script setup lang="ts">
    import { ref } from 'vue'
    import SectionTitle from '../SectionTitle/SectionTitle.vue';
    import PodcastCard from './PodcastCard/PodcastCard.vue';
    import type { PodcastModel } from '../../models/PodcastModel';
    import { PodcastService } from '../../services/podcast.service';

    const podcasts = ref<PodcastModel[]>(PodcastService.getRandomPodcast(4))

</script>

<template>
    <div class="podcast-layout">
        <div class="podcast-section">
            <SectionTitle
                :onMobile="false"
                logoBackColor="#404040"
                logoFrontColor="#f20286"
                title="פודקאסטים"
                titleColor="#404040"
                lineColor="#404040"
                tagColor="#f20286"
                tagTextColor="white"
            />
            <div class="podcasts-list">
                <PodcastCard v-for="pod in podcasts"
                    :key="pod.id"
                    :podcast="pod"
                />
            </div>

        </div>
    </div>
</template>