import React, { memo, useRef, ElementRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'
import SectionHeaderV1 from '@/components/Section-header-V1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-Album-item'
import { isEmptyObject } from '@/utils/is-empty-object'
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
  const { NewAlbum } = useAppSelector((state) => {
    return {
      NewAlbum: state.recommend.newAlbums
    }
  })
  return (
    <AlbumWrapper>
      <SectionHeaderV1 title="新碟上架" morePath="/discover/album" />
      <div className="count">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>

        {isEmptyObject(NewAlbum) && (
          <div className="banner">
            <Carousel ref={bannerRef} dots={false} speed={1500}>
              {[0, 1].map((item) => {
                return (
                  <div className="page" key={item}>
                    {/* 这里的sclic我们使用一个小小的算法进行裁切保证每页有五条数据 */}
                    {NewAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                      return <NewAlbumItem key={item.id} Data={item} />
                    })}
                  </div>
                )
              })}
            </Carousel>
          </div>
        )}

        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
