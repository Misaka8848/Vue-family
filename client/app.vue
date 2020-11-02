<template >
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <P>{{fullName}} {{counter}}</P>
    <p>{{textA }} {{textPlus}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/login/exact">login exact</router-link>
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view />
    </transition>

    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer
    // Todo

  },
  mounted () {
    console.log(this.$store)
    // const i = 1
    this.updateCountAsync({ num: 5, time: 2000 })
    // setInterval(() => {
    //   this.$store.commit('updateCount', { //commit 用来触发mutations
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  computed: {
    ...mapState({
      counter: state => state.count,
      textA: state => state.a.text
    }), // 建立映射关系
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
}

</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.2;
  z-index: -1;
}
</style>
