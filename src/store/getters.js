const getters = {
  getPlayerList: state => state.playerlist, // 获取播放列表
  getRecommendList: state => state.recommendlist, // 获取推荐列表
  getSongURL: state => state.songURL, // 获取歌曲播放地址
  getSongInf: state => state.songInf, //获取歌曲信息
  getSongList: state => state.songList // 获取歌单列表
}
export default getters
