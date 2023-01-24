import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const Djradio: FC<IPerson> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio)
