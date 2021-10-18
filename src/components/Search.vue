<template>
  <div class="search">
    <input
      v-on:keyup.enter="search"
      class="box"
      placeholder="Enter a radius (mi.):"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    clickme() {
      this.$getLocation()
        .then((coordinates) => {
          console.log(coordinates);
          this.coordinates = {
            lat: coordinates.lat,
            lng: coordinates.lng,
          };
        })
        .catch((error) => alert(error));
    },
    findNearby() {
      var axios = require("axios");

      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&radius=1500&type=${this.type}&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.search {
  width: 25%;
}
.box {
  font-size: 20px;
}
</style>