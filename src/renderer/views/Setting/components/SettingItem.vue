<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-16 23:10:40
 * @Description:
 -->
<template>
  <div class="setting-item">
    <div class="label">{{ label }}</div>
    <slot class="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.setting-item {
  display: flex;
  align-items: center;
  padding: 20px;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  .label {
    width: 150px;
    flex: 0 0 150px;
  }
  .content {
     flex: 1;
  }
  /deep/ .ant-btn {
    margin-left: 10px;
  }
}
</style>
