import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component</div>',
  inject: ['yeye', 'value'],

  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  // <div :style="style">
  //   <div class="header">
  //     <slot name= "header"></slot>
  //   </div>
  //   <div class="body">
  //     <slot name= "body"></slot></div>
  // </div>
  // `,
  template: `
    <div :style="style">
      <slot value1="slot-scope变量" :value="value3" ></slot>
      <slot name="slot2" :value="value3"></slot>
      <child-component/>
    </div>
  `,
  data () {
    return {
      style: {
        width: '800px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value3: '组件内data的变量'
    }
  }
}

new Vue({
  components: { CompOne: component },
  // 不提供reactive
  provide () {
    return {
      yeye: this,
      value: this.value
    }
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span>不使用插槽的span</span>
        <span slot-scope="props" ref="span">{{props.value1}} {{value}} {{props.value}}</span>
        <span slot="slot2"> 这是一个带name的slot</span>
      </comp-one>

    </div>

  `,
  el: '#root',
  data () {
    return {
      value: '引用环境的变量'
    }
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  }
})
