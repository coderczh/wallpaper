<template>
  <view class="class-list">
    <view class="content">
      <view class="item" v-for="item in 10">
        <navigator url="">
          <wd-img
            width="242rpx"
            height="440rpx"
            src="https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/wallpaper/preview2.jpg"
            mode="aspectFill"
            custom-class="img"
          />
        </navigator>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.class-list {
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6rpx;
    margin: 6rpx;
    :deep(.img) {
      display: block;
    }
  }
}
</style>
