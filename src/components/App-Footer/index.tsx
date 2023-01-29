import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const AppFooter: FC<IPerson> = () => {
  return <div>AppFooter</div>
}

export default memo(AppFooter)
