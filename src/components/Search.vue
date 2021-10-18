<template>
  <div class="search">
    <input
      v-on:keyup.enter="findNearby"
      class="box"
      placeholder="Enter a radius (mi.):"
    />
    <select v-model="type">
      <option value="restaurant"> Restaurant </option>
      <option value="Bar"> Bar </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Search",
  coordinates: {
    lat: 0,
    lng: 0
  },
  type: "",

  mounted : function (){
    this.grabLocation()
    //console.log(this.lat, this.lng)
  },

  /* Functions */
  methods: {
    grabLocation() {
      this.$getLocation()
        .then((coordinates) => {
          this.coordinates = {
            lat: coordinates.lat,
            lng: coordinates.lng,
          };
      console.log(coordinates);
        })
        .catch((error) => alert(error));
    },
    findNearby() {
      var axios = require("axios");
      console.log(this.type)
      //url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
      console.log(this.coordinates.lat, this.coordinates.lng)
      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.coordinates.lat},${this.coordinates.lng}&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`,
        /*url: `https://cors-anywhere.herokuapp.com
        /https://maps.googleapis.com/maps/api/place/nearbysearch/json?
        location=-33.8670522%2C151.1957362&radius=1500
        &type=restaurant
        &keyword=cruise
        &key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`,
        headers: {},
        */
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