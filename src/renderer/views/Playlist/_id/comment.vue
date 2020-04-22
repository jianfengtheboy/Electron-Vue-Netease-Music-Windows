<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-22 22:28:13
 * @Description: 评论
 -->
<template>
  <div class="comment-wrapper">
    <div class="comment" v-if="commentData">
      <comment :commentData="commentData"></comment>
    </div>
    <infinite-loading
      forceUseInfiniteWrapper=".ant-layout-content"
      :identifier="infiniteId"
      @infinite="loadmore"
    />
  </div>
</template>

<script>
import Comment from '@/components/Comment/index.vue'
import { getPlaylistComment } from '@/api/comment'

export default {
  name: 'playlist-id-comment',
  data () {
    return {
      commentData: null,
      limit: 20,
      offset: 0,
      infiniteId: +new Date(),
      refresh: false
    }
  },
  activated () {
    this.offset = 0
    this.commentData = null
    this.infiniteId++
  },
  components: {
    Comment
  },
  methods: {
    async loadmore ($state) {
      let id = this.$route.params.id
      let res = await getPlaylistComment(id, this.limit, this.offset)
      if (res.comments.length) {
        if (this.commentData) {
          this.commentData.comments.push(...res.comments)
        } else {
          this.commentData = res
        }
      }
      if (res.more) {
        this.offset += this.limit
        $state.loaded()
      } else {
        $state.complete()
      }
    }
  }
}
</script>

<style scoped>
.comment {
  padding: 20px;
}
.comment-wrapper dt {
  padding-bottom: 15px;
}
.comment-wrapper dt {
  border-bottom: 1px solid #f3f5f9;
}
.comment-wrapper dd:not(:last-child) {
  border-bottom: 1px solid #f3f5f9;
}
.comment >>> .ant-comment-actions {
  float: right;
  margin: 0;
}
.comment a {
  color: #006fe3;
}
.comment >>> .ant-comment-inner {
  padding-bottom: 0;
}
</style>
