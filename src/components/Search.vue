<template>
  <input v-on:keyup.enter="search" placeholder="Enter a radius (mi.):"/>
</template>

<script>
export default {
  name: "Search",
    methods: {
    search: function() {
       console.log("Enter")
    },
  }
}
</script>

<style scoped>
</style>