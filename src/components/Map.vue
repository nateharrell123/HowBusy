<template>
    <div>
        <h1> Coordinates: </h1>
        <p> {{ coordinates.lat}} Latitude, {{ coordinates.lng}} Longitude </p>
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

    created() {
        this.$getLocation({})
            .then(coordinates => (
                this.coordinates = coordinates
            ))
    }
}
</script>

<style>
.see{
    padding-top:200px;
}
</style>