<template>
    <div class="results">
        <table class="content-table">
            <thead>
                <tr>
                    <th>Establishment</th>
                    <th></th>
                    <th> Busy-ness</th>
                    <th> Hours </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 
                        {{this.SpecificData.name}}
                        <br>
                        <span class="placeAddressText"> {{this.SpecificData.vicinity}} </span> 
                    </td>
                    <td>Picture goes here</td>
                    <td>
                        <button class="findBusyButton" @click="howBusyClick(this.SpecificData.place_id, this.SpecificData)">
                             <span :class="{placeClicked: this.SpecificData.clicked}">Click to find busy-ness: </span>
                                <span :class="
                                    { 
                                        busyTextGreen: this.SpecificData.isGreen,
                                        busyTextYellow: this.SpecificData.isYellow,
                                        busyTextOrange: this.SpecificData.isOrange,
                                        busyTextDarkOrange : this.SpecificData.isDarkOrange,
                                        busyTextRed: this.SpecificData.isRed
                                    }"
                                    > 
                                    {{this.SpecificData.busyness}} 
                                    <br> 
                                    <span class="placeAddressText"> {{this.SpecificData.desc}} </span>
                                </span> 
                        </button>
                    </td>
                    <td>
                        {{openStatus(this.SpecificData.opening_hours)}} <!-- find hours -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name : "SpecificSearch"
        }
    },
    props : {
        SpecificData : Object
    },
    methods : {
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
  }
}
</script>

<style>
.results{
  text-align: -webkit-center;
}
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