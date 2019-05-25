import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `${
        userData.access_token
      }`
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('http://localhost:3000/api/v1/users.json',
        { user: credentials})
        .then(({ data }) => {
          debugger
          console.log(data);
          commit('SET_USER_DATA', data)
        })
    },
  },
  getters: {
    loggedIn (state) {
      if (!!state.user == false){
        if (!!localStorage['user'] == true){
          state.user = JSON.parse(localStorage['user'])
          return !!state.user
        }
        else{
          return !!state.user
        }
      }
      else{
        return !!state.user
      }
    }
  }
})
