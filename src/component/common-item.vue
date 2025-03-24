<template>
  <view class="box" v-if="!more">
    <navigator url="">
      <wd-img
        width="220rpx"
        height="340rpx"
        src="https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper%2Fwallpaper%2Fclassify1.jpg"
        mode="aspectFill"
        radius="10rpx"
      />
      <view class="mask">明星美女</view>
      <view class="tab">3先前更新</view>
    </navigator>
  </view>

  <view class="box more" v-else>
    <navigator url="">
      <wd-img
        width="220rpx"
        height="340rpx"
        src="https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper%2Fwallpaper%2Fmore.jpg"
        mode="aspectFill"
        radius="10rpx"
      />
      <view class="mask">
        <wd-icon name="ellipsis" size="22px" color="#fff" />
        <view class="text">更多</view>
      </view>
    </navigator>
  </view>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    more: boolean;
  }>(),
  { more: false }
);
</script>

<style lang="scss" scoped>
.box {
  height: 340rpx;
  position: relative;
  .mask {
    width: 100%;
    height: 70rpx;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(20px);
    font-weight: 600;
    font-size: 30rpx;
    border-radius: 0 0 10rpx 10rpx;
  }
  .tab {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(250, 129, 90, 0.7);
    backdrop-filter: blur(20px);
    color: #fff;
    font-size: 22rpx;
    padding: 6rpx 14rpx;
    border-radius: 10rpx 0 20rpx 0;
    transform: scale(0.8);
    transform-origin: left top;
  }
}

.box.more {
  .mask {
    height: 100%;
    width: 100%;
    flex-direction: column;
    font-size: 28rpx;
  }
}
</style>
