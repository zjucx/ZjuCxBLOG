import * as type from '../mutation-types'
import Vue from 'vue'

const state = {
  articles: [{
    'title':'ZjuCx博客',
    'tags':[{'name' : 'vuejs'},{'name' : 'beego'},{'name' : 'blog'}],
    'summary':'ZjuCx博客系统',
    'thumbnail': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
    'author': 'zjucx',
    'time': 1990-12-12,
    'language': 'javascript',
    'like': 20,
    'remark': 40,
  },{
    'title':'ZjuCx博客',
    'tags':[{'name' : 'vuejs'},{'name' : 'beego'},{'name' : 'blog'}],
    'summary':'ZjuCx博客系统',
    'thumbnail': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
    'author': 'zjucx',
    'time': 1990-12-12,
    'language': 'javascript',
    'like': 20,
    'remark': 40,
  }],
  article: {
    'title':'aa',
    'tags':[],
    'content':'aaaaaa',
    'comments':[{
        'type': 'normal',
        'content': 'aaaa',
        'auther': 'zjucx',
        'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
        'time': '1990-12-12'
      },{
        'type': 'normal',
        'content': 'aaaa',
        'auther': 'zjucx',
        'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
        'time': '1990-12-12'
      },{
        'type': 'normal',
        'content': 'aaaa',
        'auther': 'zjucx',
        'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
        'time': '1990-12-12'
      },{
        'type': 'normal',
        'content': 'aaaa',
        'auther': 'zjucx',
        'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
        'time': '1990-12-12'
      },{
        'type': 'normal',
        'content': 'aaaa',
        'auther': 'zjucx',
        'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
        'time': '1990-12-12'
      },{
        'type': 'normal',
        'content': 'aaaa',
        'auther': 'zjucx',
        'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3',
        'time': '1990-12-12'
      }
    ]},
}

// getters
const getters = {
  article: state => state.article,
  articles: state => state.articles
}

const actions =  {
  getArticles: ({commit}) => {
    return axios.get('/articles').then(
      function (response) {
        commit('SET_ARTICLES', response.data)
        console.log(response);
      }).catch(
        function (error) {
          console.log(error);
      })
  },
  getArticle: ({commit}, id) => {
    return axios.get('/article', {
      params: {
        ID: id
      }
    }).then(function (response) {
      commit('SET_ARTICLE', response.data)
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
  },
  publish: ({commit}, article) => {
    return axios.get('/publish', {
      params: {
        article: article
      }
    }).then(function (response) {
      commit('SET_ARTICLE', response.data)
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
    // commit('SET_ARTICLE', article.article)
    // commit('SET_TITLE', article.title)
    // commit('SET_TAGS', article.tags)
    // return Vue.http.post('/article/saveArticle', state)
    //   .then(
    //     ()=>doToast(state, commit, {info: '保存成功,是否返回?', btnNum: 2}),
    //     ()=>doToast(state, commit, {info: '保存失败', btnNum: 1})
    //   )
    //   // .finally(()=>commit('TOASTING_TOGGLE', false))
  },
}

// 相关的 mutations
const mutations = {
  [type.SET_ARTICLE] (state, article) {
    state.article = article
  },
  [type.SET_TITLE] (state, title) {
    state.title = title
  },
  [type.SET_TAGS] (state, tags) {
    state.tags = tags
  },
  [type.SET_ARTICLES] (state, articles) {
    state.articles = articles
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
