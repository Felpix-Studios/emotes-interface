<template>
  <div id="app">    
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data:function(){
    return{
      darkMode:false
    }
  }
}
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 960px;
  margin: 0 auto;
  height: auto;
}

#app h1, h2, h3, h4, h5, h6 {
  font-family: Montserrat;
  color: #272643;
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
@media only screen and (max-width: 768px) {
  #app{
    padding: 0 1.5rem;
  }
}
</style>
