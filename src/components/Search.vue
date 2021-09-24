<template>
  <div class="search">
    <input v-on:keyup.enter="search" class="box" placeholder="Enter a radius (mi.):"/>
  </div>
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
.search{
  padding-top:150px;
  padding-left:141px;
  float:left;
}
.box{
  font-size:20px;
}
</style>