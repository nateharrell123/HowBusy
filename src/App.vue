<template>
  <div class="clock">
    <Clock/>
  </div>
    <Search/>
    <Footer/>
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

</style>