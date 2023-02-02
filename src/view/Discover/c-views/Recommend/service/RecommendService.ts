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
