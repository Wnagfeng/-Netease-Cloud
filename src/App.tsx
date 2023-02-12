import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useEffect } from 'react'
// import { shallowEqual } from 'react-redux'
import { useAppDispatch } from './store/index'
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeader from './components/App-Header'
import AppFooter from './components/App-Footer'
import Player from './view/player/app-player-bar/index'
import { fetchSongListDataAction } from './view/player/store/player'

// import { changeMessageAction } from './store/modules/counter'
interface IPerson {
  children?: ReactNode
}
const App: FC<IPerson> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongListDataAction(1842025914))
  }, [])
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
