<template>
<div>
  <tagsList></tagsList>
  <!-- Page Layout here -->
  <div class="article-content">
    <!-- Grey navigation panel -->
    <artcl></artcl>
  </div>
</div>
</template>

<script>
import Article from './Article.vue'
import TagsList from './TagsList.vue'
export default {
  name: 'articlePage',
  components: {
    artcl: Article,
    tagsList: TagsList
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.article-content{
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
