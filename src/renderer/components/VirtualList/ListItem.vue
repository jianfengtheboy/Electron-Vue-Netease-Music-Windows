<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 23:18:14
 * @Description: listitem组件
 -->
<script>
import PropTypes from 'vue-types'

export default {
  name: 'VirtualListItem',
  props: {
    item: PropTypes.object.isRequired,
    tag: PropTypes.string.def('div')
  },
  render (h) {
    return h(
      this.tag,
      typeof this.$slots.default === 'function'
        ? this.$slots.default(this.item)
        : this.$slots.default
    )
  }
}
</script>
