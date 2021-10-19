<template>
  <div class="search">
    <div class="inputclass">
      <input
        v-model="radius"
        v-on:keyup.enter="findNearby"
        class="box"
        placeholder="Enter a radius (mi.):"
      />
    </div>
    <div class="selectclass">
      <select v-model="type" class="dropdown">
        <option value="restaurant"> Restaurant </option>
        <option value="Bar"> Bar </option>
      </select>
    </div>
    <div>
      <ResultsTable
      :SearchResults="places"
      />
    </div>
  </div>
</template>

<script>
import ResultsTable from "/Users/nateharrell/Documents/csproject/src/components/ResultsTable.vue";
export default {
  data() {
    return {
      //
      name: "Search",
      coordinates: {
        lat: 0,
        lng: 0
      },
      type: "",
      radius : null,
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
  width: 100%;
}
select {
    border:1px solid #ccc;
    vertical-align:top;
}
.inputclass {
  display:inline-block;
}
.selectclass {
  display:inline;
  padding-left:70px;
  width:300px;
}
input, select{
  height : 30px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.box {
  font-size: 20px;
}
</style>