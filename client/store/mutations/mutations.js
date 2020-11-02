export default {
  updateCount (state, { num, num2 }) {
    state.count = num
  }
}
// this.$store.commit('updateCount', i++)
// 组件里commit修改数据时候用这里的方法
// 这里只能接收一个参数
// 不能有异步操作
