import type RequestOptions from "@/common/type/request";
import { BASE_URL } from "../constant";

export const request = (requestOptions: RequestOptions) =>
  new Promise((resolve, reject) =>
    uni.request({
      url: `${BASE_URL}${requestOptions.url}`,
      method: requestOptions.method || "GET",
      header: {
        "access-key": "755056",
      },
      data: requestOptions.data,
      success: (res: any) => {
        if (res.data.errCode === 0) {
          resolve(res);
        } else {
          uni.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false,
          });
          reject(res.data);
        }
      },
      fail: (err: any) => {
        reject(err.data);
      },
    })
  );

export default request;
