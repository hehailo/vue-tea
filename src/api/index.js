import request from "./request";

// 获取分类列表
export const searcCateLlist = () => {
  return request({
    method: "GET",
    url: "/api/cate/list",
  });
};
