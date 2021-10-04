<template>
<div class="ui-grid">
    <div class="six wide column">
        <form class="ui segment large form">

            <div class="field">
                <div class="ui right icon input large">
                    <input type="text" placeholder="Enter your address" v-model="coordinates"/>
                    <button @click="locatorButtonPressed"> Click me!</button>
                </div>
            </div>

            <div class="field">
                <div class="two fields">
                    <div class="field">
                        <select v-model="type">
                            <option value="restaurant">Restaurant</option>
                        </select>
                    </div>

                    <div class="field">
                        <select v-model="radius">
                            <option value="5">5 KM</option>
                            <option value="10">10 KM </option>
                            <option value="15">15 KM </option>
                            <option value="20">20 KM </option>
                        </select>
                    </div>
                </div>
            </div>

            <button class="ui button pink" @click="findCloseByButtonPressed">Find nearby</button>

        </form>
    </div>

     
    <div class="ten wide column segment ui" ref="map"></div>  
</div>
</template>

<script>

import axios from "axios";

export default {
  name: "Tutorial",
  data() {
      return {
          type: "",
          radius: "",
          lat: 0,
          long: 0,
      };
  },

  computed : {
      coordinates() {
          return `${this.lat}, ${this.long}`;
      }
  },

  methods : {
      locatorButtonPressed() {
          navigator.geolocation.getCurrentPosition(
              position => {
                  this.lat = position.coords.latitude;
                  this.long = position.coords.longitude;
              },
            //   error => {
            //       console.log("Error getting location")
            //   }
          );
      },
      findCloseByButtonPressed() {
          const URL = `https://protected-anchorage-68389.herokuapp.com/
          https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
              this.lat}
              ,${this.long}
              &type=${this.type}
              &radius=${this.radius * 1000}
              &key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`;
          axios
          .get(URL)
          .then(response => {
              console.log(response.data);
          });
      }
  }
}
</script>

<style scoped>

</style>