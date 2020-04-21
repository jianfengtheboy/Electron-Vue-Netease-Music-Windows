<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 13:46:19
 * @Description: debounce-btn组件
 -->
<template>
  <a-button
    v-bind="{...$attrs,...$slots}"
    v-on="$listeners"
    @click="handleClick"
  >
    <slot></slot>
  </a-button>
</template>

<script>
import debounce from 'loadsh/debounce'

export default {
  methods: {
    handleClick: debounce(function () {
      this.$emit('click')
    }, 1000, {
      leading: true,
      trailing: false
    })
  }
}
</script>
