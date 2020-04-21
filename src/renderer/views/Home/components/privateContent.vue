<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 13:54:58
 * @Description: 独家放送
 -->
<template>
  <div class="private-content">
    <ul class="list">
      <list-item
        v-for="item in list"
        :key="`${item.id}_${item.videoId}`"
        :item="item"
        :item-type="getType(item)"
        :ratio="0.43"
        imgParam="550y220"
        class="list-item"
      >
        <div
          slot="copywriter"
          class="copywriter"
          v-if="item.copywriter"
        >
          {{ item.copywriter }}
        </div>
      </list-item>
    </ul>
  </div>
</template>

<script>
import listItem from '@/components/Common/list-item'

export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    listItem
  },
  methods: {
    getType (item) {
      return typeof item.id === 'number' ? 'mv' : 'video'
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-between;
  .list-item {
    width: 32%;
    &:hover {
      .copywriter {
        transform: translateY(0);
      }
      /deep/ .top {
        display: none;
      }
    }
    .copywriter {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      padding: 6px;
      background: rgba(0, 0, 0, .3);
      color: #fff;
      transform: translateY(-100%);
      transition: all .3s;
    }
  }
}
</style>
