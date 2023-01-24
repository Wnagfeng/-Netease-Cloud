import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqual, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from './store/index'
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { changeMessageAction } from './store/modules/counter'
interface IPerson {
  children?: ReactNode
}

const App: FC<IPerson> = () => {
  const state = useAppSelector(
    (state) => ({
      count: state.counter.count,
      name: state.counter.name,
      message: state.counter.message
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  function handlbuttonClick() {
    dispatch(changeMessageAction('哈哈哈哈哈哈哈哈'))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <div>App</div>
      <h1>当前计数为:{state.count}</h1>
      <h1>当前name为:{state.name}</h1>
      <h1>当前message为:{state.message}</h1>
      <button onClick={handlbuttonClick}>修改文本</button>
      <Suspense fallback="loading">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
