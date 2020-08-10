<template>
  <div class="home">

  </div>
</template>

<script>
// axios 拦截器：在请求或响应被处理前拦截
// 拦截请求：在请求之前做处理
// 拦截响应：在响应之后做处理
// 请求拦截器
// 响应拦截器
import axios from 'axios';
export default {
  name: 'axios3-3',
  created() {
    // 请求拦截器
    axios.interceptors.request.use(config => {
      // 在发送请求前做些什么
      return config; // 请求配置
    }, err => {
      // 请求错误时做些什么
      return Promise.reject(err);
    });


    // 响应拦截器
    axios.interceptors.response.use(res => {
      // 请求成功对响应数据做处理
      return res
    }, err => {
      // 响应错误时做些什么
      return Promise.reject(err);
    });

    // 请求错误与响应错误的区别：请求是否到达后端
    // 请求未到达后端时报错，则为请求错误
    // 请求到达后端之后返回报错，则为响应错误

    // 取消拦截器（了解，实际开发中不会轻易取消拦截器）
    let interceptors = axios.interceptors.request.use(config => {
      config.headers = {
        auth: true
      };
      return config;
    });
    axios.interceptors.request.eject(interceptors);

    // 例子 登录状态（token: ''）
    let instance = axios.create({});
    // 拦截器要建在axios实例上，避免污染全局axios
    instance.interceptors.request.use(config => {
      config.headers.token = '';
      return config;
    });

    // 移动端开发
    let instance_phone = axios.create({});
    // 请求前打开提示弹窗
    instance_phone.interceptors.request.use(config => {
      $('#modal').show();
      return config;
    });
    // 请求结束响应后关闭提示弹窗
    instance_phone.interceptors.response.use(res => {
      $('#modal').show();
      return res
    })
  },
}
</script>
