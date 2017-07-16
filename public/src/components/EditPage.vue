<template>
  <div id="publish">
      <markDown></markDown>
  </div>
</template>

<script>
import MarkDown from './MarkDown.vue'

export default {
  name: 'editPage',
  components: {
    markDown: MarkDown,
  }
}
</script>

<style lang="sass" rel="stylesheet/scss">
#publish {
  color: #2c3e50;
  padding-left: 45px;
}
</style>
