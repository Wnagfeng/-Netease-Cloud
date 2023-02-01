import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import headerTitles from '@/assets/data/Header-title.json'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'
interface IPerson {
  children?: ReactNode
}

const AppHeader: FC<IPerson> = () => {
  /*
  定义一个根据不同的类型展示不同的标签的函数
   */
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="Appheader-count ">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<UserOutlined />}
          />
          <div className="user-center">创作者中心</div>
          <div className="user-login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
