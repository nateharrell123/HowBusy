<template>
  <div>
    <table class="content-table">
      <thead>
        <tr>
          <th @click="sort('Establishment')">Establishment</th>
          <!-- <th></th> -->
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
          <!-- <td> Picture goes here </td> -->
          <td>
            <button class="findBusyButton" @click="howBusyClick(place.place_id, place)">
             <span :class="{placeClicked: place.clicked}">Click to find busy-ness: </span>
             <!-- <span class="loader" v-if="place.clicked"></span> -->

             <br :class="{placeClicked: place.clicked}"> 
             <span 
              :class="
              { 
                busyTextGreen: place.isGreen,
                busyTextYellow: place.isYellow,
                busyTextOrange: place.isOrange,
                busyTextDarkOrange : place.isDarkOrange,
                busyTextRed: place.isRed
              }"
             > 
             {{place.busyness}} 
             </span> 
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
      if (status == null){
        return 'Unknown hours of operation.'
      }
      if (status === true){
        return 'Open now!'
      }
      else return 'Closed.'
    },
    howBusyClick(place_id, plc){
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
          plc.busyness = response.data
          plc.clicked = true;
          plc.done = true;

          if (plc.busyness === "Not busy.")
          {
            plc.desc = "Usually no wait."
            plc.isGreen = true;
          }
          else if (plc.busyness === "A little busy.")
          {
            plc.desc = "Expect small crowds."
            plc.isYellow = true;
          }
          else if (plc.busyness === "Moderately busy.")
          {
            plc.desc = "Expect moderate crowds."
            plc.isOrange = true;
          }
          else if (plc.busyness === "Very busy.")
          {
            plc.desc = "Expect it to be very packed."
            plc.isDarkOrange = true;
          }
          else if (plc.busyness === "Extremely busy.")
          {
            plc.desc = "As busy as it gets."
            plc.isRed = true;
          }
        })
        .catch(function (error) {
          console.log(error);
          plc.clicked = true;
          plc.isRed = true;
          plc.busyness = "No population data for this establishment."
        });
    },
    // edit here:
    editReply(place, index) {
      this.selectedItem = index;
      this.item = place.place_id;
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
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.busyTextGreen{
  font-weight: bolder;
  color: green;
}
.busyTextYellow{
  font-weight: bolder;
  color: #FFC300;
}
.busyTextRed{
  font-weight: bolder;
  color: red;
}
.busyTextOrange{
  font-weight: bolder;
  color: orange;
}
.busyTextDarkOrange{
  font-weight:bolder;
  color: #FF5500;
}
.placeClicked{
  display: none;
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