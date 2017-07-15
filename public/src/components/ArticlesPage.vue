<template>
<div>
  <tagsList></tagsList>
  <!-- Page Layout here -->
  <div class="articles-content">
    <!-- Grey navigation panel -->
    <articles></articles>
  </div>
</div>
</template>

<script>
import Articles from './Articles.vue'
import TagsList from './TagsList.vue'
export default {
  name: 'articlesPage',
  components: {
    articles: Articles,
    tagsList: TagsList
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.articles-content {
  position: fixed;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 345px;
  right:0;
  top: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
