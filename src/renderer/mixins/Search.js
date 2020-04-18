/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 13:12:04
 * @LastEditTime: 2020-04-09 13:12:15
 * @Description: 混合
 */
export default {
  data () {
    return {
      spinning: true
    }
  },
  props: {
    result: {
      type: Object,
      default () {
        return null
      }
    }
  },
  watch: {
    result (newVal) {
      if (newVal) {
        this.normalData()
      }
    }
  },
  mounted () {
    this.normalData()
  }
}
