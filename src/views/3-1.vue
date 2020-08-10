<template>
  <div class="home">

  </div>
</template>

<script>
// 创建axios实例 - axios.create()
// 需求：后端接口地址有多个，且超时时长不一样
import axios from 'axios';
export default {
  name: 'axios3-1',
  created() {
    let instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 1000,
    });
    instance.get('/data.json').then(res => {
      console.log(res);
    });
  },
}
</script>
