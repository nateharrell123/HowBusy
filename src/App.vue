<template>
  <div class="clock">
    <Clock/>
  </div>
  <div>
    <!--<Search/> -->
  </div>
</template>

<script>
import Clock from "./components/Clock.vue";
//import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Clock,
    //Search
  },
};
</script>

<style scoped>

</style>