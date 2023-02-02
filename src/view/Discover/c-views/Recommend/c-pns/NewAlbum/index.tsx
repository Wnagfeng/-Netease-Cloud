import React, { memo, useRef, ElementRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'
import SectionHeaderV1 from '@/components/Section-header-V1'
interface IPerson {
  children?: ReactNode
}

const NewAlbum: FC<IPerson> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /** 事件处理函数 */
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <SectionHeaderV1 title="新碟上架" morePath="/discover/album" />
      <div className="count">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>

        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return <div key={item}>{item}</div>
            })}
          </Carousel>
        </div>

        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
