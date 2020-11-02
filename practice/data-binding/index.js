/*
 * @Author: Alter
 * @Date: 2020-08-20 19:52:29
 * @Last Modified by: Alter
 * @Last Modified time: 2020-08-20 21:00:02
 */
import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //   {{isActive ? 'active' : 'not active'}}
  //   </div>
  // `,

  // 其他的写法
  // <div :class="[{isActive ? 'active' : ''}]">
  // <div :class="[{active: isActive}]">
  template: `
    <div :class="{ active: !isActive }"
         :style="style">
    <p v-html='html'></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    aaa: 'main',
    html: '<span>233</span>',
    style: {
      color: 'red'
    },
    style2: {
      color: 'black'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') //eslint-disable-line
    }
  }
})
