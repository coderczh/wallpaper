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
      <view
        class="go-back"
        :style="{ top: `${statusBarHeight}px` }"
        @click="goBack"
      >
        <wd-icon name="rollback" color="#fff" size="35rpx" />
      </view>
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
        <view class="box" @click="showRate">
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
        closable
        custom-style="max-height: 60vh;"
      >
        <view class="info-popup">
          <view class="header">
            <wd-text color="#676767" text="壁纸信息" size="30rpx" />
          </view>
          <view class="content">
            <view class="row">
              <view class="label"
                ><wd-text
                  text="壁纸ID："
                  size="28rpx"
                  lineHeight="1.7em"
                  color="#a7a7a7"
              /></view>
              <view class="value"
                ><wd-text
                  text="dadadadasdasdde"
                  size="28rpx"
                  color="#676767"
                  lineHeight="1.7em"
              /></view>
            </view>
            <view class="row">
              <view class="label"
                ><wd-text
                  text="分类："
                  size="28rpx"
                  lineHeight="1.7em"
                  color="#a7a7a7"
              /></view>
              <view class="value"
                ><wd-text
                  text="明星美女"
                  color="#676767"
                  size="28rpx"
                  lineHeight="1.7em"
              /></view>
            </view>
            <view class="row"
              ><view class="label"
                ><wd-text
                  text="发布者："
                  size="28rpx"
                  lineHeight="1.7em"
                  color="#a7a7a7"
              /></view>
              <view class="value"
                ><wd-text
                  text="天天向上"
                  size="28rpx"
                  color="#676767"
                  lineHeight="1.7em" /></view
            ></view>
            <view class="row"
              ><view class="label"
                ><wd-text
                  text="评分："
                  size="28rpx"
                  lineHeight="1.7em"
                  color="#a7a7a7"
              /></view>
              <view class="value rate-box">
                <view class="rate">
                  <wd-rate v-model="rate" readonly allow-half />
                </view>
                <view class="score"
                  ><wd-text
                    text="5分"
                    color="#676767"
                    size="27rpx"
                    lineHeight="1.8em"
                /></view> </view
            ></view>
            <view class="row"
              ><view class="label"
                ><wd-text
                  text="摘要："
                  size="28rpx"
                  lineHeight="1.7em"
                  color="#a7a7a7"
              /></view>
              <view class="value"
                ><wd-text
                  text="摘要文字填充内容，摘要文字填充内容，摘要文字填充内容，摘要文字填充内容"
                  size="28rpx"
                  color="#676767"
                  lineHeight="1.7em" /></view
            ></view>
            <view class="row"
              ><view class="label"
                ><wd-text
                  text="标签："
                  size="28rpx"
                  lineHeight="1.7em"
                  color="#a7a7a7"
              /></view>
              <view class="value">
                <wd-tag
                  mark
                  type="success"
                  custom-class="tag"
                  plain
                  v-for="item in 3"
                >
                  <wd-text text="标签" color="#28b389" />
                </wd-tag>
              </view>
            </view>
            <view class="copyright">
              <wd-text
                text="声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯您的权益，您可以拷贝壁纸ID举报至平台，管理将删除侵权壁纸，维护您的权益"
                size="28rpx"
                color="#666"
                lineHeight="1.6em"
              />
            </view>
          </view>
        </view>
      </wd-popup>
    </view>
    <wd-popup v-model="rateStatus" closable custom-class="rate-popup">
      <wd-text
        color="#676767"
        text="壁纸评分"
        size="30rpx"
        custom-class="rate-text"
      />
      <view class="rate-content">
        <wd-rate v-model="score" allow-half />
        <wd-text
          :text="`${score}分`"
          color="#ffca3e"
          lineHeight="1em"
          custom-style="padding-left: 10rpx; width: 80rpx; text-align: right"
        />
      </view>
      <view class="rate-footer">
        <wd-button :disabled="!score" plain @click="submitRate" type="info"
          ><wd-text text="确认评分" color="#3d3b3b"
        /></wd-button>
      </view>
    </wd-popup>
  </view>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";

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

const rateStatus = ref<boolean>(false);
const showRate = () => {
  rateStatus.value = !rateStatus.value;
};

const rate = ref<number>(3);

const score = ref<number>(0);
const submitRate = () => {
  console.log(score.value);
};

const statusBarHeight = computed(
  () => uni.getSystemInfoSync().statusBarHeight || 0
);

const goBack = () => uni.navigateBack();
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
      width: 64rpx;
      height: 64rpx;
      background-color: rgba(0, 0, 0, 0.5);
      left: 60rpx;
      margin-left: 0;
      border-radius: 200rpx;
      top: 0;
      backdrop-filter: blur(10rpx);
      border: 1rpx solid rgba(255, 255, 255, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
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
      margin-top: 20rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      .row {
        display: flex;
        padding: 16rpx 0;
        .label {
          width: 140rpx;
          text-align: right;
        }
        .value {
          flex: 1;
          width: 0;
          user-select: text;
          -webkit-user-select: text;
          -webkit-touch-callout: default;
        }
        .rate-box {
          display: flex;
          .score {
            margin-left: 20rpx;
          }
        }
      }
      .copyright {
        background-color: #f6f6f6;
        border-radius: 10rpx;
        padding: 20rpx;
        margin: 20rpx 20rpx;
      }
    }
  }

  .rate-content {
    padding: 30rpx 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rate-footer {
    text-align: center;
    padding: 20rpx 0;
  }
}
:deep(.tag) {
  margin-right: 10rpx;
}

:deep(.rate-popup) {
  width: 70vw;
  border-radius: 30rpx;
}

:deep(.rate-text) {
  margin-top: 17rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
