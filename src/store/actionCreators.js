import * as constants from './constants';
import { fromJS }  from 'immutable';
import { getVideoList,getChannelList } from "../units/api";
import { useDispatch, useSelector } from 'react-redux';

const setChannel = (data) => ({
  'type':constants.CHANNEL_LIST,
  'channel':fromJS(data),
})
export const choseChannel = (data) => ({
  'type':constants.CHOSE_CHANNEL,
  'channelid':data.channelid,
  'direction':data.direction,
})
export const getVideo = (params) => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  getVideoList(params).then(
    (res) => {
      const dispatch = useDispatch()
      const data = res.Videolist;
      dispatch({
        type: 'VIDEO_LIST',
        videoList:fromJS(),
      })
    },
    (error) => {
      console.log("get response failed!");
    }
  );
}
export const getChannel = () => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    getChannelList().then(
      (res) => {
        const data = res.data;
        const action = setChannel(data);
        dispatch(action);//将action派发给store
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
}