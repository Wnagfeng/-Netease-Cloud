import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Album: FC<IPerson> = () => {
  return <div>Album</div>
}

export default memo(Album)
