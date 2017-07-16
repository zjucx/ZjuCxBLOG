import * as types from '../mutation-types'
import axios from 'axios'

// 该模块的初始状态
const state = {
  userInfo: {
    'name': 'ZjuCx',
    'company': 'HUAWEI Research Institute of Hangzhou',
    'introduce': 'A Product Designer/Full-Stack Engineer who builds things to make the world a better place. I grow products from idea to happy, sustainable teams.',
    'location': 'Hangzhou',
    'avatar': 'https://avatars3.githubusercontent.com/u/7686174?v=3'
  },
  isLogin: false,
  resume: {
    'events': [{
      'begintime': '',
      'endtime': '',
      'event': '',
      'keyword': '',
      'where': '',
      'type': ''
    },{
      'begintime': '',
      'endtime': '',
      'event': '',
      'keyword': '',
      'where': '',
      'type': ''
    },{
      'begintime': '',
      'endtime': '',
      'event': '',
      'keyword': '',
      'where': '',
      'type': ''
    },]
  },
}

// getters
const getters = {
  checkoutLogin: state => state.isLogin
}

// actions
const actions = {
  login ({ commit, state }, userinfo) {
    return axios.post('/login', userinfo)
      .then(response => {
        commit('SET_USER', userinfo)
        console.log()
      })
  },
}

// 相关的 mutations
const mutations = {
  [types.SET_USER] (state, userinfo) {
    state.userinfo = userinfo
    state.isLogin = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
