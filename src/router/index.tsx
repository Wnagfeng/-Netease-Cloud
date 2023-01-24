import { RouteObject, Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

// import Discover from '@/view/Discover'
// import Mine from '@/view/mine'
// import Download from '@/view/download'
// import Focus from '@/view/focus'
const Discover = lazy(() => import('@/view/Discover'))
const Mine = lazy(() => import('@/view/mine'))
const Download = lazy(() => import('@/view/download'))
const Focus = lazy(() => import('@/view/focus'))
const Recommend = lazy(() => import('@/view/Discover/c-views/Recommend'))
const Ranking = lazy(() => import('@/view/Discover/c-views/Ranking'))
const Songlist = lazy(() => import('@/view/Discover/c-views/Songlist'))
const Djradio = lazy(() => import('@/view/Discover/c-views/Djradio'))
const Artist = lazy(() => import('@/view/Discover/c-views/Album'))
const Album = lazy(() => import('@/view/Discover/c-views/Artist'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/songlist',
        element: <Songlist />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/my',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes
