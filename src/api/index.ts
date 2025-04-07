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

const classifyListApi = () =>
  request({
    url: "/classify",
    data: { pageSize: 8 },
  });

export { swiperListApi, scrollListApi, noticeListApi, classifyListApi };
