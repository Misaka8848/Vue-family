import Vue from 'vue'

new Vue({
  model: {
    name: 'change',
    prop: 'value1'
  },
  porps: {
    value1: {
      type: String,
      default: ''
    }
  },
  data: {
    value2: 'this is value2'
  }
})
