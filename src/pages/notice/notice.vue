<template>
  <view class="layout">
    <view class="title">
      <view class="tag"><wd-tag type="danger" mark plain>置顶</wd-tag></view>
      <view class="font">这个区域写标题</view>
    </view>
    <view class="info">
      <view class="item">天天向上</view>
      <view class="item">{{ dateTime }}</view>
    </view>
    <view class="content">内容区域</view>
    <view class="count">阅读 8878</view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const now = new Date();
const dateTime = ref<string>(
  `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ` +
    `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
);
</script>

<style lang="scss" scoped>
.layout {
  padding: 30rpx;
  .title {
    font-size: 40rpx;
    color: #111;
    line-height: 1.6em;
    padding-bottom: 30rpx;
    display: flex;
    .font {
      padding-left: 6rpx;
    }
  }
  .info {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 28rpx;
    .item {
      padding-right: 20rpx;
    }
  }
  .content {
    padding: 50rpx 0;
  }
  .count {
    color: #999;
    font-size: 28rpx;
  }
}
</style>
