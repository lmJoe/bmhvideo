import styled from 'styled-components';
import playicon from '../../statics/playicon.png';
import Vlog from '../../statics/Vlog.png';
import videoBg from '../../statics/videoBg.png';
import playNum from '../../statics/playNum.png';
export const ListDom = styled.div`
  width: 100%;
  min-height: 16.103rem;
  overflow: hidden;
  position:relative;
  margin-top:1.1rem;
`
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
export const NavSwiper = styled.div`
  
`
export const ChannelItem = styled.div`
  
`
export const Video = styled.div`
  text-align: left;
  box-sizing: border-box;
  position: relative;
  left: 0;
  width: 100%;
  text-align: left;
  background-color: #fff;
  .video-list-item{
    .video-list-item-main{
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      background-color: #999;
      overflow:hidden;
      .video-list-item-inner{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        .video-list-item-poster{
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${videoBg});
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: 65%;
        }
        .video-list-item-status{
          position: absolute;
          z-index: 100;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          width: 100%;
          height: 100%;
          margin: auto;
          align-items: center;
          justify-content: center;
          .video-list-item-poster-shade{
            position: absolute;
            z-index: 101;
            top: 0;
            left: 0;
            width: 100%;
            height: 2.536rem;
            background: -webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.6)),color-stop(100%,transparent));
            h4{
              margin: .314rem .411rem 0;
              font-size: .435rem;
              line-height: .684rem;
              color: #fff;
            }
          }
          .video-list-item-poster-duration{
            display: inline-flex;
            font-size: .29rem;
            color: #fff;
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 101;
            right: .121rem;
            bottom: .121rem;
            height: .483rem;
            padding: 0 .242rem;
            line-height: .507rem;
            border-radius: .242rem;
            span{
              position: relative;
              padding: 0 .193rem;
              display: inline-flex;
              font-size: .29rem;
              color: #fff;
              align-items: center;
              justify-content: center;
            }
            .playNum{
              position: relative;
              padding: 0 .193rem;
              display:block;
              &:before{
                ontent: "";
                display: inline-block;
                width: .435rem;
                height: .435rem;
                margin-right: .048rem;
                background-image: url(${playNum});
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: .435rem;
              }
              &:after{
                ontent: "";
                position: absolute;
                top: 50%;
                right: 0;
                width: .024rem;
                height: .193rem;
                background: #fff;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
              }
            }
          }
          .video-list-item-status-warper{
            display: flex;
            font-size: 0;
            text-align: center;
            align-content: center;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            .video-state-play {
              display: block;
              width: 1.159rem;
              height: 1.159rem;
              box-sizing: border-box;
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: 1.159rem;
              background-image: url(${playicon});
            }
            .video-state{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              z-index: 100;
              .video-state-end{
                .mask{
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0,0,0,.4);
                }
                .video-status-frame{
                  position: relative;
                  .palyend{
                    display: flex;
                    width: 3.478rem;
                    height: 1.594rem;
                    align-items: baseline;
                    justify-content: space-between;
                    .video-icon-con{
                      display: flex;
                      width: 3.478rem;
                      height: 1.594rem;
                      align-items: baseline;
                      justify-content: space-between;
                      .video-icon-refurbish{
                        width: 1.159rem;
                        height: 1.159rem;
                        background-image: url(https://hiphotos.baidu.com/fex/pic/item/6d81800???.jpg);
                        background-size: 1.159rem 1.159rem;
                      }
                      p{
                        margin-top: .193rem;
                        font-size: .386rem;
                        line-height: .386rem;
                        text-align: center;
                        color: #fff;
                      }
                    }
                    .video-icon-con{
                      .video-icon-share{
                        width: 1.159rem;
                        height: 1.159rem;
                        background-image: url(https://hiphotos.baidu.com/fex/pic/item/b7003af???.jpg);
                        background-size: 1.159rem 1.159rem;
                      }
                      p{
                        margin-top: .193rem;
                        font-size: .386rem;
                        line-height: .386rem;
                        text-align: center;
                        color: #fff;
                      }
                    }
                  }
                }
              }
              .video-state-loading{
                .video-status-frame{
                  position: relative;
                  .palyend{
                    display: flex;
                    width: 3.478rem;
                    height: 1.594rem;
                    align-items: baseline;
                    justify-content: space-between;
                    .video-icon-con{
                      .video-icon-refurbish{
                        width: 1.159rem;
                        height: 1.159rem;
                        background-image: url(https://hiphotos.baidu.com/fex/pic/item/6d81800???.jpg);
                        background-size: 1.159rem 1.159rem;
                      }
                      p{
                        margin-top: .193rem;
                        font-size: .386rem;
                        line-height: .386rem;
                        text-align: center;
                        color: #fff;
                      }
                    }
                    .video-icon-con{
                      .video-icon-share{
                        width: 1.159rem;
                        height: 1.159rem;
                        background-image: url(https://hiphotos.baidu.com/fex/pic/item/b7003af???.jpg);
                        background-size: 1.159rem 1.159rem;
                      }
                      p{
                        margin-top: .193rem;
                        font-size: .386rem;
                        line-height: .386rem;
                        text-align: center;
                        color: #fff;
                      }
                    }
                  }
                }
              }
              .video-state-error{
                .mask{
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0,0,0,.4);
                }
                .video-status-frame{
                  position: relative;
                  .video-icon-err{
                    width: 1.159rem;
                    height: 1.159rem;
                    background-image: url(https://hiphotos.baidu.com/fex/pic/item/b3b7d0a???.jpg);
                    background-size: 1.159rem 1.159rem;
                  }
                }
                p{
                  margin-top: .193rem;
                  font-size: .386rem;
                  line-height: .386rem;
                  text-align: center;
                  color: #fff;
                }
              }
            }
          }
        }
      }
      .video-list-item-video{
        position: absolute;
        z-index: 99;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
  .video-list-item-tools{
    height: 1.3rem;
    background-color: #f5f5f5;
    display: flex;
    padding: .081rem 0;
    justify-content: space-between;
    .video-list-item-author{
      display: flex;
      height: 100%;
      padding-left: .411rem;
      align-items: center;
      text-overflow: ellipsis;
      flex-direction: row;
      flex: 1 1;
      .video-list-item-author-avatar{
        width: .821rem;
        height: .821rem;
        overflow: hidden;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          border-radius: 50%;
        }
        .yellow{
          background-image: url(${Vlog});
        }
        .v-tag{
          position: absolute;
          right: 0;
          bottom: 0;
          width: .314rem;
          height: .314rem;
          background-size: .314rem;
        }
      }
      .video-list-item-author-nickname{
        margin-left: .193rem;
        line-height: .314rem;
        font-size: .362rem;
        color: #000;
        font-weight: 800;
        -webkit-box-flex: 1;
        -ms-flex: 1 1;
        flex: 1 1;
        p{
          font-size: .362rem;
          font-weight: 800;
          color: #000;
          letter-spacing: 0;
          line-height: .362rem;
        }
        .item-author-msg{
          margin-top: .097rem;
          color: #888;
          line-height: .338rem;
          display: -webkit-box!important;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      }
    }
    .video-list-item-btns{
      min-width: 3.237rem;
      flex-direction: row;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .video-list-item-btns-comment{
        font-size: .314rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img{
          width: .483rem;
        }
        span{
          margin-left: .081rem;
        }
      }
      .video-list-item-btns-share{
        padding-left: .338rem;
        font-size: .314rem;
        padding-right: .483rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img{
          width: .483rem;
        }
        span{
          margin-left: .081rem;
        }
      }
    }
  }
  
`
