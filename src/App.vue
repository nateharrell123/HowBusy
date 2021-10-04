<template>
  <Loader />
  <div class="headerBotSpace">
    <Header />
  </div>
  <div class="push-right-lol">
    <!--<div class="searchBotSpace">
    </div> -->
      <Search/>
    <ResultsTable/>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Search from "./components/Search.vue";
import Header from "./components/Header.vue";
import ResultsTable from "./components/ResultsTable.vue";
export default {
  name: "App",
  components: {
    Loader,
    Header,
    Search,
    ResultsTable,
  },
};
</script>

<style scoped>
.push-right-lol {
  width:25%;
  
}

.headerBotSpace {
  padding-bottom: 180px;
}
.searchBotSpace {
  padding-bottom: 180px;
}
</style>