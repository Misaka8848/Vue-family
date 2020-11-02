import Vue from 'vue'

const CompOne = {
  template: `
    <div :style="style">
      <slot></slot>
    </div>
  `,
  data () {
    return {
      style: {
        width: '800px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: '组件内data的变量'
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: CompOne
  },
  template: `
    <comp-one>
      <span>{{value}}</span>
    </comp-one>
  `,
  data () {
    return {
      value: 123
    }
  }
})
