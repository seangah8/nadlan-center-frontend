<template>
  <div class="top-stories">
    <div class="splitter-columns">
      <MostViewedColumn/>
      <div class="splitter-rows">
        <AdRow/>
        <Headlines/>
        <AdRow class="ad-row-end"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import Headlines from './Headlines/Headlines.vue';
    import AdRow from './AdRow/AdRow.vue';
    import MostViewedColumn from './MostViewedColumn/MostViewedColumn.vue';
</script>


<style scoped lang="scss" src="./TopStories.scss"></style>
