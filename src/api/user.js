import request from "./request";

export const login = (params) => {
  return request({
    method: "POST",
    url: "/api/user/login",
    data: params,
  });
};

export const sendSms = (params) => {
  console.log(params);
  return request({
    method: "POST",
    url: "/api/user/sendSms",
    data: params,
  });
};
