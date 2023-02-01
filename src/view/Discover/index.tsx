import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-pns/nav-bar'

interface IPerson {
  children?: ReactNode
}

const Discover: FC<IPerson> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="loading">
        <Outlet />
        {/* 嵌套路由，可以保证子路由共享父路由的界面而不会覆盖。
        为此React提供了Outlet组件，将其用于父组件中可以为子路由的元素占位，
        并最终渲染子路由的元素。
          Outlet渲染一个子路由的元素 */}
      </Suspense>
    </div>
  )
}

export default memo(Discover)
