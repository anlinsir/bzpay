<template>
  <div class="hello">
    {{counter}}
   
    <p v-for="i in alsDreiGrossen">{{Number(i.name)}}</p>

    <button @click='add( Math.random() )' >INCREMEMT</button>
  </div>
</template>

<script>
	import { mapState , mapGetters , mapMutations , mapActions } from 'vuex'

export default {

  data () {

    return {
      msg: 'Welcome to Your Vue.js App'
    }

  },
  created(){
  	// this.$store.dispatch('getFaTCH')
  	this.getFaTCH()
  },
  methods:{
  	...mapActions(['getFaTCH']),
  	// ...mapMutations(['INCREMEMT'])
  	...mapMutations({
  		add : 'INCREMEMT'
  	})

  	// INCREMEMT(){
  	// 	var num = Math.random()
  	// 	this.$store.commit('INCREMEMT' , num)
  	// }
  },
  computed : {
  	...mapGetters(['alsDreiGrossen']),
  	// alsDreiGrossen(){
  	// 	return this.$store.getters.alsDreiGrossen

  	// },
  	// ...mapState(['count']) // 与仓库名一致时
  	...mapState({
  		counter : state => state.count
  	})//与仓库名不一致时
  	// count(){
  	// 	return this.$store.state.count
  	// }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
