import React, { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
interface IAuthor{
  message?:string;//设置非必填属性
}
const Author:React.FC<IAuthor> =(props)=> {
  return (
    <div>
      <h2>author</h2>
    </div>
  )
}
//设置默认属性
Author.defaultProps = {
  message:'Author'
}
export default Author;