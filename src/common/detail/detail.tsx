import React, { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
interface IDetailProps{
  message?:string;//设置非必填属性
}
const Detail:React.FC<IDetailProps> =(props)=> {


  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  )
}
//设置默认属性
Detail.defaultProps = {
  message:'Detail'
}
export default Detail;