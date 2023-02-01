import styled from 'styled-components'
export const RecommendBannerWrapper = styled.div`
  .banner {
    display: flex;
    height: 270px;
    background-color: red;
    position: relative;
  }
`
export const RecommendBannerLeftWrapper = styled.div`
  position: relative;
  width: 730px;
  .banner-item {
    height: 270px;
    .image {
      width: 100%;
    }
  }
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    > li {
      margin: 0 2px;
      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        &:hover {
          background-position: -16px -343px;
        }
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
export const RecommendBannerRightWrapper = styled.a.attrs({
  // 使用attrs方法直接为样式组件添加属性。之后仍是正常的添加其他属性
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 250px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`
export const RecommendBannerControlWrapper = styled.div`
  /* 先让他整体开启定位让他居中一下 */
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%); //居中效果
  height: 63px;
  .btn {
    /* 在给他单独开定位让他们各自定位一下自己的位置 */
    position: relative;
    width: 37px;
    height: 63px;
    background-color: black;
    cursor: pointer;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    float: left;
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    float: right;
    right: -68px;
    background-position: 0 -508px;
  }
`
