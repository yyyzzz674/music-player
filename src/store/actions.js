import {
  getNewPlayerList, // 获取新的播放列表
  getRecommendList, // 获取推荐歌单列表
  getSongURL, // 获取歌曲播放地址
  getSongInf, // 获取歌曲信息
  getSongListDetail // 获取歌单列表详情
} from '../api/recommend'

import types from './mutations-types'
const actions = {
  initPlayerList({ commit }) {
    // 初始化播放列表
    getNewPlayerList().then(res => {
      commit(types.SET_PLAYERLIST, res.data.result)
    })
  },
  addSongToPlayerList({ state, commit }, song) {
    //将歌曲添加至播放列表
    const isExist = state.playerlist.some(item => item.id === song.id)
    if (!isExist) {
      commit(types.ADD_SONG_TO_PLAYERLIST, song)
      console.log('添加歌曲至播放列表')
    } else {
      console.log('歌曲已存在')
    }
  },
  setRecommendList({ commit }) {
    //设置推荐列表
    getRecommendList().then(res => {
      commit(types.SET_RECOMMENDLIST, res.data.result)
    })
  },
  async setSongInf({ commit }, id) {
    //获取歌曲信息
    await getSongInf(id).then(res => {
      commit(types.SET_SONGINF, res.data.songs[0])
    })
  },
  setSongURL({ commit }, id) {
    getSongURL(id).then(res => {
      commit(types.SET_SONGURL, res.data.data[0].url)
    })
  },
  setSongListDetail({ commit }, id) {
    //获取歌单列表中的详细信息
    getSongListDetail(id).then(res => {
      commit(types.SET_SONGLIST, res.data.playlist.tracks)
    })
  }
}

export default actions
