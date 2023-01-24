import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

/*
我们在给一个组件类型的时候最好吧类型给到组件整体
 */
const Demo: React.FC<IPerson> = (props) => {
  return (
    <div>
      <div>{props.age}</div>
      <div>{props.name}</div>
      <div>{props.height}</div>
      <div>{props.children}</div>
    </div>
  )
}

// 我们为什么要吧类型给到整个函数组件其目的就是为了在这里能有更好的提示
Demo.defaultProps = {
  name: 'wangfeng',
  age: 19,
  height: 1.6
}

// 我们最好使用memo去包裹一下我们的函数组件
export default memo(Demo)
