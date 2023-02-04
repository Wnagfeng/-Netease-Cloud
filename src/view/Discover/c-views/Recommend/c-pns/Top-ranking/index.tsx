import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import SectionHeaderV1 from '@/components/Section-header-V1'
import { useAppSelector } from '@/store'
import TopRankingItem from '@/components/top-ranking-item'
interface IPerson {
  children?: ReactNode
}

const TopRanking: FC<IPerson> = () => {
  const { Rankings } = useAppSelector((state) => {
    return {
      Rankings: state.recommend.Ranking
    }
  })
  return (
    <TopRankingWrapper>
      <SectionHeaderV1 title="榜单" morePath="/discover/ranking" />
      <div className="rankings">
        {Rankings.map((item) => {
          return <TopRankingItem Data={item} key={item.id} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
