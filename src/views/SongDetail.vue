<template>
  <section>
    <ul>
      <li>歌曲名{{ name }}</li>
      <li>歌手名{{ singer }}</li>
    </ul>
    <img :src="picUrl" class="song-img" />
    <ul>
      <li>歌词</li>
      <li>{{ lyric }}</li>
    </ul>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: '',
      singer: '',
      picUrl: '',
      lyric: ''
    }
  },
  computed: {
    ...mapGetters(['getSongInf'])
  },
  created() {
    this.setSongInf(this.$route.params.id).then(() => {
      this.name = this.getSongInf.name
      this.singer = this.getSongInf.ar[0].name
      this.picUrl = this.getSongInf.al.picUrl
    })
  },
  methods: {
    ...mapActions(['setSongInf'])
  }
}
</script>
<style lang="stylus" scoped>
.song-img {
  width: 200px;
  height: 200px;
}
</style>
