import types from './mutations-types'

const mutations = {
  // 设置正在播放歌曲的url
  [types.SET_SONGURL](state, url) {
    state.songURL = url
  },
  // 获取歌曲的详细信息
  [types.SET_SONGINF](state, song) {
    state.songInf = song
  },
  // 设置播放列表
  [types.SET_PLAYERLIST](state, playerlist) {
    state.playerlist = playerlist
  },
  // 将歌曲添加至播放列表
  [types.ADD_SONG_TO_PLAYERLIST](state, song) {
    state.playerlist.push(song)
  },
  //设置推荐列表
  [types.SET_RECOMMENDLIST](state, recommendlist) {
    state.recommendlist = recommendlist
  },

  // 设置歌曲列表
  [types.SET_SONGLIST](state, songList) {
    state.songList = songList
  }
}

export default mutations
