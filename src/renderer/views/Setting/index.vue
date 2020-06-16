<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-16 23:00:15
 * @Description: 设置
 -->
<template>
  <div class="setting">
    <setting-download-folder />
    <setting-version />
  </div>
</template>

<script>
import SettingDownloadFolder from './components/SettingDownloadFolder'
import SettingVersion from './components/SettingVersion'

export default {
  name: 'setting',
  data () {
    return {}
  },
  components: {
    SettingDownloadFolder,
    SettingVersion
  }
}
</script>
