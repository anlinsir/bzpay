<template>
  <div class="hellos">
    <Header />
  </div>
</template>

<script>
	import Header from '../components/header'
	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  	Header
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
