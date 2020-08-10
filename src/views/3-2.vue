<template>
  <div class="home">

  </div>
</template>

<script>
// axios 配置参数
import axios from 'axios';
export default {
  name: 'axios3-2',
  created() {
    axios.create({
      baseURL: '', // 请求域名，基本地址
      timeout: 1000, // 请求超时时长，单位 ms
      url: '/data.json', // 请求相对路径
      method: '', // 请求方法：get|post|put|patch|delete
      headers: {}, // 设置请求头
      params: {}, // 请求参数拼接到url上
      data: {}, // 请求参数放到请求体里
    });

    // axios 参数配置有哪些？
    // 优先级1-2-3由低到高
    // 1. axios 全局配置
    axios.defaults.timeout = 1000;
    // 2. axios 实例配置
    let instance = axios.create();
    instance.defaults.timeout = 3000;
    // 3. axios 请求配置
    instance.get('/data.json', {
      timeout: 500,
    })
  },
}
</script>
