import styled from 'styled-components'
export const SettleSingerWrapper = styled.div`
  padding: 17px;
  .item {
    margin-top: 10px;
    display: flex;
    background-color: #fafafa;
    text-decoration: none;
    :hover {
      background-color: #f4f4f4;
    }
    .info {
      flex: 1;
      /* flex-direction: column; */
      justify-content: space-around;
      width: 133px;
      height: 60px;
      padding: 3px 12px;
      border: 1px solid #e9e9e9;
      border-left: none;
      overflow: hidden;
      .singer {
        font-size: 14px;
        font-weight: 700;
        color: #000;
      }
      .desc {
        margin-top: 5px;
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`
