import axios from 'axios'
import { HOST } from './config'

export function getRecommendList() {
  // 获取推荐歌单列表
  return axios.get(HOST + '/personalized')
}

export function getSongListDetail(id) {
  // 获取歌单列表详情
  return axios.get(HOST + `/playlist/detail?id=${id}`)
}

export function getNewPlayerList() {
  // 获取新的播放列表
  return axios.get(HOST + '/personalized/newsong')
}

export function getSongURL(id) {
  // 获取歌曲播放地址
  return axios.get(HOST + `/song/url?id=${id}`)
}
