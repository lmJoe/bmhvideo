import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd-mobile'
import { getChannelList } from "../../units/api";
import { RootState } from '../../store/typesStore'
// import { NavList,ChannelItem,NavSwiper} from './style';
import { sleep } from 'antd-mobile/es/utils/sleep'
import { NavList } from './style';
interface INavProps{
  message?:string;//设置非必填属性
}
const NavDom:React.FC<INavProps> =(props)=> {
  const dispatch = useDispatch()
  // debugger
  const channelid = useSelector((state:RootState) => {return state.channelid})
  const pageIndex = useSelector((state:RootState) => {return state.pageIndex})

  // const [channelid, setChannelid] = useState({channelid:100});
  const [channelList, setChannelList] = useState<string[]>([])
  const getChannel = async () =>{
    const res:any = await getChannelList()
    setChannelList(res.data)
}
  useEffect(() => {
    getChannel()
  },[1])/**此处的[1] 为仅在为1的时候进行更新*/
  const choseChannel = () =>{

  }
  return (
    <NavList className="NavSwiper">
        <Tabs
            defaultActiveKey='999' 
            className='swiperCont'
            onChange={key => {
              dispatch({
                type: 'VIDEO_PARAMS',
                pageIndex: 1,
                channelid:key,
              })
            }}>
            {
              channelList.map((item:any, index:number) => {
                return (
                  <Tabs.Tab
                    title={item.channel} 
                    key={item.id} 
                    className='channelItem'>
                  </Tabs.Tab>
                )
              })
            }
        </Tabs>
      </NavList>
  )
}
//设置默认属性
NavDom.defaultProps = {
  message:'Nav'
}
export default NavDom;