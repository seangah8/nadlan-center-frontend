<template>
  <div class="top-stories">
    <div class="splitter-columns">
      <MostViewedColumn/>
      <div class="splitter-rows">
        <RowAd/>
        <Headlines/>
        <RowAd/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import Headlines from './Headlines/Headlines.vue';
    import RowAd from './RowAd/RowAd.vue';
    import MostViewedColumn from './MostViewedColumn/MostViewedColumn.vue';
</script>


<style scoped lang="scss" src="./TopStories.scss"></style>
