import { createUniFetch } from "uni-app-fetch";

export const uniFetch = createUniFetch({
  loading: {title: '正在加载中'},
  baseURL: 'https://slwl-api.itheima.net',
  intercept: {
    // 请求拦截器
    request(option){
      return option
    },
    // 响应拦截器
   response(result){
     return result
   }
  }
})
