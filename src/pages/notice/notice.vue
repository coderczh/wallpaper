<template>
  <view class="layout">
    <view class="title">
      <view class="tag"
        ><wd-tag type="danger" mark plain>{{
          detail.select ? "置顶" : "公告"
        }}</wd-tag></view
      >
      <view class="font">{{ detail.title }}</view>
    </view>
    <view class="info">
      <view class="item">{{ detail?.author }}</view>
      <view class="item">{{ formatDateTime(detail?.publish_date) }}</view>
    </view>
    <view class="content">
      <mp-html :content="detail?.content"></mp-html>
    </view>
    <view class="count">阅读 {{ detail?.view_count }}</view>
  </view>
</template>

<script lang="ts" setup>
import { noticeDetailApi } from "@/api";
import { formatDateTime } from "@/common/util/date";
import { onLoad } from "@dcloudio/uni-app";
import { reactive } from "vue";
import mpHtml from "@/component/mp-html/components/mp-html/mp-html.vue";

onLoad((e) => {
  getNoticeDetail(e!.id);
});

const detail = reactive<any>({});
const getNoticeDetail = async (id: string) => {
  const res = await noticeDetailApi(id);
  Object.assign(detail, res.data.data);
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 30rpx;
  .title {
    font-size: 30rpx;
    color: #111;
    line-height: 1.6em;
    padding-bottom: 30rpx;
    display: flex;
    .font {
      padding-left: 6rpx;
    }
    .tag {
      width: 80rpx;
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
