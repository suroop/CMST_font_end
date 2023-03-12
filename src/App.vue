<template>
  <div id="app">
<!--    <div id='nav' style="height: 10%">-->
<!--      <router-link to="/">Home</router-link>|-->
<!--      <router-link to="/About">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return {
      msg:"hello",
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
}
</style>
