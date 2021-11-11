<template>
  <div>
    <table class="content-table">
      <thead>
        <tr>
          <th @click="sort('Establishment')">Establishment</th>
          <th></th>
          <th>Busy-ness</th>
          <th> Hours </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="place in SearchResults" :key="place.id">
          <td>{{ place.name }}
            <br>
            <span class="placeAddressText"> {{place.vicinity}} </span>
          </td>
          <!-- <td v-for="item in place.photos" :key="item.id"> {{ getPhoto(item.photo_reference) }} </td> -->
          <td> Picture goes here </td>
          <td><button class="findBusyButton" @click="howBusyClick">Click to find busy-ness </button></td>
          <td class="clockImage">
            Text here haha
            <!-- <img :src="Clock"> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Clock from "../assets/Clock.jpeg"
export default {

  props: {
    SearchResults: Array,
  },
  data() {
    return {
      Clock : Clock,
      name: "ResultsTable",
      searchResults: [],
      currentSort:'name',
      currentSortDir:'asc'
    };
  },
  mounted() {
  },
    methods: {
    getPhoto(photo_reference){
      var axios = require("axios");
      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`
      };
      axios(config)
        .then(response => {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    howBusyClick(){
      var axios = require("axios");

      var config = {
        method: "get",
        url: `http://127.0.0.1:5000/test`,
      };
      
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    sort(s){
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
    }
  },
  watch:{
  sortedSearchResults:function() {
    return this.searchResults.sort((a,b) => {
      let modifier = 1;
      if(this.currentSortDir === 'desc') modifier = -1;
      if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
      if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
      return 0;
    });
  }
}
};
</script>

<style scoped>
.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.3rem;
  min-width: 400px;
  width:1300px;
  position: relative;
  justify-content: middle;

  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
}
.findBusyButton{
  border:none;
  background-color:inherit;
  font-size:1.3rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
.findBusyButton:hover{background: #eee;}
.placeAddressText{
  color: rgba(0, 0, 0, 0.5);
  font-size :1.0rem;
}
.content-table thead tr {
  background-color: #6699b8;
  color: #fff;
  text-align: left;
  font-weight: bold;
}

.content-table th{
  padding: 12px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

}
.content-table td {
  padding: 12px 15px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type {
  border-bottom: 3px solid #22702A;
}

</style>