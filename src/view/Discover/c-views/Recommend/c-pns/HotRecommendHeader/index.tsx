import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendHeaderWrapper } from './style'
import SectionHeaderV1 from '@/components/Section-header-V1'
import { useAppSelector } from '@/store'
import SectionItemV1 from '@/components/Section-item-v1'
interface IPerson {
  children?: ReactNode
}

const HotRecommednHeader: FC<IPerson> = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  const { hotrecommedn } = useAppSelector((state) => {
    return {
      hotrecommedn: state.recommend.hotrecommend
    }
  })
  const { NewAlbums } = useAppSelector((state) => {
    return {
      NewAlbums: state.recommend.newAlbums
    }
  })
  return (
    <HotRecommendHeaderWrapper>
      <SectionHeaderV1
        title="热门推荐"
        keyArray={keywords}
        morePath="/discover/songlist"
      />
      <div className="recommedn-list">
        {hotrecommedn.slice(0, 8).map((item) => {
          return <SectionItemV1 key={item.id} itemDate={item} />
        })}
      </div>
    </HotRecommendHeaderWrapper>
  )
}

export default memo(HotRecommednHeader)
