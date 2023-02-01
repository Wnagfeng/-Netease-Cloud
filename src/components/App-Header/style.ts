import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  /* AppHeaderWrapper 让他自适应宽度 让他里面的Appheader-count去做居中和固定宽度 */
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;
  .Appheader-count {
    /* width: 1100px;
    margin: 0 auto; */

    /* 让左右两个组件沾满剩余空间中间流出来 */
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1}
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0; //让精灵图展示一下
    text-indent: -9999px; //让文字首行缩进一下
  }
  .title-list {
    display: flex;
    line-height: 70px;
    .item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      /*
      给最后一个a设置一个hot的icon
       */
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -192px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      /* 当有active和inco的时候我们给他的icon设置出来 */
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;
  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .user-center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }
`
