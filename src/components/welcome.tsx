import React, { useRef, useState } from 'react'
import Detail from '../common/detail/detail'
import Author from '../common/author/author'
import Nav from '../common/nav/nav'
import Header from '../common/header/header'
import List from '../common/list/list'
import { Tabs, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import logoImg from '../statics/header-logo.jpg';
import { DtailPage,OpenAppBottom,OpenAppBottomLogo,OpenappBottomOpen} from './style';
interface IWelcomeProps{
  message?:string;//设置非必填属性
}
const Welcome:React.FC<IWelcomeProps> =(props)=> {
  return (
    <DtailPage>
      {/* <h2>{props.message}</h2> 可以将此处设置loading*/}
      <Header/>

      <Nav/>
      <List/>
      
      {/* <OpenAppBottom>
        <OpenAppBottomLogo>
          <img src={logoImg} />
        </OpenAppBottomLogo>
        <OpenappBottomOpen>打开</OpenappBottomOpen>
      </OpenAppBottom> */}
    </DtailPage>
  )
}
//设置默认属性
Welcome.defaultProps = {
  message:'BlackName'
}
export default Welcome;