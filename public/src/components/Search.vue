<template>
  <section class="search">
    <div class="form" @keyup.enter="doSearch">
      <p class="icon">
        <i class="fa fa-bug fa-5x"></i>
      </p>
      <p class="input">
        <!-- <i class="fa fa-search fa-2x"></i> -->
        <input id="search"
               type="text"
               v-model.trim="search"
        >
      </p>
      <p class="info" v-text="info"></p>
      <p>
        <button @click="doSearch()">I'm Feeling Lucky
        </main>
        </button>
      </p>
    </div>
  </section>
</template>
<script>
  // import {mapActions} from 'vuex'
  // import {get, set}  from '../../assets/js/cookieUtil'

  export default{
    data(){
      return {
        search: '',
        info: ''
      }
    },
    methods: {
      doSearch(){
        if (!this.search.length) return this.info = '请输入搜索内容'

        this.search({search: this.search})
          .then(() => {
            const date = new Date(Date.now() + 60000 * 30)
            set('user', this.search, date, '/', location.hostsearch)
            this.$router.push({path: '/console'})
          })
          .catch(msg => this.info = msg)
      },
      clearInfo(){
        this.info = ''
      },
      // ...mapActions(['search'])
    },
    watch: {
      search: 'clearInfo',
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss">
@import "../assets/style/variables";

section.search {
  position: relative;
  height: 100%;
  min-height: 500px;
  .form {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    .icon i {
      transition: all 4s;
      &:hover {
        transform: rotate(1440deg);
      }
    }
    > p {
      height: 100px;
      text-align: center;
      transition: all 0.4s;
      &.info {
        margin: 10px;
        font-size: 12px;
        height: 20px;
        color: $black3;
      }
      &.input {
        margin: 16px;
        height: 40px;
      }
      &.input:hover {
        color: $green2;
      }
      input {
        transition: all 0.4s;
        font-size: 16px;
        width: 360px;
        padding: 8px;
        border: 0px;
        outline: none;
        border-bottom: 1px solid $green1;
        background-color: #eeeeee;
        &:focus {
          width: 400px;
        }
      }
      button {
        transition: all 0.4s;
        color: $black3;
        border: 1px solid $green1;
        border-radius: 4px;
        width: 120px;
        height: 30px;
        &:hover {
          background-color: $green1;
          color: #FFF;
        }
      }
    }
  }
}
</style>
