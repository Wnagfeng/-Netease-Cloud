import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongList, getSongLyric } from '../service'
import { parseLyric, ILyricInfo } from '@/utils/handel-lyrics'
import { IRootState } from '@/store/index'

// 获取歌曲的请求我们不能随便发出去我们需要判断一下当前获取的歌曲是否在paySongList中
/*
createAsyncThunk能接受三个泛型第一个是返回值类型第二个是arg类型第三个是state类型
注意这里的state我们之前进行过封装我们用rootState
因为你如果不给他一个明确的类型他会给你报 state对象的类型为 "unknown"
 */
export const fetchSongListDataAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>('currentSong', (id: number, { dispatch, getState }) => {
  // 获取歌词信息
  getSongLyric(id).then((res) => {
    const lyricString = res.lrc.lyric
    dispatch(changelyricsAction(parseLyric(lyricString)))
  })

  // 判断一下当前获取的歌曲是否在songList中
  const PaySongList = getState().player.paySongList //拿到目前列表中的所有歌曲信息
  const findIndex = PaySongList.findIndex((song) => song.id === id)
  // 如果有那么我们就不添加了如果没有再添加
  if (findIndex !== -1) {
    // 找到了---把你找到的歌曲传递过去
    const currentSong = PaySongList[findIndex]
    dispatch(changecurrentSongAction(currentSong))
    dispatch(changepaySongListAction(findIndex))
  } else {
    // 那么如果没有我们就要发请求拿数据了
    // 获取歌曲信息
    getSongList(id).then((res) => {
      if (!res.songs.length) return
      const currentSong = res.songs[0]
      // 2.保存到列表中
      const newPlaySongList = [...PaySongList] //先把之前的歌曲列表进行解构赋值一下
      newPlaySongList.push(currentSong) //再添加一下行拿到的歌曲
      dispatch(changepaySongListAction(newPlaySongList)) //改变一下歌曲列表
      dispatch(changecurrentSongAction(currentSong)) //改变一下当前播放的歌曲
      dispatch(changepaySongIndexAction(newPlaySongList.length - 1)) //把他加到最后
    })
  }
})

export const changePlaySongAction = createAsyncThunk<
  void,
  boolean,
  { state: IRootState }
>('changeSong', (isNext, { dispatch, getState }) => {
  // 获取播放的模式
  const playMode = getState().player.payMode
  // 获取当前播放的歌曲的缩影
  const currentIndex = getState().player.paySongIndex
  // 获取一下当前的播放列表
  const songList = getState().player.paySongList

  // 逻辑判断一下
  // 获取一下总歌曲长度用于随机播放
  const length = songList.length
  // 创建一个新得index用来保存我们生产的随机index或者顺序index
  let Newindex = currentIndex
  if (playMode === 1) {
    Newindex = Math.floor(Math.random() * length)
  } else {
    if (isNext) Newindex += 1
    else Newindex -= 1
    // 边界值的判断与初始化
    if (Newindex > length - 1) Newindex = 0
    if (Newindex < 0) Newindex = length - 1
  }
  // 获取当前歌曲
  const currentSong = songList[Newindex]
  dispatch(changecurrentSongAction(currentSong))
  dispatch(changepaySongIndexAction(Newindex)) //那么如果你不更新最新的index你的按钮只能切换一次
  // 在这里我们需要重新请求一下歌词
  getSongLyric(currentSong.id).then((res) => {
    const lyriString = res.lrc.lyric
    const lyrics = parseLyric(lyriString)
    dispatch(changelyricsAction(lyrics))
  })
})
interface IPlayState {
  currentSong: any
  lyrics: ILyricInfo[]
  lyricIndex: number
  paySongList: any[]
  paySongIndex: number
  payMode: number
}
const initialState: IPlayState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  paySongList: [
    {
      name: '有何不可',
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007916021',
      fee: 8,
      v: 49,
      crbt: null,
      cf: '',
      al: {
        id: 16953,
        name: '自定义',
        picUrl:
          'https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
        tns: [],
        pic_str: '18590542604286213',
        pic: 18590542604286212
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900
      },
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1231516800000
    },
    {
      name: '雅俗共赏',
      id: 411214279,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 31,
      crbt: null,
      cf: '',
      al: {
        id: 34749138,
        name: '青年晚报',
        picUrl:
          'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
        tns: [],
        pic: 3431575794705764
      },
      dt: 249621,
      h: {
        br: 320000,
        fid: 0,
        size: 9987177,
        vd: -22200
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5992323,
        vd: -19600
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3994896,
        vd: -17800
      },
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5302271,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1461723397683
    }
  ],
  paySongIndex: 0,
  payMode: 0 // 0顺序播放 1随机播放 2单独循环
}
const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    changecurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changelyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changelyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changepaySongListAction(state, { payload }) {
      state.paySongList = payload
    },
    changepaySongIndexAction(state, { payload }) {
      state.paySongIndex = payload
    },
    changepayModeAction(state, { payload }) {
      state.payMode = payload
    }
  }
})
export const {
  changecurrentSongAction,
  changelyricsAction,
  changelyricIndexAction,
  changepaySongListAction,
  changepaySongIndexAction,
  changepayModeAction
} = playerSlice.actions
export default playerSlice.reducer
