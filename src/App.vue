<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<div class="container">
  <div class="main">
    <Clock class="bot"/>
    <Search class="search"/>
  </div>
</div>
    <Footer class="foot"/>
</template>

<script>
import Clock from "./components/Clock.vue";
import Search from "./components/Search.vue";
import Footer from "./components/Footer.vue"
// import Loader from "./components/Loader.vue"
export default {
  name: "App",
  components: {
    Clock,
    Search,
    Footer,
    // Loader
  },
};
</script>


<style>
html,body {
  height:100%;
}
#app {
  display:flex;
  flex-direction: column;
  height:100%;
}
</style>


<style scoped>
.search{
    padding-bottom:60px;   /* Height of the footer */
}

.container{
  flex:1 0 auto;
}

* {
  margin: 0;
  padding: 0;
}

.main{
  overflow:auto;
  padding-bottom:100px;
}

</style>