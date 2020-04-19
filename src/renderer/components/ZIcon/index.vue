<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-19 22:39:28
 * @Description: icon组件
 -->
<template>
  <my-icon :type="`icon-${type}`" />
</template>

<script>
import { Icon } from 'ant-design-vue'

const iconURL = 'https://at.alicdn.com/t/font_1188071_1m1k6mct6ob.js'

let MyIcon = Icon.createFromIconfontCN({
  scriptUrl: iconURL
})

export default {
  components: {
    MyIcon
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>
