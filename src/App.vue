<template>
  <Loader/>
  <div class="headerBotSpace">
    <Header/>
  </div>
  <div class="searchBotSpace push-right-lol">
    <Search/>
  </div>
    <!--<ResultsTable/> -->
</template>

<script>
import Loader from "./components/Loader.vue";
import Search from "./components/Search.vue";
import Header from "./components/Header.vue";
//import ResultsTable from "./components/ResultsTable.vue";
export default {
  name: "App",
  components: {
    Loader,
    Header,
    Search,
    //ResultsTable
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