<template>
  <div class="home">

  </div>
</template>

<script>
/**
 * axios 请求方法：get、post、put、patch、delete
 * 
 * get: 请求数据
 * post: 提交数据（表单提交+文件上传）  --- 新增
 * put: 更新数据（所有数据推送到后端）  --- 修改
 * patch: 更新数据（只将修改的数据推送到后端）  --- 数据量大的修改
 * delete: 删除数据
 */
import axios from 'axios';
export default {
  name: 'axios2-2',
  components: {
  },
  created() {
    // --------- GET --------------
    // 请求路径： http://localhost:8080/data.json?id=12
    axios.get('/data.json', {
      params: {
        id: 12
      }
    }).the(res => {
      console.log(res);
    });

    // 请求方法别名
    axios({
      methods: 'get',
      url: '/data.json',
      params: {
        id: 12
      }
    }).then(res => {
      console.log(res);
    });

    // -------- POST ------------
    /**
     * 请求数据格式：
     * form-data 表单提交（图片上传，文件上传）
     * application/json
     */
    let data = {
      id: 12
    };
    axios.post('/data.json', { data }).then(res => {
      console.log(res);
    });

    // axios({
    //   methods: 'post',
    //   url: '/post',
    //   data: data,
    // }).then(res => {
    //   console.log(res);
    // });

    // ---------------- delete --------------
    /**
     * url查询参数： params
     * 请求集参数： data
     */
    axios.delete('/data.json', {
      params: {
        id: 12,
        name: 'aaa'
      },
    }).then(res => {
      console.log(res);
    });

    axios.delete('/data.json', {
      data: {
        id: 12
      },
    }).then(res => {
      console.log(res);
    });
  },
}
</script>
