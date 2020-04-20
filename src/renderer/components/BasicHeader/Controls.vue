<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 22:19:03
 * @LastEditTime: 2020-04-20 22:24:52
 * @Description: 返回、前进、后退
 -->
<template>
  <a-button-group size="small">
    <a-button type="primary" @click="back">
      <a-icon type="left" />
    </a-button>
    <a-button type="primary" @click="forward">
      <a-icon type="right" />
    </a-button>
    <a-button type="primary" @click="refresh">
      <a-icon type="reload" />
    </a-button>
  </a-button-group>
</template>

<script>
import eventBus from '@/utils/eventBus'

export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    forward () {
      this.$router.go(1)
    },
    refresh () {
      eventBus.$emit('refresh')
    }
  }
}
</script>

<style lang="less" scoped>
.ant-btn {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
