import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Recommend: FC<IPerson> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
