<template>
  <view class="global">
    <common-nav-bar title="推荐" />
    <view class="home">
      <!-- 轮播图 -->
      <view class="banner" v-if="swiperList.length > 0">
        <wd-swiper
          :list="swiperList"
          autoplay
          :indicator="{ type: 'dots-bar' }"
          class="swiper"
        />
      </view>
      <!-- 公告 -->
      <view class="notice">
        <wd-notice-bar type="info" :text="noticeList" @next="setTextIndex">
          <template #prefix>
            <view class="left"><wd-icon name="tips" size="15px" /></view>
          </template>
          <template #suffix>
            <view class="right" @click="clickNotice"
              ><wd-icon name="chevron-right" size="15px"
            /></view>
          </template>
        </wd-notice-bar>
      </view>
      <!-- 每日推荐 -->
      <view class="recommend">
        <common-title>
          <template #name>每日推荐</template>
          <template #custom>
            <view class="date">
              <view class="calendar">
                <wd-icon name="calendar" size="20px" color="#28b389" />
              </view>
              <view class="text">
                <wd-text :text="currentDate" color="#28b389" size="28rpx" />
              </view>
            </view>
          </template>
        </common-title>
        <view class="content">
          <scroll-view scroll-x class="scroll-view">
            <view
              class="box"
              v-for="scroll in scrollList"
              :key="scroll._id"
              @click="goPreview"
            >
              <image
                :src="scroll.smallPicurl"
                mode="scaleToFill"
                class="image"
              />
            </view>
          </scroll-view>
        </view>
      </view>
      <!-- 专题精选 -->
      <view class="theme">
        <common-title>
          <template #name>专题精选</template>
          <template #custom>
            <view class="navigator">
              <navigator url="">More+</navigator>
            </view>
          </template>
        </common-title>
        <view class="content">
          <common-item v-for="item in 8" />
          <common-item :more="true" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CommonTitle from "@/component/common-title.vue";
import CommonItem from "@/component/common-item.vue";
import commonNavBar from "@/component/common-nav-bar.vue";

onMounted(() => {
  getSwiperList();
  getScrollList();
  getNoticeList();
});

const swiperList = ref<string[]>([]);
const getSwiperList = async () => {
  const res: any = await uni.request({
    url: "https://tea.qingnian8.com/api/bizhi/homeBanner",
    header: {
      "access-key": "charles5188",
    },
  });
  if (res.data.errCode == 0) {
    swiperList.value = res.data.data.map((item: any) => item.picurl);
  }
};
const scrollList = ref<any[]>([]);
const getScrollList = async () => {
  const res: any = await uni.request({
    url: "https://tea.qingnian8.com/api/bizhi/randomWall",
    header: {
      "access-key": "charles5188",
    },
  });
  if (res.data.errCode == 0) {
    scrollList.value = res.data.data;
  }
};

const noticeList = ref<string[]>([]);
const getNoticeList = async () => {
  const res: any = await uni.request({
    url: "https://tea.qingnian8.com/api/bizhi/wallNewsList",
    header: {
      "access-key": "charles5188",
    },
    data: {
      select: true,
    },
  });
  if (res.data.errCode == 0) {
    noticeList.value = res.data.data.map((item: any) => item.title);
  }
};

const textArray = ref<string[]>([
  "欢迎使用wot design uni",
  "该组件库基于uniapp ->Vue3, ts构建",
  "项目地址：https://github.com/Moonofweisheng/wot-design-uni",
  "我们的目标是打造最强uniapp组件库",
  "诚挚邀请大家共同建设",
  "这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息",
]);

const textIndex = ref(0);
const setTextIndex = (index: number) => {
  textIndex.value = index;
};

const clickNotice = () => uni.navigateTo({ url: "/pages/notice/notice" });

const currentDate = ref(
  new Date().getDate().toString().padStart(2, "0") + "号"
);

const goPreview = () => uni.navigateTo({ url: "/pages/preview/preview" });
</script>

<style lang="scss" scoped>
.home {
  width: 750rpx;
  .banner {
    width: 750rpx;
    padding: 30rpx 30rpx;
    .swiper {
      width: 690rpx;
      height: 340rpx;
    }
  }

  .notice {
    width: 750rpx;
    padding: 0 30rpx;
    .left {
      padding-right: 10rpx;
    }
    .content {
      font-size: 24rpx;
    }
    .right {
      padding-left: 10rpx;
    }
  }

  .recommend {
    padding-top: 50rpx;
    .date {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        padding-bottom: 8rpx;
        padding-left: 2rpx;
      }
    }
    .content {
      width: 750rpx;
      padding-left: 30rpx;
      padding-top: 30rpx;
      .scroll-view {
        white-space: nowrap;
        .box {
          width: 215rpx;
          height: 430rpx;
          display: inline-block;
          padding-right: 15rpx;
          .image {
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }
        }
        .box:last-child {
          padding-right: 30rpx;
        }
      }
    }
  }

  .theme {
    padding-top: 50rpx;
    .navigator {
      font-size: 32rpx;
      color: #888;
    }
    .content {
      padding: 30rpx 30rpx 0 30rpx;
      display: grid;
      gap: 15rpx;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
