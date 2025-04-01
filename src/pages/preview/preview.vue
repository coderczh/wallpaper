<template>
  <view class="global preview">
    <view class="swiper">
      <wd-swiper
        :list="swiperList"
        autoplay
        :indicator="{ type: 'dots-bar' }"
        :height="pageHeight"
        @click="maskChange"
      />
    </view>
    <view class="mask" v-if="maskStatus">
      <view class="go-back"></view>
      <view class="count">
        <wd-text text="3 / 9" color="#fff" size="28rpx" />
      </view>
      <view class="date"
        ><wd-text :text="currentDate" color="#fff" size="34rpx"
      /></view>
      <view class="time"
        ><wd-text
          :text="currentTime"
          color="#fff"
          size="140rpx"
          lineHeight="1em"
      /></view>
      <view class="footer">
        <view class="box" @click="showPopup">
          <view class="inco">
            <wd-icon name="info-circle" size="33rpx" />
          </view>
          <view class="text"
            ><wd-text text="信息" color="#676767" size="26rpx"
          /></view>
        </view>
        <view class="box">
          <view class="inco">
            <wd-icon name="star" size="33rpx" />
          </view>
          <view class="text"
            ><wd-text text="5分" color="#676767" size="26rpx"
          /></view>
        </view>
        <view class="box">
          <view class="inco">
            <wd-icon name="download1" size="33rpx" />
          </view>
          <view class="text"
            ><wd-text text="下载" color="#676767" size="26rpx"
          /></view>
        </view>
      </view>
    </view>
    <view class="popup">
      <wd-popup
        v-model="popupStatus"
        position="bottom"
        custom-style="height: 200px;"
      >
        <view class="info-popup">
          <view class="header">
            <view></view>
            <view class="title"
              ><wd-text color="#676767" text="壁纸信息" size="26rpx"
            /></view>
            <view class="close"
              ><wd-icon name="close" size="30rpx" color="#999"
            /></view>
          </view>
          <view class="content">
            <scroll-view scroll-y>
              <view class="info">
                <view class="row" v-for="item in 10">
                  {{ item }}
                </view>
              </view>
            </scroll-view>
          </view>
        </view>
      </wd-popup>
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

const maskStatus = ref<boolean>(true);
const maskChange = () => {
  maskStatus.value = !maskStatus.value;
};

const date = ref<Date>(new Date());
const currentDate = ref<string>(
  `${date.value.getFullYear()}-${(date.value.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.value.getDate().toString().padStart(2, "0")}`
);

const currentTime = ref<string>(
  `${date.value.getHours().toString().padStart(2, "0")}:${date.value
    .getMinutes()
    .toString()
    .padStart(2, "0")}`
);

const popupStatus = ref<boolean>(false);
const showPopup = () => {
  popupStatus.value = !popupStatus.value;
};
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
        padding: 2rpx 12rpx;
      }
    }
  }
  .info-popup {
    .header {
      padding-top: 10rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .close {
        padding: 6rpx;
      }
    }
  }
}
</style>
