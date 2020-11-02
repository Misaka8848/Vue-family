import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
  <div>
    <p>Name: {{name}}</p>
    <p>Name: {{getName()}}</p>
    <p>Number: {{number}}</p>
    <p>fullName: {{fullName}}</p>
    <p>Number: <input type="text" v-model="number"></p>
    <p>firstName: <input type="text" v-model="firstName"></p>
    <p>lastName: <input type="text" v-model="lastName"></p>
    <p>Name: <input type="text" v-model="name"></p>
    <p>obj.a: <input type="text" v-model="obj.a"></p>
  </div>
  `,
  data: {
    firstName: 'Alter',
    lastName: 'Ego',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  // computed尽量不要对依赖值进行修改，而是生成新的值
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      }
      // 通过用户输入来设置值
      // set (name) {
      //   const names = name.split(' ')
      //   this.firstName = names[0]
      //   this.lastName = names[1]
      // }
    }
  },
  methods: {
    getName () {
      console.log('getName revolved')
      return `${this.firstName} ${this.lastName}`
    }
  },
  mounted () {
    this.obj = { a: '233' }
  },
  // watch尽量不要对监听值进行修改
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    obj: {
      handler () {
        console.log('obj.a changed')
      },
      // deep可以监听obj下的所有属性，监听单一属性的话 把obj改成'obj.a'
      deep: true
    }
  }
})
