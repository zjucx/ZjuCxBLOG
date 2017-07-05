<template>
<div class='article'>
  <!-- Page Layout here -->
  <div style="padding:0 14px 14px 14px;">
    <article style="padding: 0 0 10px 30px;">
      <div v-html="content(article.content)"></div>
    </article>
  </div>
  <div class="comments">
  <div class="comment" v-for="item in items">
    <div class="avatar">
      <img height="44" src="https://avatars2.githubusercontent.com/u/4371429?v=3&amp;s=88" width="44">
    </div>
    <div class="editor">
      <div class="comment-header">
        <h3 class="comment-header-text">
          <strong>
              <a href="/ktsn" class="author">ktsn</a>
          </strong>
          commented
          <a href="" class="timestamp">on May 24</a>
        </h3>

      </div>
      <div class="comment-content">
        <div v-html="content(article.content)"></div>
      </div>

    </div>
  </div>
  </div>
  <div class="comment-editor">
    <div class="avatar">
      <img height="44" src="https://avatars2.githubusercontent.com/u/4371429?v=3&amp;s=88" width="44">
    </div>
    <div class="editor">
      <mavon-editor :toolbars="toolbars" :default_open="default_open"></mavon-editor>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import marked from 'marked'
var mavonEditor = require('mavon-editor')

export default {
  name: 'Article',
  data() {
    return {
      default_open:"edit",
      toolbars: {
        sbold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        strikethrough: true, // 中划线
        mark: true, // 标记
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        table: true, // 表格
        subfield: true, // 是否需要分栏
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
      },
      items: [{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"}],
    }
  },
  components: {
      'mavon-editor': mavonEditor.mavonEditor
  },
  computed: {
    ...mapState({
      article: state => state.article.article,
    }),
  },
  methods: {
    content: function (mdstr) {
      return marked(mdstr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.article {
  //
  .comments{
    position: relative;
    width: 90%;
    padding-bottom: 8px;
    border-bottom: 2px solid #ffffff;
    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 79px;
      z-index: -1;
      display: block;
      width: 2px;
      content: "";
      background-color: #ffffff;
    }
    .comment {
      position: relative;
      padding-left: 60px;
      margin-top: 15px;
      margin-bottom: 15px;
      .avatar {
        float:left;
        margin-left: -60px;
        border-radius: 3px;
        img {
          border-radius: 3px;
        }
      }
      .editor {
        width: 100%;
        border-radius: 3px;
        box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);
        &:before,
        &:after {
          position: absolute;
          top: 11px;
          right: 100%;
          left: 44px;
          display: block;
          width: 0;
          height: 0;
          pointer-events: none;
          content: " ";
          border-color: transparent;
          border-style: solid solid outset;

        }
        &:before {
          border-width: 8px;
          border-right-color: #d1d5da;
          // box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);
        }
        &:after {
          margin-top: 1px;
          margin-left: 2px;
          border-width: 7px;
          z-index: 1501;
          border-right-color: #ffffff;
        }
        .comment-header {
          padding-right: 15px;
          padding-left: 15px;
          color: #586069;
          background-color: #ffffff;
          border-bottom: 1px solid #d1d5da;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          .comment-header-text {
            font-weight: normal !important;
            font-size: 14px !important;
            max-width: 78%;
            margin-top: 0px;
            padding-top: 10px;
          }
        }
        .comment-content {
          font-weight: normal !important;
          font-size: 14px !important;
          max-width: 78%;
          padding: 1px 1px 5px 15px;
          // box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);
          &:before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 79px;
            z-index: -1;
            display: block;
            width: 2px;
            content: "";
            background-color: #eeeeee;
          }
        }
      }
    }
  }

  .comment-editor {
    position: relative;
    padding-left: 60px;
    margin-top: 25px;
    margin-bottom: 15px;
    .avatar {
      float:left;
      margin-left: -60px;
      border-radius: 3px;
      img {
        border-radius: 3px;
      }
    }
    .editor {
      width: 90%;
      border-radius: 3px;
      &:before,
      &:after {
        position: absolute;
        top: 11px;
        right: 100%;
        left: 44px;
        display: block;
        width: 0;
        height: 0;
        pointer-events: none;
        content: " ";
        border-color: transparent;
        border-style: solid solid outset;

      }
      &:before {
        border-width: 8px;
        border-right-color: #d1d5da;
        // box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);
      }
      &:after {
        margin-top: 1px;
        margin-left: 2px;
        border-width: 7px;
        z-index: 1501;
        border-right-color: #ffffff;
      }

    }
  }
}
</style>
