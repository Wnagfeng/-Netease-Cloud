import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Demo02 from '@/view/demo/demo02'
// import hyRequest from '@/service'
interface IPerson {
  children?: ReactNode
}
// interface Root {
//   imageUrl: string
//   targetId: number
//   adid: any
//   targetType: number
//   titleColor: string
//   typeTitle: string
//   url: string
//   exclusive: boolean
//   monitorImpress: any
//   monitorClick: any
//   monitorType: any
//   monitorImpressList: any
//   monitorClickList: any
//   monitorBlackList: any
//   extMonitor: any
//   extMonitorInfo: any
//   adSource: any
//   adLocation: any
//   adDispatchJson: any
//   encodeId: string
//   program: any
//   event: any
//   video: any
//   song: any
//   scm: string
//   bannerBizType: string
// }

const Recommend: FC<IPerson> = () => {
  // const [banners, setbanners] = useState<Root[]>([])
  // useEffect(() => {
  //   hyRequest
  //     .get({
  //       url: '/banner'
  //     })
  //     .then((res) => {
  //       setbanners(res.banners)
  //     })
  // }, [])
  return (
    <div>
      {/* <Demo02 name="wamgfeng" />
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })} */}
      recommend
    </div>
  )
}

export default memo(Recommend)
