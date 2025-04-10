<template>
  <view class="class-list">
    <view class="loading" v-if="classList.length === 0 && !noData">
      <wd-loadmore state="loading" />
    </view>
    <view class="content">
      <view class="item" v-for="classItem in classList" :key="classItem._id">
        <navigator :url="`/pages/preview/preview?id=${classItem._id}`">
          <wd-img
            width="242rpx"
            height="440rpx"
            :src="classItem.smallPicurl"
            mode="aspectFill"
            custom-class="img"
          />
        </navigator>
      </view>
    </view>
    <view class="loading" v-if="classList.length !== 0 || noData">
      <wd-loadmore :state="noData ? 'finished' : 'loading'" />
    </view>
    <view class="safe-area-inset-bottom"></view>
  </view>
</template>

<script lang="ts" setup>
import { classListApi } from "@/api";
import {
  onLoad,
  onReachBottom,
  onShareAppMessage,
  onShareTimeline,
} from "@dcloudio/uni-app";
import { ref } from "vue";

let pageNum = 1;
let classId = "";
let noData = false;
const pageSize = 12;
let className = "";
onLoad((e) => {
  uni.setNavigationBarTitle({
    title: e!.name,
  });
  classId = e!.classId;
  className = e!.name;
  getClassList(classId, pageNum, pageSize);
});

onReachBottom(() => {
  if (!noData) {
    getClassList(classId, ++pageNum, pageSize);
  }
});

const classList = ref<any[]>([]);
const getClassList = async (
  classId: string,
  pageNum: number,
  pageSize: number
) => {
  const res: any = await classListApi(classId, pageNum, pageSize);
  classList.value = [...classList.value, ...res.data.data];
  if (res.data.data.length < pageSize) {
    noData = true;
  }
  uni.setStorageSync("storageClassList", classList.value);
};

onShareAppMessage(() => ({
  title: className,
  path: `/pages/classlist/classlist?id=${classId}&name=${className}`,
}));

onShareTimeline(() => ({
  title: className,
  query: `id=${classId}&name=${className}`,
}));
</script>

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
