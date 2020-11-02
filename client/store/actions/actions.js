export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', { num: data.num })
    }, data.time)
  }
}
// 异步修改数据，和mutations功能差不多
