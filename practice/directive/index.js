import Vue from 'vue'

new Vue({
  el: '#root',
  // v-text相当于里面写{{text}}
  // v-html是插入html代码，而不是字符串
  // v-show是在样式里面更改display:none
  // v-for用唯一的值作为key，不要用index作为key
  // v-model双向绑定输入值和变量
  // <input type="checkbox" :value="1" v-model="arr">这里不绑定的话用原生value是赋值为字符串
  // model.number转换为数值，model.trim删除收尾的空格
  // v-once 只绑定一次数据 然后就不变了。
  template: `
    <div>
      <h2>v-text</h2>
      <div v-text="text"></div>
      <div v-show="active">{{text}}</div>
      <h2>v-pre</h2>
      <div v-pre>{{text}}</div>
      <p v-if="active">{{text}}</p>
      <p v-else-if= "text===0">else content</p>
      <p v-else>final option</p>
      <div v-html="html"></div>
      <h2>v-for</h2>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}-{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{key}}-{{val}}-{{index}}</li>
      </ul>
      <h2>input</h2>
      <input text="text"  v-model.number="text">
      <div>
        <h2>Arr checkbox</h2>
        <input type="checkbox" :value=1 v-model="arr">
        <input type="checkbox" :value=2 v-model="arr">
        <input type="checkbox" :value=3 v-model="arr">
      </div>
      <div>
        <h2>Arr radio</h2>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <h2>v-once</h2>
      <div v-once>{{text}}</div>
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: 123,
      b: 456,
      c: 789
    },
    picked: '',
    text: 0,
    active: false,
    html: '<span>this is html</span>'
  }
})
