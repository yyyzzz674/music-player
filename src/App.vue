<template>
  <div id="app">
    <div id="nav" class="navbar">
      <!-- disable-eslint -->
      <router-link to="/">推荐</router-link>
      <span>|</span>
      <router-link to="/person">我的</router-link>
      <span>|</span>
      <router-link to="/link">搜索</router-link>
    </div>
    <router-view class="container" />
    <bottom-bar :player-list="getPlayerList" class="bottombar" />
  </div>
</template>
<script>
import BottomBar from './components/BottomBar'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    BottomBar
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getPlayerList'])
  },
  created() {
    this.initPlayerList()
  },
  methods: {
    ...mapActions(['initPlayerList'])
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 30px;
  height: 80px;
  box-sizing: border-box;
}

.container {
  padding: 30px;
}

.bottombar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
