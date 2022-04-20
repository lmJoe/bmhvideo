//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS, merge } from 'immutable';
import * as constants from './constants';
// const faultState = fromJS({
//   //定义一个初始数据
//   channelid:0,//设置默认频道id
//   pageIndex:0,//当前页码
//   operType:'',
// })
const faultState = {
  //定义一个初始数据
  channelid:999,//设置默认频道id
  pageIndex:0,//当前页码
  operType:'',
  videoList:[],
}
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = faultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    case constants.VIDEO_PARAMS:
      // return state.merge({
      //   pageIndex:fromJS(action.channel),
      //   channelid:fromJS(action.channelid),
      // })
      return {
        pageIndex:action.pageIndex,
        channelid:action.channelid,
      }
    case constants.OPER_TYPE:
      // return state.merge({
      //   operType:fromJS(action.operType),
      // })
      return{
        operType:action.operType,
      }
    case constants.VIDEO_LIST:
      return{
        videoList:action.videoList,
      }
    default:
      return state;
  }
}