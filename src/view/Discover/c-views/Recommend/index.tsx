import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchRecommendDataAction } from './store/RecommendStore'
import { useAppDispatch } from '@/store'
import {
  RecommendBannerSectionWrapper,
  RecommendBannerWrapper,
  RecommendBannerLeftWrapper,
  RecommendBannerRightWrapper
} from './style'
import RecommendBanner from './c-pns/RecommendBanner'
import HotRecommednHeade from './c-pns/HotRecommendHeader/index'
import NewAlbum from './c-pns/NewAlbum/index'
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
    <RecommendBannerWrapper>
      {/* 轮播图组件 */}
      <RecommendBanner />
      <RecommendBannerSectionWrapper className="wrap-v2">
        <RecommendBannerLeftWrapper>
          <HotRecommednHeade />
          <NewAlbum />
        </RecommendBannerLeftWrapper>
        <RecommendBannerRightWrapper>Right</RecommendBannerRightWrapper>
      </RecommendBannerSectionWrapper>
    </RecommendBannerWrapper>
  )
}

export default memo(Recommend)
