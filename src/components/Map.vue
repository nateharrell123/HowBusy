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
                lat: 3,
                lng: 2
            }
        }
    }
}
</script>

<style scoped>
.see{
    padding-top:200px;
}
</style>