<template>
  <Loader/>
  <Header/>
  <Search/>
</template>

<script>
import Loader from './components/Loader.vue'
import Search from './components/Search.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Loader,
    Header,
    Search,
  }
}
</script>

<style scoped>

</style>