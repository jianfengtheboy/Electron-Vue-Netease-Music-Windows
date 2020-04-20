<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:14:49
 * @Description:
 -->
<template>
  <span>
    <artists :artists="row[col.key]" v-if="Array.isArray(row[col.key]) && row[col.key].length" />
    <span v-else>{{ '未知歌手' }}</span>
  </span>
</template>

<script>
import Artists from '@/components/Common/artists'

export default {
  data () {
    return {}
  },
  props: {
    row: {
      type: Object
    },
    col: {
      type: Object
    }
  },
  components: {
    Artists
  }
}
</script>
