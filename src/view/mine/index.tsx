import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Mine: FC<IPerson> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
