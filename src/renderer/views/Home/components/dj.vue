<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 22:11:55
 * @Description: 主播电台
 -->
<template>
  <div class="dj">
    <ul class="list">
      <dj-item
        class="list-item"
        v-for="item in list.slice(0, 6)"
        :dj="item"
        :key="item.id"
        :layout="layout"
      />
    </ul>
  </div>
</template>

<script>
import djItem from '@/components/Common/dj-item'

export default {
  name: 'dj',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    layout: {
      type: String,
      default: ''
    }
  },
  components: {
    djItem
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-between;
  .list-item {
    width: 15%;
  }
}
</style>
