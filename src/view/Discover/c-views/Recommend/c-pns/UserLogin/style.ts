import styled from 'styled-components'
export const UserLoginWrapper = styled.div`
  display: flex;
  height: 126px;
  padding: 16px 22px;
  background-position: 0 0;
  flex-direction: column;
  /* 项目从上到下垂直显示 */
  align-items: center;
  .top {
    width: 205px;
    margin: 0 auto;
    line-height: 22px;
  }
  a {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;
    :hover {
      background-position: -110px -195px;
    }
  }
`
