<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-25 11:40:09
 * @Description: 💽专辑
 -->
<template>
  <home-layout>
    <div class="title">
      <a-radio-group v-model="type" buttonStyle="solid">
        <a-radio-button
          v-for="(item, index) in typeMenu"
          :key="index"
          :value="item.value">
          {{item.name}}
        </a-radio-button>
      </a-radio-group>
    </div>
    <div class="new-album">
      <component :is="type"></component>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import Newsong from './components/newsong'
import Newalbum from './components/newalbum'

export default {
  name: 'newAlbum',
  data () {
    return {
      type: 'newsong',
      typeMenu: [
        { value: 'newsong', name: '新歌速递' },
        { value: 'newalbum', name: '新碟上架' }
      ]
    }
  },
  components: {
    HomeLayout,
    Newsong,
    Newalbum
  }
}
</script>

<style lang="less" scoped>
.new-album {
  max-width: 1100px;
  margin: auto;
}
.title {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  /deep/ .ant-radio-button-wrapper {
    height: 28px;
    line-height: 26px;
  }
}
</style>
