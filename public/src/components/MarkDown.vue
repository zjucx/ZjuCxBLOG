<template>
<div id='markdown'>
  <div class="publish" @click="publish">
    <i class="fa fa-paper-plane fa-2x" aria-hidden="true"></i>
  </div>
  <mavon :value="value" style="height: 100%" @change="change"></mavon>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

var mavonEditor = require('mavon-editor')

export default {
   name: 'editor',
   components: {
       'mavon': mavonEditor.mavonEditor
   },
   data() {
     return {
       value: '',
       reder: '',
     }
   },
   watch: {
    toggle(value){
      console.log(value);
      this.$router.push({path: '/'})
    },
   },
   computed: {
     ...mapState({
       user: state => state.user.userInfo.name,
     }),
     toggle() {
       return this.$store.state.article.toggle
     },
   },
   methods: {
      $imgAdd(pos, $file){
          this.img_file[pos] = $file;
      },
      $imgDel(pos){
          delete this.img_file[pos];
      },
      uploadimg($e){
          // upload files in one request.
          console.log(this.img_file);
          var formdata = new FormData();
          for(var _img in this.img_file){
              formdata.append(_img, this.img_file[_img]);
          }
          axios({
              url: 'http://127.0.0.1/index.php',
              method: 'post',
              data: formdata,
              headers: { 'Content-Type': 'multipart/form-data' },
          }).then((res) => {
              console.log(res)
          })
      },
      change(value, reder) {
        this.value = value
        this.reder = reder
      },
      publish() {
        this.$store.dispatch('publish', {
          'value': this.value,
          'reder': this.reder,
          'user': this.user,
        })
      }
    }
}
</script>
<style lang="sass" rel="stylesheet/scss">
#markdown {
   margin: auto;
   width: 100%;
   height: 700px;
   .publish {
     z-index: 99999;
     bottom: 100px;
     width: 48px;
     height: 48px;
     border: 4px solid rgb(189, 255, 242);
     border-radius: 48px;
     position: absolute;
     right: 100px;
     background-color: #16a085!important;
     i {
       padding: 8px 0 0 6px;
     }
   }
}
</style>
