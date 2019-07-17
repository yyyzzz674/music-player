<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        推荐
      </router-link>
      |
      <router-link to="/person">
        我的
      </router-link>
      |
      <router-link to="/link">
        搜索
      </router-link>
    </div>
    <router-view />
    <play :play-list="getSongList" />
  </div>
</template>
<script>
import Play from "./components/Play";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Play
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSongList"])
  },
  created() {
    this.initSongList();
  },
  methods: {
    ...mapActions(["initSongList"])
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
