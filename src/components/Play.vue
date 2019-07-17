<template>
  <section class="container">
    <span>音乐播放</span>
    /* eslint-disable */
    <Audio ref="audio" :src="url" controls autoplay="autoplay" />
    <li
      v-for="(item, index) in playList"
      :key="item.id"
      class="list"
      @click="selectListItem(item)"
    >
      <span>{{ index + 1 }}</span>
      <span>{{ item.name }}</span>
    </li>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    playList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },

  computed:
    // ...mapGetters(['getSongURL']),
    mapGetters({
      url: "getSongURL"
    }),
  methods: {
    ...mapActions(["setSongInf"]),
    playSong(item) {
      this.setSongInf(item.id);
    }
  }
};
</script>
<style lang="stylus">
.container {
  font-size: 6px;

  & li {
    list-style-type: none;
  }
}
</style>
