// 配置编译环境和线上环境之间的切换

let baseUrl='';
// 域名地址
let routerMode='hash';
// 路由模式 为hash模式
let imgBaseUrl='';
// 图片所在域名地址

// 生产阶段设为production，开发阶段设为develop

if (process.env.NODE_ENV=='development') {
  imgBaseUrl='/img/';
}
else if (process.env.NODE_ENV=='production') {
  baseUrl='//elm.cangdu.org';
}
module.exports={
  baseUrl,
  routerMode,
  imgBaseUrl
}