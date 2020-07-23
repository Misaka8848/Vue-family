import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
import './assets/images/亚里沙.jpg'

const root = document.createElement('div')
document.body.appendChild(root)
//TODO?h,render,$mount()是什么
new Vue ({
  render: (h) => h(App)
}).$mount(root)
