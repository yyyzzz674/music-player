<template>
  <section class="container">
    <section v-show="isShownRecommendList" class="recommend-list">
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
    <router-view></router-view>
  </section>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isShownRecommendList: true
    };
  },
  computed: {
    ...mapGetters(["getRecommendList"])
  },
  // beforeCreate() {
  //   console.log("beforecreated");
  // },
  created() {
    this.setRecommendList();
  },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  beforeUpdate() {
    // console.log(this.$route.path);
    var re = /recommend$/i;
    if (this.$route.path.match(re)) {
      // 判断当前路径,若recommend结尾则加载推荐列表,若不以recommend结尾则不加载推荐列表
      // console.log(true);
      this.isShownRecommendList = true;
    } else {
      this.isShownRecommendList = false;
    }
    //   console.log("beforeupdate");
  },
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
    ...mapActions(["setRecommendList", "setSongListDetail"]),
    showRecommendListItem(item) {
      this.isShownRecommendList = false;
      this.setSongListDetail(item.id);
      this.$router.push(`recommend/list/${item.id}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  font-size: 16px;

  ul {
    padding: 0;
  }

  .recommend-list li {
    color: #ff0000;
    list-style-type: none;
  }
}
</style>
