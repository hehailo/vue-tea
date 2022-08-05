import axios from "axios";
// import QS from "qs";
import { Toast } from "vant";

const instance = axios.create({
  //   baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  overlay: true,
});

let loadingToast = [];

instance.interceptors.request.use(
  (config) => {
    let toast = Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true,
    });
    loadingToast.push(toast);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    if (loadingToast.length > 0) {
      loadingToast.pop().clear();
    }
    Toast.success("请求成功");
    console.log("api response",response.data);
    return response.data;
  },
  (error) => {
    Toast.fail("请求失败");
    if (loadingToast.length > 0) {
      loadingToast.pop().clear();
    }
    return Promise.reject(error);
  }
);

// function get(url, params) {
//   return new Promise((resolve, reject) => {
//     instance
//       .get(url, {
//         params: params,
//       })
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err.data);
//       });
//   });
// }
/**
//  * post方法，对应post请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// function post(url, params) {
//   return new Promise((resolve, reject) => {
//     instance
//       .post(url, QS.stringify(params))
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err.data);
//       });
//   });
// }

export default instance;
