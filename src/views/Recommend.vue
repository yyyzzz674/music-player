<template>
  <section class="container">
    <section class="recommend-list">
      <ul>
        <li
          v-for="(item, index) in getRecommendList"
          :key="item.id"
          class="list"
          @click="showRecommendListItem(item)"
        >
          <span>{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getRecommendList'])
  },
  created() {
    this.setRecommendList()
  },
  methods: {
    ...mapActions(['setRecommendList']),
    showRecommendListItem(item) {
      this.$router.push(`recommend/songlist/${item.id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  font-size: 16px;

  .recommend-list {
    color: #ff0000;
  }
}
</style>
