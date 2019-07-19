<template>
  <section class="recommend">
    <div
      v-for="item in getRecommendList"
      :key="item.id"
      class="list"
      @click="showRecommendListItem(item)"
    >
      <list-item :item="item" class="recommend-item"></list-item>
    </div>
  </section>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
import ListItem from '../components/ListItem'
export default {
  name: 'Recommmend',
  components: {
    ListItem
  },
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
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 0.75em;

  &-item {
    padding: 10px;
  }
}
</style>
