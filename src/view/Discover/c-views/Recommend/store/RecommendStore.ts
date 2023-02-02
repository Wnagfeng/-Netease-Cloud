import {
  getBanner,
  getHotRecommend,
  getNewAlbum
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
      console.log(res)

      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
)
interface RecommendState {
  banners: any[]
  hotrecommend: any[]
  newAlbums: any[]
}

const initialState: RecommendState = {
  banners: [],
  hotrecommend: [],
  newAlbums: []
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
    }
  }
})

export default recommendSlice.reducer
export const {
  changeBannerAction,
  changeHotRecommedAction,
  changeNewAlbumsAction
} = recommendSlice.actions
