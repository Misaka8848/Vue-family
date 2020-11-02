import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="test">{{ text }} {{ obj.a }}</div>',
  data: {
    text: 1,
    obj: {}
  },
  // 用这种方式可以在组件被销毁的时候，自动销毁监听
  watch: {
    text (newText, oldText) {
      // console.log(`${newText} : ${oldText}`)
    }
  }
})

app.$mount('#root')

setInterval(() => {
  // app.text += 1
  app.obj.a = app.text
  // app.$data.text += 1 这里$data 就是上面的data:{}
}, 1000)

// console.log(app.$data) data
// console.log(app.$props)
// console.log(app.$el) 节点
// console.log(app.$mount)
// console.log(app.$options) 是new Vue花括号后面的内容
// console.log(app.$root === app)
// console.log(app.children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$isServer)
// console.log(app.$refs)
// app.$options.render = h => {
//   return h('div', {}, 'new render function')
// }
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// $on监听 $once只监听一次
app.$on('test', (a, b) => {
  console.log(`test emited ${a} ${b} `)
})
// $emit来触发事件，必须是同一个vue对象上emit才能触发on的监听，比如这里都是app.xx
// 可以给监听器传递数值
app.$emit('test', 1, 2)

app.$forceUpdate()
