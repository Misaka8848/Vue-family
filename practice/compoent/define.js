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
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}
// 全局定义组件，组件名用camelcase，首字母要大写
// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  // 驼峰命名法写成标签的时候换成字符串连接

  // 这里用bind可以把"true"解析成true
  template: `
    <div>
      <comp-one :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one  :prop-one="prop1" @change="handleChange"></comp-one>
    </div>
    `,
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  }
})
