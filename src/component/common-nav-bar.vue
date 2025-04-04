<template>
  <view class="layout">
    <view class="navbar">
      <view
        class="status-bar"
        :style="{ height: `${statusBarHeight}px` }"
      ></view>
      <view class="title-bar" :style="{ height: `${titleBarHeight}px` }">
        <view class="title"
          ><wd-text :text="title" size="35rpx" color="#000" bold
        /></view>
        <view class="search">
          <view class="icon">
            <wd-icon name="search1" size="22px" color="#999" />
          </view>
          <view class="text">
            <wd-text text="搜索" color="#999" size="28rpx" />
          </view>
        </view>
      </view>
    </view>
    <view class="fill" :style="{ height: `${fillHeight}px` }"></view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const statusBarHeight = computed(
  () => uni.getSystemInfoSync().statusBarHeight || 0
);

const titleBarHeight = computed(() => {
  const { top, height } = uni.getMenuButtonBoundingClientRect();
  return height + (top - statusBarHeight.value) * 2;
});

const fillHeight = computed(() => titleBarHeight.value + statusBarHeight.value);

withDefaults(
  defineProps<{
    title: string;
  }>(),
  { title: "壁纸" }
);
</script>

<style lang="scss" scoped>
.layout {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #fff 400rpx),
      linear-gradient(to right, #beecd8 20%, #f4e2d8);
    .status-bar {
    }
    .title-bar {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0 30rpx;
      .search {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 220rpx;
        height: 50rpx;
        border-radius: 60rpx;
        background-color: rgba(255, 255, 255, 0.4);
        border: 2rpx solid #fff;
        margin-left: 30rpx;
        .icon {
          margin-left: 5rpx;
        }
        .text {
          margin-left: 10rpx;
        }
      }
    }
  }
  .fill {
  }
}
</style>
