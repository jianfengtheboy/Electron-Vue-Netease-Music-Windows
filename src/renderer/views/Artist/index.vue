<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 22:02:20
 * @Description: 👩‍🎤歌手👨‍🎤
 -->
<template>
  <home-layout>
    <div class="page-artist">
      <tags useHoverHighlight :tags="cates" @change="onTagChange" />
      <tags :tags="names" @change="onNameChange" />

      <ul class="artists" v-if="artists.length">
        <router-link tag="li" to="/artist-top" class="artist">
          <figure class="figure">
            <div class="img-box">
              <img src="./../../assets/images/artist_rank.png" class="top-img" width="184" alt="" />
            </div>
            <figcaption class="figcaption">歌手排行榜</figcaption>
          </figure>
        </router-link>
        <artist-item class="artist" v-for="(artist, index) in artists" :artist="artist" :key="index" />
      </ul>
      <infinite-loading forceUseInfiniteWrapper=".ant-layout-content" @infinite="loadmore" />
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import artistItem from '@/components/Common/artist-item'
import tags from '@/components/Common/tags'
import { getArtistList } from '@/api/artist'

let INITIAL = ''
let cates = {
  男歌手: [
    {
      id: 1001,
      name: '华语男歌手'
    },
    {
      id: 2001,
      name: '欧美男歌手'
    },
    {
      id: 6001,
      name: '日本男歌手'
    },
    {
      id: 7001,
      name: '韩国男歌手'
    },
    {
      id: 4001,
      name: '其他男歌手'
    }
  ],
  女歌手: [
    {
      id: 1002,
      name: '华语女歌手'
    },
    {
      id: 2002,
      name: '欧美女歌手'
    },
    {
      id: 6002,
      name: '日本女歌手'
    },
    {
      id: 7002,
      name: '韩国女歌手'
    },
    {
      id: 4002,
      name: '其他女歌手'
    }
  ],
  '组合/乐队': [
    {
      id: 1003,
      name: '华语组合/乐队'
    },
    {
      id: 2003,
      name: '欧美组合/乐队'
    },
    {
      id: 6003,
      name: '日本组合/乐队'
    },
    {
      id: 7003,
      name: '韩国组合/乐队'
    },
    {
      id: 4003,
      name: '其他组合/乐队'
    }
  ],
  入驻歌手: [
    {
      id: 5001,
      name: '入驻歌手'
    }
  ]
}
let names = {
  名称: [
    {
      id: 'A',
      name: 'A'
    },
    {
      id: 'B',
      name: 'B'
    },
    {
      id: 'C',
      name: 'C'
    },
    {
      id: 'D',
      name: 'D'
    },
    {
      id: 'E',
      name: 'E'
    },
    {
      id: 'F',
      name: 'F'
    },
    {
      id: 'G',
      name: 'G'
    },
    {
      id: 'H',
      name: 'H'
    },
    {
      id: 'I',
      name: 'I'
    },
    {
      id: 'J',
      name: 'J'
    },
    {
      id: 'K',
      name: 'K'
    },
    {
      id: 'L',
      name: 'L'
    },
    {
      id: 'M',
      name: 'M'
    },
    {
      id: 'N',
      name: 'N'
    },
    {
      id: 'O',
      name: 'O'
    },
    {
      id: 'P',
      name: 'P'
    },
    {
      id: 'Q',
      name: 'Q'
    },
    {
      id: 'R',
      name: 'R'
    },
    {
      id: 'S',
      name: 'S'
    },
    {
      id: 'T',
      name: 'T'
    },
    {
      id: 'U',
      name: 'U'
    },
    {
      id: 'V',
      name: 'V'
    },
    {
      id: 'W',
      name: 'W'
    },
    {
      id: 'X',
      name: 'X'
    },
    {
      id: 'Y',
      name: 'Y'
    },
    {
      id: 'Z',
      name: 'Z'
    },
    {
      id: INITIAL,
      name: INITIAL
    }
  ]
}

export default {
  name: 'artist',
  data () {
    return {
      cates,
      names,
      artists: [],
      options: {
        limit: 11,
        offset: 0,
        cat: 1001,
        initial: INITIAL
      }
    }
  },
  components: {
    HomeLayout,
    tags,
    artistItem
  },
  methods: {
    async getArtists () {
      this.options.initial = encodeURIComponent(this.options.initial)
      try {
        let res = await getArtistList(this.options)
        this.artists = res.artists
      } catch ( e ) {
        console.log(e)
      }
    },
    async loadmore ($state) {
      let res = await getArtistList(this.options)
      if ( res.artists.length ) {
        this.options.offset += this.options.limit
        this.artists.push(...res.artists)
        $state.loaded()
      } else {
        $state.complete()
      }
    },
    onTagChange (tag) {
      this.options.offset = 0
      this.options.cat = tag.id
      this.getArtists()
    },
    onNameChange (tag) {
      this.options.offset = 0
      this.options.initial = tag.name
      this.getArtists()
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../../styles/mixins";

.page-artist {
  .artists {
    .grid-layout(15px, 15%);
    padding: 15px 0;
    a {
      display: block;
      color: #333;
    }
    .artist {
      .figure {
        overflow: hidden;
        cursor: pointer;
        .img-box {
          border-radius: 6px;
          overflow: hidden;
        }
        &:hover {
          .top-img {
            transform: scale(1.23);
          }
        }
        .top-img {
          display: block;
          width: 100%;
          height: 100%;
          transition: all 0.23s;
          transform-origin: center bottom;
        }
        .figcaption {
          line-height: 25px;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
