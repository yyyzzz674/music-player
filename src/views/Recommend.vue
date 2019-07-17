<template>
  <section class="container">
    <section class="container-list">
      <ul>
        <li
          v-for="(item, index) in getRecommendList"
          :key="item.id"
          class="list"
          @click="selectListItem(item)"
        >
          <span>{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      str: "abcd"
    };
  },
  computed: {
    ...mapGetters(["getRecommendList"])
  },
  created() {
    this.setRecommendList();
  },
  methods: {
    ...mapActions(["setRecommendList"])
  }
};
</script>

<style lang="stylus" scoped>
.container {
  font-size: 16px;

  &-list li {
    color: #ff0000;
    list-style-type: none;
  }
}
</style>
