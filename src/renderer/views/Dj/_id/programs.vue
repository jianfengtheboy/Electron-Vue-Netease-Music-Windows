<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 22:07:47
 * @Description: 节目
 -->
<template>
  <div>
    <div class="title">共 {{ total }} 期</div>
    <track-list
      :columns="columns"
      :tracks="programs"
      :isShowHead="false"
      :isShowActions="false"
      @dblclick="play"
    >
      <template slot="name" slot-scope="{ row }">
        <div class="program">
          <img v-lazy="`${row.avatar}?param=160y160`" class="avatar" alt="" />
          <span>{{ row.name }}</span>
        </div>
      </template>
    </track-list>
    <div class="page">
      <a-pagination
        :defaultCurrent="1"
        :pageSize="limit"
        :total="total"
        @change="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import TrackList from '@/components/Common/track-list/index.js'
import { getDjProgram } from '@/api/dj'
import { normalSong } from '@/utils/song'

const columns = [
  {
    title: '音乐标题',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    slot: 'name'
  },
  {
    title: '歌手',
    dataIndex: 'artist',
    key: 'artist',
    sorter: (a, b) => a.artist[0].name.localeCompare(b.artist[0].name)
  },
  {
    title: '专辑',
    dataIndex: 'album',
    key: 'album',
    sorter: (a, b) => a.album.name.localeCompare(b.album.name)
  },
  {
    title: '时长',
    dataIndex: 'duration',
    key: 'duration',
    sorter: (a, b) => a.duration - b.duration
  }
]
export default {
  name: 'dj-id-programs',
  data () {
    return {
      programs: [],
      columns,
      total: 0,
      limit: 20,
      offset: 0,
      asc: false
    }
  },
  components: {
    TrackList
  },
  activated () {
    this._getDjProgram()
  },
  methods: {
    async _getDjProgram () {
      let id = this.$route.params.id
      let options = {
        rid: id,
        limit: this.limit,
        offset: this.offset,
        asc: this.asc
      }
      let { programs, count } = await getDjProgram(options)
      this.total = count
      let arr = []
      programs.forEach(program => {
        arr.push(normalSong(program.mainSong))
      })
      this.programs = arr
    },
    onPageChange (page, pageSize) {
      this.offset = (page - 1) * pageSize
      this._getDjProgram()
    },
    play (tracks, index) {
      this.$store.dispatch('play/selectPlay', { tracks, index })
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  margin: 20px 0;
  text-align: center;
}
.program {
  margin: 8px 0;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    margin-right: 6px;
  }
}
.title {
  line-height: 30px;
  background: #f5f5f5;
  font-size: 12px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
}
</style>
