import { getBanner } from '../service/RecommendService'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface RecommendState {
  banners: any[]
}

export const fetchRecommendDataAction = createAsyncThunk(
  // name
  'featchdate',
  // 顶部的banner
  (payload, { dispatch }) => {
    getBanner().then((res: any) => {
      dispatch(changeBannerAction(res.banners))
    })
  }
)
const initialState: RecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommden',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export default recommendSlice.reducer
export const { changeBannerAction } = recommendSlice.actions
