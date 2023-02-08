import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapper } from './style'
import SectionHeaderV2 from '@/components/SectionHeaderV2'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/handle-img-utl'
interface IPerson {
  children?: ReactNode
}

const SettleSinger: FC<IPerson> = () => {
  const { settleSingers } = useAppSelector((state) => {
    return {
      settleSingers: state.recommend.SettleSingers
    }
  })
  console.log(1111, settleSingers)
  return (
    <SettleSingerWrapper>
      <SectionHeaderV2 title="入驻歌手" morePath="/discover/artist" />
      <div className="singer-list">
        {settleSingers.map((item) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                {/* item.alias这个数组下保存的是一些明星的数据我们用join进行一些拼接然后返回过来 */}
                {/* join:根据传入的字符串分割数组 */}
                <div className="desc">{item.alias.join('')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
