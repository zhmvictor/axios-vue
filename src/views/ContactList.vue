<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list
      v-model="selectId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import { ContactList, Toast, ContactEdit, Popup } from 'vant';

export default {
  name: 'ContactList',
  components: {
    // 只有在template里使用时才需要注册
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup,
  },
  data() {
    return {
      // list 格式
      // {
      //   id: 1,
      //   name: '',
      //   tel: ''
      // }
      list: [], // 联系人列表数据源
      selectId: null,
      instance: null, // axios 实例
      showEdit: false, // 编辑弹窗的显示隐藏
      editingContact: {}, // 正在编辑的联系人数据
      isEdit: false, // 控制新建（false），编辑（true）
    };
  },
  methods: {
    // 添加联系人
    onAdd() {
      this.showEdit = true;
      this.isEdit = false;
    },
    // 编辑联系人
    onEdit(info) {
      this.showEdit = true;
      this.isEdit = true;
      this.editingContact = info;
    },
    // 保存联系人
    async onSave(info) {
      if(this.isEdit) { // 编辑保存
        let res = await this.$Http.editContact(info);
        if(res.code === 200) {
          Toast('编辑成功');
          this.getList();
          this.showEdit = false;
        }
      } else { // 新建保存
        let res = await this.$Http.newContactJson(info);
        // let res = await this.$Http.newContactForm(info, true);
        if(res.code === 200) {
          Toast('新建成功');
          this.getList();
          this.showEdit = false;
        }
      }
    },
    // 删除联系人
    async onDelete(info) {
      let res = await this.$Http.delContact({
        id: info.id
      });
      if(res.code === 200) {
        Toast('删除成功');
        this.getList();
        this.showEdit = false;
      }
    },
    // 获取联系人列表
    async getList() {
      let res = await this.$Http.getContactList();
      this.list = res.data;
    },
  },
  created() {
    this.getList();
  },
}
</script>
