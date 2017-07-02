<template>
<div>
    <article class='posts' v-for="item in articles">
      <div class="powerby">Trending on ZjuCx</div>
      <ol class="post">
          <li class="avatar">
            <img src="https://avatars3.githubusercontent.com/u/7686174?v=3">
          </li>
          <li class="content">
            <div class="abstract">
            <span>
              <p style="cursor:pointer;" v-on:click="loadArticle(item.Id)">
                <a href="/#/article">{{item.title}}</a>
              </p>
            </span>

            <div v-html="content(item.summary)"></div>

            <p class="mb-0 f6 text-gray">
                <span><i class="fa fa-share-alt cx-fa" aria-hidden="true"></i></span>
                JavaScript
                <a href="/Mango/slideout/stargazers" class="pinned-repo-meta muted-link">
                  <i class="fa fa-comments cx-fa" aria-hidden="true"></i>
                  6.6k
                </a>
                <a href="/Mango/slideout/network" class="pinned-repo-meta muted-link">
                  <i class="fa fa-thumbs-up cx-fa" aria-hidden="true"></i>
                  1.1k
                </a>
            </p>
          </div>
          </li>
      </ol>
    </article>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import marked from 'marked'

export default {
  name: 'Articles',
  data () {
    return {
      isArticle: false
  //     currentDate: new Date(),
  //     msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles,
    }),
  },
  methods: {
    content: function (mdstr) {
      return marked(mdstr)
    },
    loadArticle: function (id) {
      console.log("loadArticle" + id)
      this.$store.dispatch('getArticle', id)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss">
.posts {
  /*margin: 0 auto;*/
  /*text-align: left;*/
  width: 90%;
  /*text-align: center;*/
  border-bottom: 2px solid #fff;
  .powerby {
      color: #616161;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      padding: 14px 16px 6px;
      text-align: left;
  }
  ol {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    list-style: none;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    li {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .avatar img{
      width:200px;
      height:200px;
    }
    .content {
      min-width:350px;
      width: 350px;
      .abstract {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
    }
  }
}
//
// .bottom {
//   margin-top: 13px;
//   line-height: 12px;
// }
//
// .button {
//   padding: 0;
//   float: right;
// }
//
// .image {
//   width: 200px;
//   display: block;
//   padding-left: 100px;
// }
//
// .clearfix:before,
// .clearfix:after {
//     display: table;
//     content: "";
// }
//
// .clearfix:after {
//     clear: both
// }
//
// .cx-header {
//   background: #fff;
//   display: block;
//   height: 36px;
//   width: 36px;
//   border-radius:50%;
//   position: absolute;;
// }
//
// .cx-circle {
//   background: #fff;
//   display: block;
//   height: 24px;
//   width: 24px;
//   border-radius:50%;
//   position: absolute;;
// }
//
// .cx-circle:hover {
//   box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
// }
//
// .cx-fa {
//   padding-top: 4px;
//   padding-left: 4px;
// }

</style>
