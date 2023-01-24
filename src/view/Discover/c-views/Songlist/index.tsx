import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Songlist: FC<IPerson> = () => {
  return <div>Songlist</div>
}

export default memo(Songlist)
