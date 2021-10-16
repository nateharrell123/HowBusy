<template>
    <div>
        <h1> Coordinates: </h1>
        <p> {{ coordinates.lat}} Latitude, {{ coordinates.lng}} Longitude </p>
        <button @click="clickme"> Hey </button>
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
        }
    }
}
</script>

<style scoped>
.see{
    padding-top:200px;
}
</style>