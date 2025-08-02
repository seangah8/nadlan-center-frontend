<style scoped lang="scss" src="./StorySections.scss"></style>

<script setup lang="ts">
    import Section from './Section/Section.vue';
    import { storiesCategories } from '../../database/stories.data';

    const props = defineProps<{
        onMobile: boolean
    }>()

</script>

<template>
    <div class="story-sections">
        <div class="sections">
            <Section
                v-for="(category, index) in storiesCategories"
                :key="index"
                :onMobile="props.onMobile"
                :category="category"
                :index="index"
            />
        </div>
    </div>
</template>