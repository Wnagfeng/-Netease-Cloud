import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingItemWrapper } from './style'
import { getImageSize } from '@/utils/handle-img-utl'
import { useAppDispatch } from '@/store'
import { fetchSongListDataAction } from '@/view/player/store/player'
interface IPerson {
  children?: ReactNode
  Data: any
}

const TopRankingItem: FC<IPerson> = (props) => {
  // 创建一个播放歌曲的逻辑
  const dispatch = useAppDispatch()
  function handlplayClick(id: number) {
    dispatch(fetchSongListDataAction(id))
    // console.log(id)
  }
  const { Data } = props
  return (
    <TopRankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(Data.coverImgUrl, 80)} alt="" />
          <a href="" className="image_cover"></a>
        </div>
        <div className="info">
          <a href="">{Data.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {Data.tracks.slice(0, 10).map((item: any, index: any) => {
          return (
            <div className="item-list" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  {/* 图标字体 */}
                  <button
                    className="btn sprite_02 play"
                    onClick={() => {
                      handlplayClick(item.id)
                      // alert(1)
                    }}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="/discover/ranking">查看全部 &gt;</a>
      </div>
    </TopRankingItemWrapper>
  )
}

export default memo(TopRankingItem)
