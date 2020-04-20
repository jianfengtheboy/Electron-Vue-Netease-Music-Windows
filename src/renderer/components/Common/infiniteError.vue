<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:41:44
 * @Description: 请求数据失败组件
 -->
<template>
  <div class="infinite-error">
    请求数据失败
    <a href="javascript:;" @click="$attrs.trigger">重试</a>
  </div>
</template>

<script>
export default {
  name: 'infiniteError'
}
</script>

<style scoped>
.infinite-error {
  margin: 15px 0;
  text-align: center;
}
</style>
