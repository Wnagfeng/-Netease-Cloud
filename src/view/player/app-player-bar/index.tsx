import React, { memo, useState, useRef, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { getPlayerUrl } from '@/utils/handel-palyurl'
import {
  BarControlWrapper,
  PlayerWrapper,
  BarPlayInfo,
  BarOperator
} from './stylet'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { useAppSelector } from '@/store/index'
import { shallowEqual } from 'react-redux'
interface IPerson {
  children?: ReactNode
}

const Player: FC<IPerson> = () => {
  /* 创建一个内部状态用来保存当前是否在播放 */
  const [isplaying, setIsplaying] = useState(false) //默认不在播放
  /* 创建一个播放器的ref */
  const audioRef = useRef<HTMLAudioElement>(null)
  /* 创建一个总共的时间 */
  const [duration, setDuration] = useState(0)

  const [currentTime, setCurrentTime] = useState(0)
  /* 创建一个保存已经播放时间的状态 */
  const [progress, setProgress] = useState(0)
  const { currentSong } = useAppSelector((state) => {
    return {
      currentSong: state.player.currentSong
    }
  }, shallowEqual)

  // 在保证组件全部挂载完毕以后我们给audio添加一个播放的src属性使用hook副作用
  useEffect(() => {
    // 如果audioref不在我们就返回空的东西如果在我们在执行播放逻辑
    if (!audioRef.current) return
    audioRef.current.src = getPlayerUrl(currentSong.id) //根据id拼接请求src获取播放数据
    // 监听一下播放是否成功
    audioRef.current
      .play()
      .then(() => {
        console.log('播放成功了')
        setIsplaying(true)
      })
      .catch(() => {
        console.log('播放失败')
        setIsplaying(false)
      })
    // 设置一下总时间
    setDuration(currentSong.dt)
  }, [currentSong])
  // 改变播放状态的函数
  function handlplayClick() {
    // 当点击播放时我们去audio上取一下当前是否在播放
    const isPaused = audioRef.current!.paused
    console.log(isPaused)
    isPaused
      ? audioRef.current?.play().catch(() => {
          setIsplaying(false)
        })
      : audioRef.current?.pause()
    setIsplaying(!isplaying) //一旦点击说明需要进行取反要么播放要么暂停
  }
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime
    const progress = ((currentTime * 1000) / duration) * 100
    setProgress(progress)
  }
  return (
    <PlayerWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {/* 左边控制bar */}
        <BarControlWrapper isplaying={isplaying}>
          {/* 这里是三个播放的控制按钮 */}
          {/* 我们需要根据当前的播放状态来确定图标的样式 我们把状态传递过去 */}
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlplayClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControlWrapper>
        <BarPlayInfo>
          {/* 中间状态栏 */}
          <Link to="/discover/player">
            <img
              src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div> {''}</div>
            <div className="song">
              <div className="song-name">{currentSong.ar[0].name}</div>
              <div className="singer-name">{currentSong.name}</div>
            </div>

            <div className="state">
              <Slider step={0.5} value={progress} />
              <div className="time">
                <span className="current">{'00:00'}</span>
                <span className="divider">/</span>
                <span className="duration">{'04:53'}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        // onEnded={handlePlayEnded}
      />
    </PlayerWrapper>
  )
}

export default memo(Player)
