<template>
  <view class="global">
    <common-nav-bar title="分类" />
    <view class="classify">
      <common-item v-for="item in 15" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import commonNavBar from "@/component/common-nav-bar.vue";
import commonItem from "@/component/common-item.vue";
</script>

<style lang="scss" scoped>
.classify {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}
</style>
