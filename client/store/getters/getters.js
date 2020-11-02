export default {
  // 理解为computed
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
