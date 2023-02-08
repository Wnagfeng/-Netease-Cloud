import { useRoutes } from 'react-router-dom'
import routes from './router'
// import { shallowEqual } from 'react-redux'
// import { useAppSelector, useAppDispatch } from './store/index'
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeader from './components/App-Header'
import AppFooter from './components/App-Footer'
import Player from './view/player/app-player-bar/index'
// import { changeMessageAction } from './store/modules/counter'
interface IPerson {
  children?: ReactNode
}
const App: FC<IPerson> = () => {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <Player />
      <AppFooter />
    </div>
  )
}

export default memo(App)
