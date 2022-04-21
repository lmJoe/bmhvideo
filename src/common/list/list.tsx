import React, { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/typesStore'
import { InfiniteScroll, List, PullToRefresh, DotLoading,Image } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { Link } from 'react-router-dom';
import sayicon from '../../statics/sayicon.png';
import share from '../../statics/share.png';
import {  ListDom,Video} from './style';
import { getVideoList } from "../../units/api";
interface IListProps {
  message?: string;//设置非必填属性
}
const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
  return (
    <>
      {hasMore ? (
        <>
          <span>Loading</span>
          <DotLoading />
        </>
      ) : (
        <span>--- 我是有底线的 ---</span>
      )}
    </>
  )
}
const ListModule: React.FC<IListProps> = (props) => {
  const dispatch = useDispatch()
  const channelid = useSelector((state:RootState) => {return state.channelid})
  const pageIndex = useSelector((state:RootState) => {return state.pageIndex})
  const ref = useRef({ channelid, pageIndex });
  /**获取视频 */
  const [data, setData] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [changeMark, setchangeMark] = useState(1);
  useEffect(() => {
    /** channelid、pageIndex更新后  prevChannelid、prevPageIndex更新前*/
    let { channelid: prevChannelid, pageIndex: prevPageIndex } = ref.current;
    if(pageIndex==0){
      dispatch({
        type: 'VIDEO_PARAMS',
        pageIndex: 1,
        channelid:channelid,
      })
      console.log(1)
    }else{
      dispatch({
        type: 'VIDEO_PARAMS',
        pageIndex: pageIndex+1,
        channelid:channelid,
      })
      console.log(2)
    }
    if (prevChannelid !== channelid) {
      ref.current = { channelid, pageIndex };
      const changeGetData = async()=>{
        dispatch({
          type: 'VIDEO_PARAMS',
          pageIndex: 1,
          channelid:channelid,
        })
        console.log('channelid!',channelid);
        await sleep(500);
        const append:any = await mockRequest()
        setData(append.Videolist)
      }
      changeGetData()
    }else if(prevPageIndex !== pageIndex){
      ref.current = { channelid, pageIndex };
      console.log('prevPageIndex!',pageIndex);
    }
  },[changeMark,channelid])
  async function mockRequest() {
    let param = {
      channelid: channelid,
      pageIndex: pageIndex,
    };
    await sleep(500);
    return getVideoList(param);
  }
  async function loadMore() {
    const append:any = await mockRequest()
    const Videolist = append.Videolist;
    if(typeof append=='object'){
      setData(val => [...val, ...Videolist])
      setHasMore(Videolist.length > 0)
      setchangeMark(changeMark+1);
    }else{
      setData([])
    }
  }
  return (
    <ListDom>
      {/* <h2>{props.message}</h2> 可以将此处设置loading*/}
      <PullToRefresh
        onRefresh={async () => {
          dispatch({
            type: 'VIDEO_PARAMS',
            pageIndex: 1,
            channelid:channelid,
          })
          await sleep(500);
          const append:any = await mockRequest()
          setData(append.Videolist)
        }}
      >
        <List>
          {
          data.map((item:any, index:number) => (
            <Video key={item.videoId} className='swiperTxt'>
              {/* <Link key={index} to={'/detail/'+item.videoId}> */}
              <Link key={index} to={'/detail/'+item.videoId}>
                <div className="video-list-item">
                      <div className="video-list-item-main">
                        <div className="video-list-item-inner">
                          <div className="video-list-item-poster">
                            <Image lazy={true} src={item.videoImgUrl} />
                          </div>
                          <div className="video-list-item-status">
                            <div className="video-list-item-poster-shade">
                              <h4 className="video-list-item-poster-title">
                                {item.videoTitle}
                              </h4>
                            </div>
                            <p className="video-list-item-poster-duration">
                              <span className="playNum">6.2万次播放</span>
                              <span>{item.videoCost}</span>
                            </p>
                            
                            <div className="video-list-item-status-warper">
                              <div className="video-state-play"></div>
                              <div className="video-state video-state-end mask">
                                <div className="video-status-frame">
                                  <div className="palyend">
                                    <div className="video-icon-con">
                                      <div className="video-icon-refurbish"></div>
                                      <p>重播</p>
                                    </div>
                                    <div className="video-icon-con">
                                      <div className="video-icon-share"></div>
                                      <p>分享</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="video-state video-state-loading">
                                <div className="video-status-frame">
                                  <div className="video-icon-loading"></div>
                                </div>
                              </div>
                              <div className="video-state video-state-error mask">
                                <div className="video-status-frame">
                                  <div className="video-icon-err"></div>
                                </div>
                                <p>视频播放失败，请重试</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </Link>
              <div className="video-list-item-tools">
                <Link key={index} to={'/author/'+item.appID}>
                  <div className="video-list-item-author">
                    <div className="video-list-item-author-avatar">
                      <Image lazy={true} src={item.appPic} />
                      <span className="v-tag yellow"></span>
                    </div>
                    <div className="video-list-item-author-nickname">
                      <p>{item.appName}</p>
                      <div className="item-author-msg">{item.companyName}</div>
                    </div>
                  </div>
                </Link>
                <div className="video-list-item-btns">
                  <div className="video-list-item-btns-comment video-icon-btn-comment">
                    <Image lazy={true} src={sayicon} />
                    <span>276</span>
                  </div>
                  <div className="video-list-item-btns-share video-icon-btn-share">
                    <Image lazy={true} src={share} />
                    <span>分享</span>
                  </div>
                </div>
              </div>
            </Video>
          ))
          }
        </List>
      </PullToRefresh>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </ListDom>
  )
}
//设置默认属性
ListModule.defaultProps = {
  message: 'ListModule'
}
export default ListModule;