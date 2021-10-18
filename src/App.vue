<template>
  <Loader/>
  <div class="headerBotSpace">
    <Header/>
  </div>
  <div class="searchBotSpace">
    <Search/>
    <Map/>
  </div>
    <ResultsTable/>
</template>

<script>
import Loader from "./components/Loader.vue";
import Search from "./components/Search.vue";
import  Map  from "./components/Map.vue"
import Header from "./components/Header.vue";
import ResultsTable from "./components/ResultsTable.vue";
export default {
  name: "App",
  components: {
    Loader,
    Header,
    Search,
    ResultsTable,
    Map
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