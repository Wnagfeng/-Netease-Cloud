import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import {
  RecommendBannerWrapper,
  RecommendBannerLeftWrapper,
  RecommendBannerRightWrapper,
  RecommendBannerControlWrapper
} from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { isEmptyObject } from '@/utils/is-empty-object'
interface IPerson {
  children?: ReactNode
}

const RecommendBanner: FC<IPerson> = () => {
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  // 定义保存组件的容器
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /** redux中获取数据 */
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners
    }
  }, shallowEqual)

  // 处理按钮点击的逻辑
  function handlClick(state: boolean) {
    if (state) {
      bannerRef.current?.next()
    } else {
      bannerRef.current?.prev()
    }
  }
  // 处理获取背景的逻辑
  function backgroundHandlClick(num: number) {
    setCurrentIndex(num)
    console.log(currentIndex)
  }
  // 处理btos的展示延迟函数
  // 直接你妈一个判断解决问题
  function backgroundBeforHandlClick() {
    if (currentIndex !== 0) {
      setCurrentIndex(-1)
    }
  }
  // 获取一下背景
  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    // 我们只需要在路径的后面拼接上指定的参数服务器就能返回指定的东西
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }
  return (
    <RecommendBannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner  wrap-v2">
        {/* 在banner中有两个组件一个是轮播图一个是下载客户端的图片他们两个同时居中 */}
        {/* 左边轮播图右边图片 */}
        <RecommendBannerLeftWrapper>
          {isEmptyObject(banners) && (
            <Carousel
              autoplay
              ref={bannerRef}
              effect="fade"
              afterChange={backgroundHandlClick}
              beforeChange={backgroundBeforHandlClick}
              dots={false}
            >
              {banners?.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      src={item.imageUrl}
                      alt={item.typeTitle}
                      className="image"
                    />
                  </div>
                )
              })}
            </Carousel>
          )}
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </RecommendBannerLeftWrapper>
        <RecommendBannerRightWrapper></RecommendBannerRightWrapper>
        <RecommendBannerControlWrapper>
          <button
            className="btn left"
            onClick={() => {
              handlClick(false)
            }}
          ></button>
          <button
            className="btn right"
            onClick={() => {
              handlClick(true)
            }}
          ></button>
        </RecommendBannerControlWrapper>
      </div>
    </RecommendBannerWrapper>
  )
}

export default memo(RecommendBanner)
