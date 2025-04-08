<template>
  <view class="class-list">
    <view class="loading" v-if="classList.length === 0 && !noData">
      <wd-loadmore state="loading" />
    </view>
    <view class="content">
      <view class="item" v-for="classItem in classList" :key="classItem._id">
        <navigator url="/pages/preview/preview">
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
  </view>
</template>

<script lang="ts" setup>
import { classListApi } from "@/api";
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { ref } from "vue";

let pageNum = 1;
let classId = "";
let noData = false;
const pageSize = 12;
onLoad((e) => {
  uni.setNavigationBarTitle({
    title: e!.name,
  });
  classId = e!.classId;
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
};
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
