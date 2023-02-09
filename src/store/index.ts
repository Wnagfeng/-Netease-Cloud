import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import counterstore from './modules/counter'
import recommendSlice from '../view/Discover/c-views/Recommend/store/RecommendStore'
import playerSlice from '../view/player/store/player'
const store = configureStore({
  reducer: {
    counter: counterstore,
    recommend: recommendSlice,
    player: playerSlice
  }
})
/*
我们需要对useSelector进行一次类型封装
 */
type GetstateFunType = typeof store.getState //我们可以发现他的返回值类型就是我们需要的类型
export type IRootState = ReturnType<GetstateFunType> //这样我们就获取到了他的返回值类型
type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
