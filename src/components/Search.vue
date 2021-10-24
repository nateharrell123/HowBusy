<template>
    <select class="selectClass" v-model="searchType" @change="selectChanged($event)">
      <option value="" disabled selected>Choose a search method:</option>
      <option value="SearchNearby">Search nearby</option>
      <option value="SearchSpecific">Search specific</option>
    </select>
    <div class="inputclass" >
    <input
    v-show="isRadiusSearch"
    class="searchInput" 
    placeholder="Enter a radius (mi.):"
    v-model="radius"
    v-on:keyup.enter="findNearby"
    >
    <div class="searchIcon">
    <svg xmlns="http://www.w3.org/2000/svg">
      <!-- more tags here -->
    </svg>
    </div>
    </div>

    <div class="results">
      <ResultsTable
      :SearchResults="places"
      />
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
      isRadiusSearch : false,
      isSpecificSearch : false,
      searchType: ""
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
    }
  },
};
</script>

<style scoped>
.searchInput{
  display:block;
  margin:auto;
  margin-top:10px;
  font-size: 2rem;
  padding: 15px 45px 15px 30px;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
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
.results{
  margin: auto;
  width: 25%;
}

.box {
  font-size: 20px;
}
</style>