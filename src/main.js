import Vue from 'vue'
import routes from './router/router'
import store from './store'
import {routerMode} from './config/env.js'
// 配置编译环境是线上还是线下
import './config/rem'
// 自适应手机端代码
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//Vue.use() 是使用插件
// vue-router 是 vuejs 官方提供的一个路由插件
const router=new VueRouter({
  routes,
  mode:routerMode,
  strict:process.env.NODE_ENV!=='production',
    //scrollBehavior 这个整体做的是：在路由的history模式下，一些列表页利用缓存模式来
    // 来记录位置(一般返回不刷新，前进刷新),一般用scrollBehavior,
    // 同时还用keep-alive(缓存),activated(缓存下触发钩子函数，刷新页面清除缓存)
    //点击浏览器的前进后退或切换导航触发
    　　scrollBehavior (to, from, savedPosition) {
　　　　//to 要进入的目标路由对象要去向哪里
　　　　//离开的路由对象  从哪里来
　　　　//savePosition //记录滚动条的坐标  点击前进后退的时候记录
　　　　//以下代码的场景为：a页面滚动条位置为1000，通过浏览器左上角的前进或后退，再返回到a页面时，这时候的滚动条位置不会变成0
        //通过以下代码能记录下页面的滚动条位置，这样在重新返回页面的时候就能回到上次浏览的滚动条位置
　　　　if (savedPosition) {
　　　　　　return savedPosition;
　　　　} 
    else{
      if (from,meta,keepAlive) {
        from.meta.savedPosition=document.body.scrollTop;
      }
      return {x:0,y:to.meta.savedPosition||0}
    }
  }
})

//全局都可以使用
new Vue({
  router,
  store,
  // render: h => h(App)
  // 创建vue 节点的，也就是html模板的，
  // 然后渲染(render)到指定的节点上
}).$mount('#app')
// 手动挂载到id为app的dom中的意思
