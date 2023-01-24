import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Focus: FC<IPerson> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
