import hyRequest from '@/service'

export function getBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}
export function getHotRecommend() {
  return hyRequest.get({
    url: '/personalized'
  })
}
export function getNewAlbum() {
  return hyRequest.get({
    url: '/album/newest'
  })
}

// 获取一下排行榜的数据这里的数据我们采用三个数据放一起的形式进行展示每个数据通过传递过去id进行获取
export function getPlayListDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id: id
    }
  })
}
