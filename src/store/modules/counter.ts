import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'count',
  initialState: {
    count: 100,
    name: 'wangfeng',
    message: 'hello'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export default counterSlice.reducer
export const { changeMessageAction } = counterSlice.actions
