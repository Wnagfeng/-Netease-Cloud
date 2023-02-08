import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapper } from './style'
import SectionHeaderV2 from '@/components/SectionHeaderV2'
import { hotRadios } from '@/assets/data/local-data'

interface IPerson {
  children?: ReactNode
}

const HotAnchor: FC<IPerson> = () => {
  return (
    <HotAnchorWrapper>
      <SectionHeaderV2 title="热门主播" morePath="/discover/djradio" />
      <div className="anchor-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/discover/djradio" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="anchor-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/discover/djradio" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="anchor-list">
        {hotRadios.slice(0, 4).map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/discover/djradio" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
