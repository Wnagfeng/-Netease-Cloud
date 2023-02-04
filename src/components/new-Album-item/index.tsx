import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/handle-img-utl'
interface IPerson {
  children?: ReactNode
  Data: any
}

const NewAlbumItem: FC<IPerson> = (props) => {
  const { Data } = props
  return (
    <NewAlbumItemWrapper>
      <div className="album-img">
        <img src={getImageSize(Data.picUrl, 120)} alt="" />
        <a className="cover sprite_cover">{Data.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{Data.name}</div>
        <div className="artist">{Data.artist.name}</div>
      </div>
    </NewAlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
