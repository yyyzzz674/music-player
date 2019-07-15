import Vue from 'vue'
import Vuex from 'vuex'

import { getNewSongList, getRecommendList, getSongURL } from './api/recommend'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songlist: {},
    song: {},
    recommendlist: {}
  },
  getters: {
    getSongList: state => {
      return state.songlist
    },
    getRecommendList: state => {
      return state.recommendlist
    },
    getSongURL: state => {
      return state.song.url
    }
  },
  mutations: {
    setSongList (state, songlist) {
      state.songlist = songlist
    },
    setRecommendList (state, recommendlist) {
      state.recommendlist = recommendlist
    },
    setSong (state, song) {
      state.song = song
    }
  },
  actions: {
    initSongList ({ commit }) {
      getNewSongList().then((res) => {
        commit('setSongList', res.data.result)
      })
    },
    setRecommendList ({ commit }) {
      getRecommendList().then((res) => {
        commit('setRecommendList', res.data.result)
      })
    },
    setSongInf ({ commit }, id) {
      getSongURL(id).then((res) => {
        commit('setSong', res.data.data[0])
      })
    }
  }
})
