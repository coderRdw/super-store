import {request} from './request'

//封装home页面数据，并返回请求
//export default导出时，引用不用加{},其他情况要加{}
export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

