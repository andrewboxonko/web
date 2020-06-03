<template>
  <div id="app">
    <router-view/>
    <Nav v-if="!$route.meta.requiresNav"></Nav>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav
    },
    mounted(){
      let script = document.createElement('script')
      script.setAttribute('src', "https://kit.fontawesome.com/a076d05399.js")
      script.setAttribute('crossorigin', 'anonymous')
      document.head.appendChild(script)
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');
#app {
  font-family: "Inconsolata", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
