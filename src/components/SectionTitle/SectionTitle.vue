<style scoped lang="scss" src="./SectionTitle.scss"></style>


<script setup lang="ts">
    import { computed } from 'vue'  
    import { svgService } from '../../services/svg.service';


  const props = defineProps<{
    onMobile: boolean
    logoBackColor: string
    logoFrontColor: string
    title: string
    titleColor: string
    lineColor: string
    tagColor: string
    tagTextColor: string
  }>()

  const tagType = computed(() => 
        props.onMobile ? 
        {w: 34, h: 24, name: 'small-tag'} : 
        {w: 117, h: 24, name:'tag'}
  )

</script>

<template>
    <div class="section-title">
        
        <div class="tag" :style="{color: props.tagTextColor}">
            <div class="svg-tag" v-html="svgService.getSvg
                (tagType.name, props.tagColor, tagType.w, tagType.h)"/>
            <i :class="`fa-solid fa-angle${props.onMobile ? 's' : ''}-left`"></i>
            <p v-if="!props.onMobile">לעמוד המדור</p>
        </div>

        <div class="line" :style="{backgroundColor: props.lineColor}"/>
        
        <div class="category-title">
            <h1 :style="{color: props.titleColor}">{{props.title}}</h1>
            <div class="logo" v-html="svgService.getSvg
                ('nadlan-colored-logo', props.logoBackColor, 0, 0 , props.logoFrontColor)"/>
        </div>

    </div>
</template>
