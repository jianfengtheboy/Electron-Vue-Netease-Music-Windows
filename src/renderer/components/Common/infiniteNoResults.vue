<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-24 11:36:29
 * @Description: 暂无请求结果组件
 -->
<template>
  <div class="no-result">
    <img class="no-result-img" src="../../assets/images/noResult.png" alt="" />
    <div class="no-result-txt">暂无数据~</div>
  </div>
</template>

<script>
export default {
  name: 'infiniteNoResults'
}
</script>

<style lang="less" scoped>
.no-result {
  padding-top: 50px;
  text-align: center;
  .no-result-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .no-result-txt {
    margin: 20px 0;
    text-align: center;
  }
}
</style>
