import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import counterstore from './modules/counter'
const store = configureStore({
  reducer: {
    counter: counterstore
  }
})
/*
我们需要对useSelector进行一次类型封装
 */

type GetstateFunType = typeof store.getState //我们可以发现他的返回值类型就是我们需要的类型
type IRootState = ReturnType<GetstateFunType> //这样我们就获取到了他的返回值类型
type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
