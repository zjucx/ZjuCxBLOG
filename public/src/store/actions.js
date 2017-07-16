import * as types from './mutation-types'
import axios from 'axios'

// export default {
//   saveArticle: ({state, commit}) => {
//     return Vue.http.post('/api/saveArticle', state.article)
//       .then(
//         ()=>doToast(state, commit, {info: '保存成功,是否返回?', btnNum: 2}),
//         ()=>doToast(state, commit, {info: '保存失败', btnNum: 1})
//       )
//       // .finally(()=>commit('TOASTING_TOGGLE', false))
//   }
// }
//
export const search = ({ commit }, searchstr) => {
  return axios.post('/search', {
    search: searchstr
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}
