<template>
    <div>
        <h1> Coordinates: </h1>
        <p> {{ coordinates.lat}} Latitude, {{ coordinates.lng}} Longitude </p>
        <button @click="clickme"> Get Coords </button>
        <button @click="findNearby"> Find nearby </button>
    </div>
</template>

<script>


export default {
    name: "Map",
    data() {
        return {
            coordinates: {
                lat: 0,
                lng: 0
            }
        }
    },

    methods: {
        clickme(){
            this.$getLocation()
                .then((coordinates) => {
                    console.log(coordinates)
                    this.coordinates = {
                        lat: coordinates.lat,
                        lng: coordinates.lng
                    }
                })
                .catch(error => alert(error));
        },
        findNearby(){
            var axios = require('axios');

            var config = {
            method: 'get',
            url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo',
            headers: { }
            };

            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.see{
    padding-top:200px;
}
</style>