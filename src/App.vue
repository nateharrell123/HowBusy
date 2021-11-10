<template>
<div class="container">
  <div class="main">
    <Clock/>
    <Search class="search"/>
  </div>
</div>
    <Footer class="foot"/>
</template>

<script>
import Clock from "./components/Clock.vue";
import Search from "./components/Search.vue";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Clock,
    Search,
    Footer
  },
};
</script>

<style scoped>
.search{
    padding-bottom:60px;   /* Height of the footer */
}
html,body {
  height:100%;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  min-height:100%;
}

.main{
  overflow:auto;
  padding-bottom:100px;
}

.foot{
  position:relative;
  height : 100px;
}


</style>