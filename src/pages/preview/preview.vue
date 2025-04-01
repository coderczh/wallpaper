<template>
  <view class="global preview">
    <view class="swiper">
      <wd-swiper
        :list="swiperList"
        autoplay
        :indicator="{ type: 'dots-bar' }"
        :height="pageHeight"
      />
    </view>
    <view class="mask">
      <view class="go-back"></view>
      <view class="count">
        <wd-text text="3 / 9" color="#fff" size="28rpx" />
      </view>
      <view class="date"
        ><wd-text text="2025-04-01" color="#fff" size="34rpx"
      /></view>
      <view class="time"
        ><wd-text text="10:10" color="#fff" size="140rpx" lineHeight="1em"
      /></view>
      <view class="footer">
        <view class="box">
          <view class="inco">
            <wd-icon name="info-circle" size="22px" />
          </view>
          <view class="text"
            ><wd-text text="信息" color="#676767" size="26rpx"
          /></view>
        </view>
        <view class="box">
          <view class="inco">
            <wd-icon name="star" size="22px" />
          </view>
          <view class="text"
            ><wd-text text="5分" color="#676767" size="26rpx"
          /></view>
        </view>
        <view class="box">
          <view class="inco">
            <wd-icon name="download1" size="22px" />
          </view>
          <view class="text"
            ><wd-text text="下载" color="#676767" size="26rpx"
          /></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const swiperList = ref<string[]>([
  "https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/wallpaper/preview1.jpg",
  "https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/wallpaper/preview1.jpg",
  "https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/wallpaper/preview1.jpg",
]);

// 获取系统信息中的窗口高度
const pageHeight = ref<number>(0);
onMounted(() => {
  const systemInfo = uni.getSystemInfoSync();
  pageHeight.value = systemInfo.windowHeight;
});
</script>

<style lang="scss" scoped>
.global.preview {
  position: relative;
  .swiper {
    height: 100vh;
    width: 100%;
  }
  .mask {
    & > view {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: fit-content;
    }
    .go-back {
    }
    .count {
      top: 10vh;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 40rpx;
      padding: 8rpx 28rpx;
      backdrop-filter: blur(10rpx);
    }
    .date {
      top: calc(10vh + 230rpx);
      text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
    }
    .time {
      top: calc(10vh + 80rpx);
      text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
    }
    .footer {
      background-color: rgba(255, 255, 255, 0.8);
      bottom: 10vh;
      width: 65vw;
      height: 120rpx;
      border-radius: 120rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20rpx);
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
