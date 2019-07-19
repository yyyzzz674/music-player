<template>
  <div class="item">
    <img :src="item.picUrl" class="item-img" />
    <span>{{ item.name }}</span>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
<style lang="stylus" scoped>
.item {
  width: 130px;
  height: 170px;

  &-img {
    width: 130px;
    height: 130px;
  }
}
</style>
