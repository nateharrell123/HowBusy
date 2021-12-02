<template>
  <div>
    <table class="content-table">
      <thead>
        <tr>
          <th @click="sort('Establishment')">Establishment</th>
          <th></th>
          <th> Busy-ness</th>
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
          <td><button class="findBusyButton" @click="howBusyClick(place.place_id, place)"> Click to find busy-ness:
             <br> <span class="busyText"> {{place.busyness}} </span> 
             <br> <span class="placeAddressText"> {{place.desc}} </span>
             </button>
          </td>
          <!-- <td> <button @click="editReply(place, index)"> Hello there! {{place.busyness}} </button></td> -->
          <td v-for="place in place.opening_hours" :key="place.id" class="openText">
            {{openStatus(place)}}
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
      item:'',
      selectedItem: null,
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
    openStatus(status){ // display actual hours later on
      if (status === true){
        return 'Open now!'
      }
      else return 'Closed.'
    },
    howBusyClick(place_id, plc){
      console.log(place_id)
      var axios = require("axios");
      var config = {
        method: "post",
        url: `http://127.0.0.1:5000/test`,
        params: {
          place : place_id
        }
      };
      //let self = this;
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
          //self.id = place_id
          plc.busyness = response.data
          if (plc.busyness === "Moderately busy")
          {
            plc.desc = "Usually 15-20 min. wait"
          }
        })
        .catch(function (error) {
          console.log(error);
          plc.busyness = "No population data for this establishment."
        });
    },
    // edit here:
    editReply(place, index) {
      this.selectedItem = index;
      this.item = place.place_id;
      console.log(`Editing ${this.item}, index is ${this.selectedItem}`)
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
.busyText{
  font-weight: bold;
  color: green;
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
  font-size :1.13rem;
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
  border-bottom: 3px solid #6699b8;
}

</style>