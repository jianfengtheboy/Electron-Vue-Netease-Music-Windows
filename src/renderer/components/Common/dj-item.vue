<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 21:20:59
 * @Description: dj项组件
 -->
<template>
  <router-link tag="li" :to="`/dj/${dj.id}`" :class="itemCls">
    <figure class="info">
      <img class="avatar" v-lazy="dj.picUrl"/>
      <div class="top">
        {{ dj.category }}
      </div>
      <div class="bottom" v-if="dj.copywriter">
        <span>{{dj.copywriter}}</span>
      </div>
    </figure>
    <div class="intro">
      <div class="name">{{dj.name}}</div>
      <div class="desc" v-if="dj.description">{{dj.description}}</div>
      <slot name="price"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'dj-list',
  props: {
    layout: {
      type: String,
      default: ''
    },
    dj: {
      type: Object,
      default: null
    }
  },
  computed: {
    itemCls () {
      return this.layout === 'horizon' ? 'item horizon' : 'item'
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  &.horizon {
    flex-direction: row;
    .info {
      flex: 1;
    }
    .intro {
      flex: 2;
      .name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .info {
    position: relative;
    padding-top: 100%;
    width: 100%;
    margin: 0;
    color: #fff;
    font-size: 13px;
    border-radius: 6px;
    overflow: hidden;
    .avatar {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 100%;
      height: 100%;
    }
    .top, .bottom {
      position: absolute;
      left: 0;
      padding: 0 10px;
    }
    .top {
      top: 0;
      padding: 0 10px;
      line-height: 24px;
      background: @primary-color;
      color: #fff;
      border-radius: 0 0 21px 0;
    }
    .bottom {
      width: 100%;
      bottom: 0;
      padding-right: 30px;
      line-height: 30px;
      font-size: 12px;
      background: linear-gradient(to top, rgba(0, 0, 0, .5), transparent);
    }
    .bottom {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .intro {
    overflow: hidden;
    .name {
      padding: 4px;
      font-size: 13px;
    }
  }
}
</style>
