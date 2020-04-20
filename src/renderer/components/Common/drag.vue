<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 12:50:13
 * @Description: 可拖动组件
 -->
<template>
  <div class="drag-box" ref="drag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Drag',
  data () {
    return {
      title: '可拖动组件'
    }
  },
  props: {
    axis: {
      type: String,
      default: ''
    },
    containment: {
      type: [String, Boolean],
      default: 'body'
    },
    handle: {
      type: String,
      default: String
    }
  },
  mounted () {
    setTimeout(() => {
      this._initDrag()
    }, 20)
  },
  methods: {
    _initDrag () {
      const Draggabilly = require('draggabilly')
      this.drag = new Draggabilly(this.$refs.drag, {
        // 限制在仅在x或y轴上可拖动,默认均可拖动
        axis: this.axis,
        // Element,Selector String,限制元素可拖动范围,true为父元素
        containment: this.containment,
        // Element,Selector String
        handle: this.handle
      })
    }
  }
}
</script>
