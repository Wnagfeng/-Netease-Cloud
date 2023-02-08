import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  position: relative;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat; //让他叠加一下
  /* align-items: center; */
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
    /* height: 52px; */
    /* background-color: #bfa; */
    .btn {
    }
  }
`
interface IBarControl {
  isplaying: boolean
}
export const BarControlWrapper = styled.div<IBarControl>`
  //这里本身就是函数的调用我们给他传递一个泛型过去明确我们需要的参数
  display: flex;
  align-items: center;
  .prev,
  .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .prev {
    background-position: 0 -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    /* 这里我们根据播放的状态动态切换图标的样式 */
    /* background-position: 0 -165px; //-204px' */
    background-position: 0
      ${(props) => {
        return props.isplaying ? '-165px' : '-204px'
      }};
  }
  .next {
    background-position: -80px -130px;
  }
`

export const BarPlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;
  margin-left: 10px;
  img {
    border-radius: 5px;
  }
  .info {
    position: absolute;
    /* margin-top: -20px; */
    /* height: 10px; */
    /* margin-left: 10px; */
    color: #a1a1a1;
    display: flex;
    flex-direction: column;
    /* margin-top: -10px; */
    .song {
      left: 50px;
      position: relative;
      top: 5px;
      /* margin-top: 5px; */
      color: #e1e1e1;
      display: flex;
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    .state {
      position: relative;
      left: 50px;
      /* position: absolute; */
      top: -5px;
      display: flex;
      .ant-slider {
        width: 466px;
        height: 9px;
      }
      .ant-slider-rail {
        background: url(${require('@/assets/img/progress_bar.png')}) right 0;
      }
      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
        /* margin-top: -7px; */
        background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
      }
      .ant-slider-track {
        height: 9px;
        background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
      }
      .time {
        position: relative;
        top: 5px;
        left: 15px;
      }
    }
  }
`

export const BarOperator = styled.div`
  display: flex;
  align-items: center;
  .left {
    margin-top: 5px;
  }
  .btn {
    width: 25px;
    height: 25px;
  }
  .pip {
    margin-right: 5px;
    background: url(${require('@/assets/img/pip_icon')});
  }

  .favor {
    margin-right: 5px;
    background-position: -88px -163px;
  }

  .share {
    margin-right: 5px;
    background-position: -114px -163px;
  }
  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volume {
      margin-right: 5px;
      background-position: -2px -248px;
    }
    .loop {
      margin-right: 5px;
      margin-top: 5px;
      background-position: -6px -347px;
    }
    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
