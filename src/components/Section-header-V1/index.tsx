import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionHeaderv1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IPerson {
  children?: ReactNode
  title: string
  keyArray?: string[]
  morePath: string
}

const SectionHeaderV1: FC<IPerson> = (props) => {
  const { title, keyArray, morePath } = props
  return (
    <SectionHeaderv1Wrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        <div className="keyword">
          {keyArray?.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={morePath}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </SectionHeaderv1Wrapper>
  )
}

export default memo(SectionHeaderV1)
