<template>
    <button @click="howBusyClick(place.place_id)"> Click to find busy-ness </button>
</template>

<script>
export default {
    data() {
        return {
            name: "HowBusyButton",
            place_id : ""
        }
    },
    methods : {
    howBusyClick(place_id){
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
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    }
}
</script>

<style>

</style>