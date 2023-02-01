import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchRecommendDataAction } from './store/RecommendStore'
import { useAppDispatch } from '@/store'

import RecommendBanner from './c-pns/RecommendBanner'
interface IPerson {
  children?: ReactNode
}

const Recommend: FC<IPerson> = () => {
  /** 发送网络请求*/
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])

  return (
    <div>
      <RecommendBanner />
    </div>
  )
}

export default memo(Recommend)
