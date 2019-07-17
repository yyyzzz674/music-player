import axios from "axios";
import { HOST } from "./config";

export function getRecommendList() {
  return axios.get(HOST + "/personalized");
}

export function getRecommendListMusic(id) {
  return axios.get(HOST + `/song/url?id=${id}`);
}

export function getRecommendListDetail(id) {
  return axios.get(HOST + `/playlist/detail?id=${id}`);
}

export function getNewSongList() {
  return axios.get(HOST + "/personalized/newsong");
}

export function getSongURL(id) {
  return axios.get(HOST + `/song/url?id=${id}`);
}
