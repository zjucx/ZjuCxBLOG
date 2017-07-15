<template>
<div>
    <article class='posts' v-for="article in articles">
      <div class="powerby">Trending on ZjuCx</div>
      <ol class="post">
          <li class="thumbnail">
            <img :src="article.thumbnail">
          </li>
          <li class="content">
            <div class="abstract">
              <p style="cursor:pointer;" v-on:click="loadArticle(article.Id)">
                  <a href="/#/article" v-text="article.title"></a>
              </p>

              <div class="summary" v-html="content(article.summary)">
              </div>

              <p>
                <i class="fa fa-share-alt" aria-hidden="true"></i>
                <span>JavaScript</span>

                <i class="fa fa-comments" aria-hidden="true"></i>
                <span>6.6k</span>

                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                <span>1.1k</span>
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

    li {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .thumbnail img{
      width:150px;
      height:150px;
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
        flex-flow:left;
        padding: 5px 20px;
        font-size: 12px;
        color: #999;
        .summary {
          height:70px;
        }
        span {
          color: #000;
          padding-right:20px;
          word-wrap:break-word
        }
        a {
          font-size: 18px;
          padding: 2px 4px;
          color: #42b983;
          font-weight: 600 !important;
          text-decoration: none;
        }
        p{
          width:350px;
          margin: 6px;
          word-wrap:break-word
        }
        i {
          font-size: 16px;
          padding: 2px 4px;
          background: #fff;
          height: 16px;
          width: 16px;
          color: #000;
          border-radius:50%;
        }
        i:hover {
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
        }
      }
    }
  }
}
</style>
