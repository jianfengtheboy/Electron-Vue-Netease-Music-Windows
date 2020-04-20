<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:16:01
 * @Description: 默认
 -->
<template>
  <span>
    <template v-if="row[col.key] !== ''">{{ row[col.key] }}</template>
    <template v-else>未知</template>
  </span>
</template>

<script>
export default {
  props: {
    row: {
      type: Object
    },
    col: {
      type: Object
    }
  }
}
</script>
