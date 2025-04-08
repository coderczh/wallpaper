<template>
  <view class="global">
    <common-nav-bar title="分类" />
    <view class="classify">
      <common-item
        v-for="classify in classifyList"
        :key="classify._id"
        :classify="classify"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import commonNavBar from "@/component/common-nav-bar.vue";
import commonItem from "@/component/common-item.vue";
import { onMounted, ref } from "vue";
import { classifyListApi } from "@/api";

onMounted(() => {
  getClassifyList();
});

const classifyList = ref<any[]>([]);
const getClassifyList = async () => {
  const res: any = await classifyListApi(100);
  classifyList.value = res.data.data.map((item: any) => ({
    name: item.name,
    picUrl: item.picurl,
    updateTime: item.updateTime,
  }));
};
</script>

<style lang="scss" scoped>
.classify {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}
</style>
