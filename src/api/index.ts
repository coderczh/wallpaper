import { BASE_URL } from "@/common/constant";
import request from "@/common/util/request";

const swiperListApi = () => request({ url: "/homeBanner" });

const scrollListApi = () => request({ url: "/randomWall" });

const noticeListApi = () =>
  request({
    url: "/wallNewsList",
    data: {
      select: true,
    },
  });

const classifyListApi = (pageSize?: number) =>
  request({
    url: "/classify",
    data: { pageSize: pageSize ?? 8 },
  });

const classListApi = (classid: string, pageNum: number, pageSize: number) =>
  request({
    url: "/wallList",
    data: { classid, pageNum, pageSize },
  });

const setScore = (classid: string, wallId: number, userScore: number) =>
  request({
    url: "/setupScore",
    data: { classid, wallId, userScore },
  });

export {
  swiperListApi,
  scrollListApi,
  noticeListApi,
  classifyListApi,
  classListApi,
  setScore,
};
