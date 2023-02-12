import styled from 'styled-components'
export const AppFooterWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  height: 350px;
  .footerWrapper {
    .item {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 90px;
      :nth-child(1) .link {
        background-position: -115px -115px;
      }
      :nth-child(2) .link {
        background-position: -5px -170px;
      }
      :nth-child(3) .link {
        background-position: -5px -60px;
      }
      :nth-child(4) .link {
        background-position: -60px -60px;
      }
      :nth-child(5) .link {
        background-position: -170px -115px;
      }
      :nth-child(6) .link {
        background-position: -170px -60px;
      }
      .link {
        margin-bottom: 10px;
      }
    }
    .top {
      margin: 0 auto;
      width: 800px;
      margin-top: 30px;
      justify-content: space-between;
      display: flex;
      a {
        display: block;
        width: 45px;
        height: 45px;
        background-size: 220px 220px;
      }
    }
    .middleWrpper {
      .middleitem {
        margin-top: 60px;
        margin-left: 50%;
        transform: translateX(-35%);
        /* 让每个竖线个文字在一行 */
        display: flex;
        .middle {
          &:last-child {
            .icon {
              display: none;
            }
          }
          /* 让竖线和文字在一行 */
          display: flex;
          .icon {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .middle-thesecond {
      margin-top: 15px;
      margin-left: 50%;
      transform: translateX(-45%);
      .middle-thesecond-v1 {
        .text2 {
          margin-left: 15px;
        }
        .text3 {
          margin-left: 15px;
        }
      }
    }
    .Third {
      margin-top: 15px !important;
      width: 788px;
      margin: 0 auto;
    }
    .Fourth {
      margin: 0 auto;
      width: 660px;
      .text1 {
        margin-right: 10px;
      }
      .text2 {
        margin-right: 10px;
      }
    }
  }
`
