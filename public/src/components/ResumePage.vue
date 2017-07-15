<template>
<div id="app">
  <profile></profile>
  <!-- Page Layout here -->
  <div class="resume-content">
    <!-- Grey navigation panel -->
    <resume></resume>
  </div>
</div>
</template>

<script>
import Resume from './Resume.vue'
import Profile from './Profile.vue'
export default {
  name: 'resumePage',
  components: {
    resume: Resume,
    profile: Profile
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.resume-content{
  position: fixed;
  width: auto;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 345px;
  right: 0;
  top: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
