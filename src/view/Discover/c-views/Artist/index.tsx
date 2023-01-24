import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Artist: FC<IPerson> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
