import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionHeaderV2Wrapper } from './style'
interface IPerson {
  children?: ReactNode
  title: string
  morePath: string
  more?: string
}

const SectionHeaderV2: FC<IPerson> = (props) => {
  const { title, morePath, more = '查看全部' } = props
  return (
    <SectionHeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      <a href={morePath}>{more} &gt;</a>
    </SectionHeaderV2Wrapper>
  )
}

export default memo(SectionHeaderV2)
