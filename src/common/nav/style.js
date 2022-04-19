import styled from 'styled-components';
export const NavList = styled.div`
  width:100%;
  height: 1.1rem;
  border-bottom:1px solid #f0f0f0;
  // position:relative;
  position:fixed;
  top:1.1rem;
  left:0;
  z-index:500;
  background:#fff;
  .swiperCont{
    .adm-tabs-header{
      padding: 0;
    }
    .channelItem{
      padding:0;
      height:1.1rem;
      line-height:1.1rem;
      text-align:center;
      font-size:0.42rem;
      color:#888;
      font-family: 'PingFangSC', 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
      .adm-tabs-tab{
        background-color: #ffffff;
        padding: 0 15px;
      }
      .adm-tabs-tab-active{
        color:#000;
        font-weight:600;
        &:before {
          content: "";
          position: absolute;
          bottom: .15rem;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          height: 0;
          border: .048rem solid #ff2600;
          background: #ff2600;
          width: 47%;
          border-radius: .048rem;
        }
        
      }
      .tabsCurrent{
        color:#000;
        font-weight:600;
        &:before {
          content: "";
          position: absolute;
          bottom: .097rem;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          height: 0;
          border: .048rem solid #ff4141;
          background: #ff4141;
          width: 30%;
          border-radius: .048rem;
        }
      }
    }
  }
`