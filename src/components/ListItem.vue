<template>
  <ul>
    <li v-for="(item, index) in getSongList" :key="item.id" class="list">
      <span>{{ index + 1 }}</span>
      <span>{{ item.name }}</span>
      <button @click="addSongToPlayerList_(item)">添加至播放列表</button>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSongList"])
  },
  // beforeCreate() {
  //   console.log(" ListItem beforecreted");
  // }
  created() {
    if (this.getSongList.length === 0) {
      this.setSongListDetail(this.$route.params.id);
    }
  },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeupdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforedestory");
  // },
  // destroyed() {
  //   console.log("destroyeds");
  // },
  methods: {
    ...mapActions(["addSongToPlayerList", "setSongListDetail"]),
    addSongToPlayerList_(item) {
      this.addSongToPlayerList(item);
    }
  }
};
</script>
<style lang="stylus" scoped>
ul {
  padding: 0;
  margin: 0;
}

.list {
  list-style-type: none;
}
</style>
