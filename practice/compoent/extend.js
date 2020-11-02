import Vue from 'vue'

// 外部组件用来约束子组件的
const component = {
  props: {
    active: {
      type: Boolean,
      default: true
    },
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text"></input>
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  // 如果不是new Vue方式定义的Vue实例，需要用data函数来返回数据,不要用全局变量的data，不然就会多个组件共用一个数据
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  // 只有通过new组件的时候，才能指定它的parent const对象的时候不行
  parent: parent,
  extends: component,
  data () {
    return { text: 1 }
  },
  mounted () {
    console.log(this.$parent.$options.name)
    // 调用父组件的数据，不过最好不要这么做
    this.$parent.text = 12345
  }
}

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   propsData: { propOne: 'value' },
//   // 会覆盖component里的data
//   data: { text: 123 },
//   mounted () {
//     console.log('comp mounted')
//   }
// })

new Vue({
  // 只有通过new组件的时候，才能指定它的parent
  parent: parent,
  name: 'Root',
  el: '#root',
  components: { Comp: component2 },
  data: {
    text: 2333
  },
  mounted () {
    console.log(this.$parent.$options.name)
  },
  template: `
    <div>
      <comp></comp>
      <span>{{text}}</span>
    </div>
  `
})
