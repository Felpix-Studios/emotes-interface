<template>
  <div id="app">    
    <Navbar/>
    <Popular/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Popular from './components/Popular.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Popular
  },
  data:function(){
    return{
      darkMode:true
    }
  }
}
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 960px;
  margin: 0 auto;
  height: auto;
}

#app h1, h2, h3, h4, h5, h6 {
  font-family: Montserrat;
  color: #121212;
}
#app p,a{
  font-family: Raleway;
}
body{
  margin:0;
  padding:0;
}
i{
  font-size: 2rem;
}
.dark{
  background: #121212;
  color: white;
}
</style>
