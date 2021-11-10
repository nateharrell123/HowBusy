<template>
    <Clock/>
    <Search class="search"/>
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
.foot{
  height:60px;
}
</style>