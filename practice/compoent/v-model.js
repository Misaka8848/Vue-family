import Vue from 'vue'

const component = {
  model: {
    // 指定v-model的变量名，不指定就是默认的变量名是value
    prop: 'value1',
    // 指定提交的事件名
    event: 'change'
  },
  props: ['value', 'value1'],
  template: `
  <div>
    <input type="text" @input="handleInput" :value="value1">
  </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data: { value: '1' },
  // :value="value" @input="value=arguments[0]" 实现v-model
  // 赋值语句中 比如v-model="value" 右面的是相对于作用目标的外来值，"value"是Root组件的data，v-model
  // 是component组件的值
  template: `
  <div>
    <comp-one v-model = "value"></comp-one>
  </div>
  `
})
