import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Ranking: FC<IPerson> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
