<template>
<div class="profile">
  <div class="avatar">
    <img :src="profile.avatar">
  </div>
  <div class="personality">
    <h1 v-text="profile.name"></h1>
    <h2 v-text="profile.company"></h2>
    <p v-text="profile.introduce"></p>
    <div class="social-link">
      <span><i class="fa fa-github"></i></span>
      <span><i class="fa fa-qq"></i></span>
      <span><i class="fa fa-weixin"></i></span>
    </div>
    <div class="location" tooltip="Sydney, New South Wales, Australia">
      <i class="fa fa-map-marker"></i> <span v-text="profile.location"></span>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      profile: state => state.user.userInfo
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.profile {
  position: relative;
  width: 300px;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 45px;
  top: 0;
  height: 100%;
  header {
    height: 400px;
    // background: url('http://img.mp.itc.cn/upload/20161011/3a7476e8e1c443acb180513cc602b480_th.jpeg') no-repeat center center;
  }
  .avatar {
    background: #fff;
    border-radius: 50%;
    border: 4px solid #fff;
    -webkit-transition: margin 1s;
    transition: margin 1s;
    height: 120px;
    width: 120px;
    position: relative;
    z-index: 12;
    overflow: hidden;
    top: 100px;
    left: 90px;
    img {
      height: 120px;
      width: 120px;
    }
  }
  .personality {
      position: relative;
      top: 120px;
      padding: 0 30px;
      text-align: center;
      h1 {
        font-weight: 700;
        font-size: 20px;
        color: #27353f;
        line-height: 35px;
        margin: 0 0 5px;
        -webkit-transition: margin 1s;
        transition: margin 1s;
      }
      h2 {
        font-weight: 700;
        font-size: 12px;
        color: #63717b;
        line-height: 23px;
        margin: 0 0 5px;
      }
      p {
        margin: 30px auto;
        color: #9fadb7;
        font-size: 15px;
        line-height: 1.5em;
        font-weight: 400;
      }
      .location {
        border-radius: 3px;
        padding: 3px 8px;
        margin-left: 6px;
        line-height: 24px;
        display: block;
        font-weight: 700;
        cursor: pointer;
        background: 0 0;
        color: rgb(127, 141, 138)!important;
        // border: 2px solid #00bd9c;
      }
      .social-link {
        display: block;
        text-align: center;
        text-decoration: none;
        margin: 5px 3px;
        vertical-align: middle;
        i {
          background: #9fadb7;
          color: #fff;
          width: 24px;
          height: 24px;
          line-height: 26px;
          font-size: 13px;
          border-radius: 4px;
          background-color: #16a085!important;
        }
      }
  }
}
</style>
