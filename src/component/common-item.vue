<template>
  <view class="box" v-if="!more">
    <navigator
      :url="`/pages/classlist/classlist?classId=${classify.classId}&name=${classify.name}`"
    >
      <wd-img
        width="220rpx"
        height="340rpx"
        :src="classify.picUrl"
        mode="aspectFill"
        radius="10rpx"
      />
      <view class="mask">{{ classify.name }}</view>
      <view class="tab">{{
        updateTime === null ? "刚刚更新" : `${updateTime}前更新`
      }}</view>
    </navigator>
  </view>

  <view class="box more" v-else>
    <navigator url="/pages/classify/classify" open-type="reLaunch">
      <wd-img
        width="220rpx"
        height="340rpx"
        src="https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/wallpaper/more.jpg"
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
import { formatTimeDiff } from "@/common/util/date";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    more: boolean;
    classify: {
      classId: string;
      name: string;
      picUrl: string;
      updateTime: number;
    };
  }>(),
  {
    more: false,
    classify: () => ({
      classId: "",
      name: "默认全部",
      picUrl:
        "https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/wallpaper/classify1.jpg",
      updateTime: Date.now() - 1000 * 60 * 60 * 5,
    }),
  }
);

const updateTime = computed(() => formatTimeDiff(props.classify.updateTime));
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
