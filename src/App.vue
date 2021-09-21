<template>
  <Loader/>
  <Search/>
</template>

<script>
import Loader from './components/Loader.vue'
import Search from './components/Search.vue'
export default {
  name: 'App',
  components: {
    Loader,
    Search
  }
}
</script>

<style scoped>

</style>