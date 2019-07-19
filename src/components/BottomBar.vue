<template>
  <section class="container">
    <Audio ref="audio" :src="url" controls autoplay="autoplay" />
    <button @click="showPlayList">播放列表</button>
    <div v-show="isShowPlayList" class="container-playerlist">
      <li v-for="(item, index) in playerList" :key="item.id" class="list" @click="playSong(item)">
        <span>{{ index + 1 }}</span>
        <span>{{ item.name }}</span>
      </li>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BottomBar',
  props: {
    playerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShowPlayList: false
    }
  },

  computed:
    // ...mapGetters(['getSongURL']),
    mapGetters({
      url: 'getSongURL'
    }),
  methods: {
    ...mapActions(['setSongURL']),
    playSong(item) {
      this.setSongURL(item.id)
    },
    showPlayList() {
      this.isShowPlayList = !this.isShowPlayList
    }
  }
}
</script>
<style lang="stylus" scoped>
.container {
  font-size: 6px;

  &-playerlist {
    position: fixed;
    bottom: 60px;
    width: 100%;
    heigth: 160px;
    background: #ffffff;
    min-height: 150px;
  }
}
</style>
