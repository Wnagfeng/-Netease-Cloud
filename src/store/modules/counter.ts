import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateType {
  name: string
  count: number
  message: string
}

const initialState: initialStateType = {
  count: 100,
  name: 'wangfeng',
  message: 'hello'
}
const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export default counterSlice.reducer
export const { changeMessageAction } = counterSlice.actions
