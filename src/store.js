import Vue from "vue";
import Vuex from "vuex";

import {
  getNewPlayerList, // 获取新的播放列表
  getRecommendList, // 获取推荐歌单列表
  getSongURL, // 获取歌曲播放地址
  getSongListDetail // 获取歌单列表详情
} from "./api/recommend";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    song: {}, // 歌曲信息
    playerlist: [], // 播放列表
    recommendlist: [], // 推荐列表
    songList: [] // 歌单列表
  },
  getters: {
    getPlayerList: state => state.playerlist, // 获取播放列表
    getRecommendList: state => state.recommendlist, // 获取推荐列表
    getSongURL: state => state.song.url, // 获取歌曲播放地址
    getSongList: state => state.songList // 获取歌单列表
  },
  mutations: {
    setPlayerList(state, playerlist) {
      // 设置播放列表
      state.playerlist = playerlist;
    },
    addSongToPlayerList(state, song) {
      // 将歌曲添加至播放列表
      state.playerlist.push(song);
    },
    setRecommendList(state, recommendlist) {
      state.recommendlist = recommendlist;
    },
    setSong(state, song) {
      state.song = song;
    },
    setSongList(state, songList) {
      state.songList = songList;
    }
  },
  actions: {
    initPlayerList({ commit }) {
      // 初始化播放列表
      getNewPlayerList().then(res => {
        commit("setPlayerList", res.data.result);
      });
    },
    addSongToPlayerList({ state, commit }, song) {
      //将歌曲添加至播放列表
      const isExist = state.playerlist.some(item => item.id === song.id);
      if (!isExist) {
        commit("addSongToPlayerList", song);
        console.log("添加歌曲至播放列表");
      } else {
        console.log("歌曲已存在");
      }
    },
    setRecommendList({ commit }) {
      //设置推荐列表
      getRecommendList().then(res => {
        commit("setRecommendList", res.data.result);
      });
    },
    setSongInf({ commit }, id) {
      //获取歌曲信息
      getSongURL(id).then(res => {
        commit("setSong", res.data.data[0]);
      });
    },

    setSongListDetail({ commit }, id) {
      //获取歌单列表中的详细信息
      getSongListDetail(id).then(res => {
        commit("setSongList", res.data.playlist.tracks);
      });
    }
  }
});
