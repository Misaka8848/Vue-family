import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    // 去掉路由里面的#
    mode: 'history',
    // base: '/base/
    // 路径完全匹配的时候加linkExactActiveClass
    linkExactActiveClass: 'exact-active-link',
    linkActiveClass: 'active-link',
    // 记录跳转后的滚动行为
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        // 没有保存位置就滚动回左上角
        return { x: 0, y: 0 }
      }
    }
    // 让页面返回后端渲染
    // fallback: true
    // // 把请求里面的字符串转换为json
    // parseQuery (query) {},
    // // 把上面的json转换为字符串
    // stringifyQuery (obj) {}
  })
}
