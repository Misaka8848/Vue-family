// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // 这里可以指定匹配的参数 :id
    // path: '/app/:id',
    // // 设置porps之后直接通过props把id传进当前组件
    // props: route => ({ id: route.query.a }),
    path: '/app',
    props: true,
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    component: () => import('../views/todo/todo.vue'),
    name: 'app', // <router-link :to="{name: 'applename'}">
    meta: {
      tittle: 'this is app',
      description: 'asdwa'
    },
    beforeEnter: (to, from, next) => {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    // components: {
    //   default: Login,
    //   a: Todo
    // }
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/login/exact',
    component: () => import('../views/login/login.vue')
  }
]
