<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-24 11:35:54
 * @Description: 订阅者
 -->
<template>
  <div class="sublist">
    <infiniteNoResults></infiniteNoResults>
  </div>
</template>

<script>
import infiniteNoResults from '@/components/Common/infiniteNoResults'

export default {
  data () {
    return {}
  },
  components: {
    infiniteNoResults
  }
}
</script>

<style lang="less" scoped></style>
