import styled from 'styled-components'
export const TopRankingItemWrapper = styled.div`
  width: 230px;
  &:last-child {
    width: 228px;
  }
  .header {
    display: flex;
    height: 100px;
    margin: 20px 0 0 20px;
    .info {
      margin: 5px 0 0 10px;
      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }
  .list {
    .item-list {
      /* position: relative; */
      display: flex;
      align-items: center;
      height: 32px;
      :nth-child(-n + 3) .rank {
        color: #c10d0c;
      }
      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }
      .info {
        display: flex;
        width: 170px;
        color: #000;
        height: 32px;
        line-height: 32px;
        justify-content: space-between;
        .name {
          flex: 1;
          white-space: nowrap;
          /* 当旁边的图标不展示的时候我们让他占满全部当图标变成block时我们给他固定的宽度把多余的剪切掉 */
          /* 这里设置flex为1刚刚好这样他能智适应的占据宽度 */
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
        .operate {
          margin-top: 4px;
          display: none !important;
          display: flex;
          align-items: center;
          width: 82px;
          height: 32px;
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
        &:hover {
          .operate {
            display: block !important;
          }
        }
      }
    }
  }
  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`
