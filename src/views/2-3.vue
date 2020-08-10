<template>
  <div class="home"></div>
</template>

<script>
// 并发请求：同时进行多个请求，并统一处理返回值
// 涉及需求：多个不同接口的数据需要同时返回，以便统一处理
import axios from 'axios';
export default {
  name: 'axios2-3',
  components: {},
  created() {
    // axios.all([]); 同时执行多个axios请求
    // axios.spread(); 分割处理 axios.all() 返回的数据
    axios.all([
      axios.get('./data.json'), 
      axios.get('/city.json')
    ]).then(
      axios.spread((data, city) => {
        console.log(data, city);
      })
    );
  },
};
</script>
