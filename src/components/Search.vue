<template>
  <div class="selectField">
    <select class="selectClass" v-model="searchType" @change="selectChanged($event)">
      <option value="" disabled selected>Choose a search method:</option>
      <option value="SearchNearby">Search nearby</option>
      <option value="SearchSpecific">Search specific</option>
    </select>
  </div>
  <div class="centeredRadiusSearch">
    <div class="radiusDiv">
      <input style="width: 407px;"
      v-show="isRadiusSearch"
      class="radiusSearch" 
      placeholder="Enter a radius (mi.):"
      v-model="radius"
      v-on:keyup.enter="findNearby"
      >
    </div>
    <div class="nearbySelect">
      <select class="selectClass" v-model="nearbyFilterType" @change="radiusFilterChanged($event)" style="width: 402px;"
      v-show="isRadiusSearch">
      <option value="" disabled selected>Choose a search method:</option>
        <option value="restaurant">Restaurants</option>
        <option value="bar">Bars</option>
      </select>
    </div>
  </div>
<!-- 
    <div class="centeredRadiusSearch">
      <input style="width: 407px;"
      v-show="isSpecificSearch"
      class="specificSearch" 
      placeholder="Search for a place:"
      id="autocomplete"
      >
    </div> -->
    <div class="centeredRadiusSearch">
      <GMapAutocomplete
      style="width: 600px;"
      v-show="isSpecificSearch"
      class="specificSearch"
      id="specificSearch"
      @place_changed="setPlace"
      placeholder="Search for a place: "
      ></GMapAutocomplete>
    </div>

    <div class="centeredRadiusSearch">
      <SpecificSearch
      :SpecificData="specificData"
      v-show="specificIsLoaded"
      />
    </div>

    <div class="results">
      <ResultsTable
      :SearchResults="places"
      v-show="nearbyIsLoaded"
      />
    </div>
</template>

<script>
import SpecificSearch from "/Users/nateharrell/Documents/csproject/src/components/SpecificSearch.vue";
//import ResultsTable from "./components/ResultsTable.vue";
import ResultsTable from "/Users/nateharrell/Documents/csproject/src/components/ResultsTable.vue" // idk
export default {
  data() {
    return {
      name: "Search",
      coordinates: {
        lat: 0,
        lng: 0
      },
      nearbyFilterType: "",
      radius : null,
      nearbyIsLoaded : false,
      specificIsLoaded : false,
      places: [],
      isRadiusSearch : false,
      isSpecificSearch : false,
      searchType: "",
      specificData : {}
    }
  },

  components : {
    ResultsTable,
    SpecificSearch
  },

  mounted : function (){
    this.grabLocation()
    var element = document.getElementById("specificSearch");
    element.addEventListener("blur", function() { this.findNearby()});
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
    setPlace(placeResultData){ // gross
      this.specificData = placeResultData
      this.specificIsLoaded = !this.specificIsLoaded
      this.nearbyIsLoaded = !this.nearbyIsLoaded
    },
    findNearby() {
      var axios = require("axios");
      //url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.coordinates.lat},${this.coordinates.lng}&radius=${this.radius * 1000}&type=${this.nearbyFilterType}&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`,
      };
      let self = this; // strange :P
      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          self.places = response.data.results;
          self.nearbyIsLoaded = true;
          self.specificIsLoaded = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selectChanged(){
        if (event.target.value === "SearchSpecific")
        {
          this.isSpecificSearch = !this.isSpecificSearch;
          
          this.isRadiusSearch = false;
        }
        if (event.target.value === "SearchNearby")
        {
          this.isRadiusSearch = !this.isRadiusSearch;
          this.isSpecificSearch = false;
        }
    },
    radiusFilterChanged(){
      this.findNearby()
    }
  },
};
</script>

<style scoped>
.radiusSearch{
  margin-top:10px;
  font-size: 1.5rem;
  padding: 15px 45px 15px 30px;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
}
.specificSearch{
  margin-top:10px;
  font-size: 1.5rem;
  padding: 15px 45px 15px 30px;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
}
.centeredRadiusSearch{
  text-align:center;
}
.radiusDiv{
  display:inline-block;
  padding-right:40px;
}
.selectClass{
  display:block;
  margin:auto;
  margin-top:10px;
  font-size: 1.5rem;
  padding: 15px 45px 15px 30px;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
}
.nearbySelect{
  display:inline-block;
}
.selectField{
  padding-bottom:20px;
}
.results{
  text-align: -webkit-center;
}

.box {
  font-size: 20px;
}
</style>