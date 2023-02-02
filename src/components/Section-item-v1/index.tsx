import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionItemV1Wrapper } from './style'
import { getImageSize } from '@/utils/handle-img-utl'
import { formatCount } from '@/utils/handel-formatcount'
interface IPerson {
  children?: ReactNode
  itemDate: any
}

const SectionItemV1: FC<IPerson> = (props) => {
  const { itemDate } = props
  return (
    <SectionItemV1Wrapper>
      {/*一个小的展示图分为上下两个部分还有蒙版和耳机icon播放量展示图 */}
      {/* 蒙版相对于上半部分进行定位做样式 */}
      <div className="cover-top">
        <img src={getImageSize(itemDate.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              {/* 耳机图标 */}
              <i className="sprite_icon headset"></i>
              {/* 播放量 */}
              {formatCount(itemDate.playCount)}
            </span>
            {/* 播放图标 */}
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>

      <div className="cover-bottom text-nowrap">{itemDate.name}</div>
    </SectionItemV1Wrapper>
  )
}

export default memo(SectionItemV1)
