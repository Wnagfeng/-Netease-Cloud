export function formatTime(time: number) {
  time = time / 1000
  // 1.获取时间
  const minute = Math.floor(time / 60) //4030 分
  const second = Math.floor(time) % 60 //40秒

  // 2添加一下0
  const formatMinute = String(minute).padStart(2, '0')
  // padStart 从开始的位置添加指定的字符串指导够位数比如添加0指导够两位--先把他转换成字符串
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
