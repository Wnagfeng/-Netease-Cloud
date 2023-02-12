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
import { Slider, message } from 'antd'
import { useAppSelector } from '@/store/index'
import { shallowEqual } from 'react-redux'
import { formatTime } from '@/utils/handel-play-time'
import {
  changelyricIndexAction,
  changepayModeAction,
  changePlaySongAction
} from '../store/player'

import { useAppDispatch } from '@/store/index'
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
  // 当前已经播放了的时间
  const [currentTime, setCurrentTime] = useState(0)
  /* 创建一个进度条更新的状态 */
  const [progress, setProgress] = useState(0)
  /* 创建一个是否在拖拽进度条的状态 */
  const [ischangeing, setischangeing] = useState(false)
  const { currentSong, Lyrics, lyricIndex, payMode } = useAppSelector(
    (state) => {
      return {
        currentSong: state.player.currentSong,
        // 获取歌词
        Lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        payMode: state.player.payMode
      }
    },
    shallowEqual
  )
  // 创建一个dispatch
  const dispatch = useAppDispatch()

  // 在保证组件全部挂载完毕以后我们给audio添加一个播放的src属性使用hook副作用
  useEffect(() => {
    // 如果audioref不在我们就返回空的东西如果在我们在执行播放逻辑
    if (!audioRef.current) return
    audioRef.current.src = getPlayerUrl(currentSong?.id) //根据id拼接请求src获取播放数据
    // 监听一下播放是否成功
    audioRef.current
      .play()
      .then(() => {
        setIsplaying(true)
      })
      .catch(() => {
        setIsplaying(false)
      })
    // 设置一下总时间
    setDuration(currentSong.dt)
  }, [currentSong])
  // 改变播放状态的函数
  function handlplayClick() {
    // 当点击播放时我们去audio上取一下当前是否在播放
    const isPaused = audioRef.current!.paused
    isPaused
      ? audioRef.current?.play().catch(() => {
          setIsplaying(false)
        })
      : audioRef.current?.pause()
    setIsplaying(!isplaying) //一旦点击说明需要进行取反要么播放要么暂停
  }
  //创建一个处理已经播放时间和进度条进度的函数
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime
    setCurrentTime(currentTime * 1000) //让他变成毫秒传递过去 -当前播放的进度更新一下
    if (!ischangeing) {
      const progress = ((currentTime * 1000) / duration) * 100
      setProgress(progress) //设置进度条时间
    }
    // 根据当前已经播放的时间来匹配歌词
    // 我们这里主要是找大于当前时间的index-1来获取对应的歌词
    // 那么最后一句歌词已经没有比他还大 的了所以我们让初始index等于最后一句歌词的index直接进行匹配
    if (!Lyrics.length) return
    let index = Lyrics.length - 1
    for (let i = 0; i < Lyrics.length; i++) {
      const lyric = Lyrics[i] //每一句歌词
      if (lyric.time >= currentTime * 1000) {
        //找到第一个大于这个时间的歌词
        // 第一个大于他的歌词位置毕竟是大于的我们可以找到他的index去减一这样我们就能获取到我们真正需要的歌词了
        index = i - 1
        break
      }
    }
    // 如果当前的index等于我们设置过去的index我们不要让他匹配了
    if (lyricIndex === index || index === -1) return
    dispatch(changelyricIndexAction(index))
    const currentLyric = Lyrics[index]
    message.open({
      content: currentLyric.content,
      duration: 0,
      key: 'lyric',
      style: {
        bottom: '60px'
      }
    })
  }

  //创建一个处理进度条的函数
  function handleSliderChanging(value: number) {
    // 在我们更改进度条的时候我们需要让音乐暂时暂停播放
    setischangeing(true)
    setProgress(value)
    //把我们当前拖动的时间设置过去-这样的话我们就能在拖拽的时候同步的改变当前播放的时间
    const currentTime = (value / 100) * duration //这里是毫秒就行
    setCurrentTime(currentTime)
    // console.log(value)
  }
  // 创建一个拖动完成以后处理歌曲的函数
  function handleSliderAfterChange(value: number) {
    //计算一下当前拖动的进度位置切换歌曲的播放进度
    const currentSongTime = ((value / 100) * duration) / 1000
    // 切换一个当前歌曲播放的进度
    audioRef.current!.currentTime = currentSongTime
    setCurrentTime(currentSongTime)
    // setCurrentTime(currentTime)
    // 在拖拽完成以后我们把状态再改回去
    setischangeing(false)
  }
  // 创建一个处理切换模式的函数
  function handlLoopClick() {
    let newPaymode = payMode + 1
    if (newPaymode === 3) newPaymode = 0
    dispatch(changepayModeAction(newPaymode))
  }
  // 创建一个切换歌曲的函数
  function handleChangeBtnClick(isNext = true) {
    // 由于这里的逻辑波及数据的操作比较多所以我们把具体的逻辑放到store下处理
    dispatch(changePlaySongAction(isNext))
  }
  // 创建一个处理播放时间结束的函数
  function handlePlayEnded() {
    if (payMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else {
      handleChangeBtnClick(true)
    }
  }
  return (
    <PlayerWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {/* 左边控制bar */}
        <BarControlWrapper isplaying={isplaying}>
          {/* 这里是三个播放的控制按钮 */}
          {/* 我们需要根据当前的播放状态来确定图标的样式 我们把状态传递过去 */}
          <button
            className="btn sprite_playbar prev"
            onClick={() => {
              handleChangeBtnClick(false)
            }}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlplayClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => {
              handleChangeBtnClick(true)
            }}
          ></button>
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
              <div className="song-name">{currentSong.ar?.[0]?.name}</div>
              <div className="singer-name">{currentSong.name}</div>
            </div>

            <div className="state">
              <Slider
                step={0.5}
                value={progress}
                onChange={handleSliderChanging}
                onAfterChange={handleSliderAfterChange} //当鼠标拖动完成以后我们调用该函数并改变歌曲进度
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator payMode={payMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handlLoopClick}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handlePlayEnded}
      />
    </PlayerWrapper>
  )
}

export default memo(Player)
