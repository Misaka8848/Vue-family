/*
 * @Author: Alter
 * @Date: 2020-07-24 18:34:18
 * @Last Modified by: Alter
 * @Last Modified time: 2020-08-08 19:10:16
 */
import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)
// TODO?h,render,$mount()是什么
new Vue({
  render: h => h(App)
}).$mount(root)
