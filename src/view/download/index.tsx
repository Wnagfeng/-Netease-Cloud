import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Download: FC<IPerson> = () => {
  return <div>Download</div>
}

export default memo(Download)
