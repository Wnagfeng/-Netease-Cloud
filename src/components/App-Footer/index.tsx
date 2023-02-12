import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppFooterWrapper } from './style'
// 引入footer的数据做一下展示效果
import { footerLinks } from '@/assets/data/local-data'
interface IPerson {
  children?: ReactNode
}

const AppFooter: FC<IPerson> = () => {
  return (
    <AppFooterWrapper>
      <div className="footerWrapper wrap-v2">
        {/* 上半部分 -ul ->li*/}
        <ul className="top">
          <li className="item">
            <a
              href="https://music.163.com/st/userbasic#/auth"
              className="foot_enter_new2 link"
            ></a>
            <span>用户认证</span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/recruit"
              className="foot_enter_new2 link"
            ></a>
            <span>网易云音乐人</span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/st/userbasic#/auth"
              className="foot_enter_new2 link"
            ></a>
            <span>赞赏</span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/uservideo#/plan"
              className="foot_enter_new2 link"
            ></a>
            <span>创作者计划</span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/st/userbasic#/auth"
              className="foot_enter_new2 link"
            ></a>
            <span>用户认证</span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/st/userbasic#/auth"
              className="foot_enter_new2 link"
            ></a>
            <span>用户认证</span>
          </li>
        </ul>
        <div className="middleWrpper wrap-v2">
          <div className="middleitem">
            {footerLinks.map((item) => {
              return (
                <div key={item.link} className="middle">
                  <div className="title">{item.title}</div>
                  <span className="icon">|</span>
                </div>
              )
            })}
          </div>
          <div className="middle-thesecond">
            <div className="middle-thesecond-v1">
              <span className="text1">廉正举报 </span>
              <span className="text2">
                不良信息举报邮箱: 51jubao@service.netease.com{' '}
              </span>
              <span className="text3">客服热线：95163298</span>
            </div>
          </div>
          <div className="Third">
            <span>
              互联网宗教信息服务许可证：浙（2022）0000120
              增值电信业务经营许可证：
            </span>
            <a href="">
              浙B2-20150198 粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
          </div>
          <div className="Fourth">
            <span className="text1">网易公司版权所有©1997-2023</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="" className="text2">
              浙网文[2021] 1186-054号
            </a>
            <a href="">浙公网安备 33010902002564号</a>
          </div>
        </div>
      </div>
    </AppFooterWrapper>
  )
}

export default memo(AppFooter)
