<template>
<div id='markdown'>
  <mavon-editor :value="value" style="height: 100%"></mavon-editor>
</div>
</template>

<script>
// Local Registration
// import mavonEditor from 'mavon-editor'
var mavonEditor = require('mavon-editor')

export default {
   name: 'editor',
   components: {
       'mavon-editor': mavonEditor.mavonEditor
   }
}
</script>
<style lang="sass" rel="stylesheet/scss">
//  import 'mavon-editor/dist/css/index.css'
#markdown {
   margin: auto;
   width: 100%;
   height: 700px;
}
</style>
