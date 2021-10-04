<template>
  <!-- <Loader /> -->
  <div class="headerBotSpace">
    <Header />
  </div>
  <div class="push-right-lol">
    <div class="searchBotSpace">
      <!-- <Search/> -->
      <Tutorial/>
    </div> 
    <ResultsTable/>
  </div>
</template>

<script>
//import Loader from "./components/Loader.vue";
//import Search from "./components/Search.vue";
import Header from "./components/Header.vue";
import Tutorial from "./components/Tutorial.vue"
import ResultsTable from "./components/ResultsTable.vue";
export default {
  name: "App",
  components: {
    //Loader,
    Header,
    //Search,
    ResultsTable,
    Tutorial
  },
};
</script>

<style scoped>
.push-right-lol {
  margin-left:6%; 
  /* mess with this */
}

.headerBotSpace {
  padding-bottom: 180px;
}
.searchBotSpace {
  padding-bottom: 180px;
}
</style>