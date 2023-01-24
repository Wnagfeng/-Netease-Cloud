import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Home: FC<IPerson> = () => {
  return <div>Home</div>
}

export default memo(Home)
