<template>
  <ul>
    <li v-for="(item, index) in getSongList" :key="item.id" class="list">
      <span>{{ index + 1 }}</span>
      <span @click="showSongDetail(item)">{{ item.name }}</span>
      <button @click="addSongToPlayerList_(item)">添加至播放列表</button>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SongList',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getSongList'])
  },
  created() {
    if (this.getSongList.length === 0) {
      this.setSongListDetail(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['addSongToPlayerList', 'setSongListDetail']),
    addSongToPlayerList_(item) {
      this.addSongToPlayerList(item)
    },
    showSongDetail(item) {
      this.$router.push(`song/${item.id}`)
    }
  }
}
</script>
