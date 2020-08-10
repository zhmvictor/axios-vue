<template>
  <div class="home">

  </div>
</template>

<script>
// 取消请求： 取消正在进行的http请求
import axios from 'axios';
export default {
  name: 'axios3-5',
  created() {
    let source = axios.CancelToken.source();
    axios.get('/data.json', {
      cancelToken: source.token
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });

    // 取消请求
    source.cancel();

    // 什么情况下可能用到取消请求
    // crm管理系统？？？
    // 

  },
}
</script>
