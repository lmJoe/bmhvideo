import React, { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
import { Download, Logo, NavHeader, NavRight, NavWrapper, Searchdoor } from './style';
import { Link } from 'react-router-dom';

interface IHeaderProps{
  message?:string;//设置非必填属性
}
const Header:React.FC<IHeaderProps> =(props)=> {
  return (
    <NavWrapper>
      <NavHeader>
        <Link to='/'>
          <Logo />
        </Link>
        <NavRight>
          <Download>下载APP</Download>
          <Searchdoor></Searchdoor>
        </NavRight>
      </NavHeader>
    </NavWrapper>
  )
}
//设置默认属性
Header.defaultProps = {
  message:'Header'
}
export default Header;