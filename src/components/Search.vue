<template>
  <div class="search">
    <input
      v-model="radius"
      v-on:keyup.enter="findNearby"
      class="box"
      placeholder="Enter a radius (mi.):"
    />
    <select v-model="type">
      <option value="restaurant"> Restaurant </option>
      <option value="Bar"> Bar </option>
    </select>
    <div>
      <ul>
        <li v-for="place in this.places" :key="place.id">
          {{ place.name }}
        </li>
      </ul>
    </div>
    <ResultsTable
    :Results="places"
    />
  </div>
</template>

<script>
import ResultsTable from "/Users/nateharrell/Documents/csproject/src/components/ResultsTable.vue";
export default {
  data() {
    return {

      name: "Search",
      coordinates: {
        lat: 0,
        lng: 0
      },
      type: "",
      radius : 0,
      places: [],
    }
  },

  components : {
    ResultsTable
  },

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
      //console.log(this.coordinates.lat);
        })
        .catch((error) => alert(error));
    },
    findNearby() {
      var axios = require("axios");
      //url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.coordinates.lat},${this.coordinates.lng}&radius=${this.radius}&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`,
      };
      let self = this; // strange :P
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          self.places = response.data.results;
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