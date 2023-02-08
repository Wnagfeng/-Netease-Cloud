import styled from 'styled-components'
export const HotAnchorWrapper = styled.div`
  padding: 17px;
  .anchor-list {
    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      img {
        width: 40px;
        height: 40px;
      }
      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
        }

        .position {
          color: #666;

          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`