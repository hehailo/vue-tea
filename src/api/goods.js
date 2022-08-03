import request from "./request";

export const searchGoods = (params) => {
  return request({
    method: "GET",
    url: "/api/search/goods",
    // params 选项用来配置 Query 参数
    params,
  });
};
