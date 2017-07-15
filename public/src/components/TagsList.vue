<template>
<div class="tagslist">
  <div class="powerby" >Github Info :</div>
  <!-- <div id="githubinfo"> -->
    <article id="githubinfo">
      <dl class="user-data">
        <dt>Avatar:</dt>
        <dd class="user-avatar">
          <img src="https://avatars3.githubusercontent.com/u/7686174?v=3">
        </dd>
        <!--dt>Fullname:</dt>
        <dd class="user-name">chengxiang</dd> -->
        <dt>Account:</dt>
        <a class="user-github-url"><dd class="user-account">ZjuCx</dd></a>
      </dl>
      <dl class="user-stats">
        <dt>Repos</dt>
        <a class="user-repos-url"><dd class="user-repos" data-stats="repos">40</dd></a>

        <dt>Followers</dt>
        <a class="user-followers-url"><dd class="user-followers" data-stats="followers">20</dd></a>
      </dl>
    </article>
  <!-- </div> -->
  <div class="powerby" >Tags Cloud :</div>
  <div id="tagsclound">
    <a v-for="item of items" :href="item.href" target="_blank">{{ item.tag }}</a>
  </div>
</div>
</template>

<script>
import {tagscloud} from '../assets/js/tagscloud'

export default {
  name: 'tagsList',
  data () {
    return {
      items: [
        {"href": "http://www.lanrentuku.com", "tag": "node"},
        {"href": "http://www.lanrentuku.com", "tag": "golang"},
        {"href": "http://www.lanrentuku.com", "tag": "c"},
        {"href": "http://www.lanrentuku.com", "tag": "c++"},
        {"href": "http://www.lanrentuku.com", "tag": "python"},
        {"href": "http://www.lanrentuku.com", "tag": "github"},
        {"href": "http://www.lanrentuku.com", "tag": "docker"},
        {"href": "http://www.lanrentuku.com", "tag": "cf"},
        {"href": "http://www.lanrentuku.com", "tag": "dota"},
        {"href": "http://www.lanrentuku.com", "tag": "php"},
        {"href": "http://www.lanrentuku.com", "tag": "althorigm"},
        {"href": "http://www.lanrentuku.com", "tag": "js"},
        {"href": "http://www.lanrentuku.com", "tag": "vuejs"},
        {"href": "http://www.lanrentuku.com", "tag": "memory"},
        {"href": "http://www.lanrentuku.com", "tag": "dockerfile"},
        {"href": "http://www.lanrentuku.com", "tag": "design"},
        {"href": "http://www.lanrentuku.com", "tag": "android"},
        {"href": "http://www.lanrentuku.com", "tag": "ios"},
        {"href": "http://www.lanrentuku.com", "tag": "sass"},
        {"href": "http://www.lanrentuku.com", "tag": "jquery"},
        {"href": "http://www.lanrentuku.com", "tag": "react"},
        {"href": "http://www.lanrentuku.com", "tag": "bootstamp"},
        {"href": "http://www.lanrentuku.com", "tag": "vuejs"},
        {"href": "http://www.lanrentuku.com", "tag": "java"},
        {"href": "http://www.lanrentuku.com", "tag": "btree"},
        {"href": "http://www.lanrentuku.com", "tag": "mysql"},
        {"href": "http://www.lanrentuku.com", "tag": "mongodb"},
      ],
    }
  },
  mounted() {
		tagscloud()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.tagslist {
  position: fixed;
  width: 300px;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 45px;
  top: 0;
  height: 100%;
  // border-right: 2px solid #fff;
  // text-align: center;
  #tagsclound {
    height:250px;
    width:250px;
    position:relative;
    margin-left:20px;
    a {
      position:absolute;
      top:0px;
      left:0px;
      // color:#fff;
      background:#eee;
      border-radius:5px;
      font-size: 12px;
      // font-weight:bold;
      padding:2px 4px;
      color: #42b983;
      &:hover {
        border:1px solid #fff;
        background:#fff;
        border-radius:5px;
      }
    }
  }

  #githubinfo {
    font-family: "Helvetica", Arial, sans-serif;
    display: inline-block;
    width: 250px;
    height: 280px;
    overflow: hidden;
    // border: 1px solid #D5D5D5;
    border-radius: 6px;
    position: relative;
    // background-color: #2E353C;
    text-align: center;
    // color: #fff;
    font-weight: 100;
    transition: background 1000ms ease-out;
    margin-left:25px;
    dl,
    dd {
      margin: 0;
      .user-avatar {
        display: inline-block;
        margin: 20px 0 10px;
      }
      .user-name,
      .user-account {
        margin: 5px 0;
      }
    }
    dt {
      display: none;
    }
    .user-data {
      // background: #fff url('webcomponent/github.png') no-repeat 5px 5px;
      background-size: 25px;
      height: 85px;
    }
    .user-avatar img {
      border-radius: 100%;
      height: 120px;
      width: 120px;
      border: 3px solid #fff;
      vertical-align: middle;
      background-color: #fff;
    }

    .user-name {
      font-size: 24px;
    }
    .user-account {
      font-size: 16px;
      color: #999;
      margin: 5px 0;
    }
    .user-stats {
      border-top: 1px groove #999;
      position: relative;
      top: 125px;
    }
    .user-stats {
      dd {
        padding: 10px 20px;
      }
    }
    .user-repos,
    .user-following,
    .user-followers {
      display: inline-block;
      font-size: 22px;
      color: #999;
    }
    .user-repos:after,
    .user-following:after,
    .user-followers:after {
      content: attr(data-stats);
      text-transform: uppercase;
      display: block;
      font-size: 11px;
      color: #666;
      font-weight: normal;
      line-height: 1.7em;
    }
    // .spinner {
    //   background: url('webcomponent/spinner.gif') no-repeat center center;
    // }
  }
  .powerby {
      color: #616161;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      padding: 14px 16px 6px;
      text-align: left;
  }
}
</style>
