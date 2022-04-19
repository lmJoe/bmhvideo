import {http,jsonp} from './ajax';
//process.env.NODE_ENV 判断是否为开发环境 根据不同环境使用不同的baseURL 方便调试
let baseURL = process.env.NODE_ENV === 'development'? '' : 'http://192.168.30.10:3000';
/**
 * 获取导航列表
 */
const getChannelList = () => {
  return new Promise((resolve, reject) => {
    http({
      //这里是你自己的请求方式、url和data参数
      method: 'GET',
      url:baseURL+'/api/channelList.json',
      data: {},
      //假设后台需要的是表单数据这里你就可以更改
      headers: {
        "Content-Type":"application/json",
      }
    }).then(function (res) {
      resolve (res);
    }).catch(function (error) {
      console.log("网络异常~",error);
      reject(error)
    });
  }) 
}
/**
 * 获取播放页评论列表
 */
const getCommendList = () => {
  return new Promise((resolve, reject) => {
    http({
      //这里是你自己的请求方式、url和data参数
      method: 'GET',
      url:baseURL+'/api/commend.json',
      data: {},
      //假设后台需要的是表单数据这里你就可以更改
      headers: {
        "Content-Type":"application/json",
      }
    }).then(function (res) {
      resolve (res);
    }).catch(function (error) {
      console.log("网络异常~",error);
      reject(error)
    });
  }) 
}
/**
 * 获取首页视频列表
 */
const getVideoList = (params:any)=>{
  //获取当前13位时间戳
  const UnixTime = (new Date()).valueOf();
  const paramsData = {
    dataType:'h5_sensorindex',
    pageSize:16,
    pageIndex:params.pageIndex,
    channelId:params.channelid,
    distinctid:'',
    jsoncallback:'jsoncallback'+UnixTime,
  }
  return new Promise((resolve, reject) => { 
    jsonp({
      url: '//interface.video.baomihua.com/index.ashx',
      type: 'GET',
      data:paramsData,
      timeout: 30000,
      dataType: "jsonp",
      jsonp:'jsoncallback',
      jsonpcallback:'ok',
      success: function (data:Object) {
        resolve (data);
      },
      fail:function(error:Object){
        console.log("网络异常~",error);
        reject(error)
      }
    })

  }) 
}
const getVideoInfo = (videoid:any)=>{
  //获取当前13位时间戳
  const UnixTime = (new Date()).valueOf();
  const params = {
    flvid:videoid,
    devicetype:'wap',
    dataType:'json',
    jsoncallback:'zepto'+UnixTime,
  }
  return new Promise((resolve, reject) => { 
    jsonp({
      url: '//play.baomihua.com/getvideourl.aspx',
      type: 'GET',
      data:params,
      timeout: 30000,
      dataType: "jsonp",
      jsonp:'zepto',
      jsonpcallback:'ok',
      success: function (data:Object) {
        resolve (data);
      },
      fail:function(error:Object){
        console.log("网络异常~",error);
        reject(error)
      }
    })

  }) 
}
const getGuessVideoList = (videoId:any) => {
  return new Promise((resolve, reject) => {
    http({
      //这里是你自己的请求方式、url和data参数
      method: 'GET',
      url:'https://t-interface.baomihua.com/api/video/getAliRecVideo',
      data: {
        videoId:videoId,
        sence:'mvNor',
      },
      //假设后台需要的是表单数据这里你就可以更改
      headers: {
        "Content-Type":"application/json",
      }
    }).then(function (res) {
      resolve (res);
    }).catch(function (error) {
      console.log("网络异常~",error);
      reject(error)
    });
  }) 
}
export {
  getChannelList,
  getVideoList,
  getVideoInfo,
  getGuessVideoList,
  getCommendList
}