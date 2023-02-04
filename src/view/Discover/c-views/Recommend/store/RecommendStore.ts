import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail
} from '../service/RecommendService'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRecommendDataAction = createAsyncThunk(
  // name
  'featchdate',
  // 顶部的banner数据
  (payload, { dispatch }) => {
    getBanner().then((res: any) => {
      dispatch(changeBannerAction(res.banners))
    })

    // 热门推荐数据
    getHotRecommend().then((res: any) => {
      dispatch(changeHotRecommedAction(res.result))
    })

    // 新碟上架数据
    getNewAlbum().then((res: any) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
)

// 获取对应数据的id---重新创建一个发请求的方法来获取数据
/*
思路解析：
我们这里希望三个排行榜当做一个整体来展示
但是数据回来的时间不一致所以这里我们使用promise去创建一个数组
然后我们使用all方法来等待数据全部回来在进行添加
 */
const Rankingid = [19723756, 3779629, 2884035] //三个排行榜需要的id数据
export const fetchRankingDataAction = createAsyncThunk(
  'Ranking',
  (payload, { dispatch }) => {
    // 这里的promise需要传入一个泛型
    const promise: Promise<any>[] = [] //这里我们创建一个Promise类型的数组
    //  遍历一下他的id根据拿到的每一个不同的id去获取不同的数据
    for (const id of Rankingid) {
      promise.push(getPlayListDetail(id))
    }
    // 它可以帮助我们一次，并行处理多个promise, 然后将结果聚合到一个数组里边，这是聚合结果，不是说返回结果哦
    Promise.all(promise).then((res) => {
      const rankings = res.map((item) => item.playlist)
      dispatch(changeRankingListAction(rankings))
    })
  }
)
interface RecommendState {
  banners: any[]
  hotrecommend: any[]
  newAlbums: any[]
  Ranking: any[]
}

const initialState: RecommendState = {
  banners: [],
  hotrecommend: [],
  newAlbums: [],
  Ranking: []
}
const recommendSlice = createSlice({
  name: 'recommden',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommedAction(state, { payload }) {
      state.hotrecommend = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingListAction(state, { payload }) {
      state.Ranking = payload
    }
  }
})

export default recommendSlice.reducer
export const {
  changeBannerAction,
  changeHotRecommedAction,
  changeNewAlbumsAction,
  changeRankingListAction
} = recommendSlice.actions
