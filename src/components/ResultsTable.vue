<template>
  <div>
    <table class="content-table">
      <thead>
        <tr>
          <th>Table Header 1</th>
          <th>Table Header 2</th>
          <th>Table Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="place in SearchResults" :key="place.id">
          <td>{{ place.name }}</td>
          <td v-for="item in place.photos" :key="item.id">
            {{ getPhoto(item.photo_reference) }}
          </td>
          <!-- <td> {{index}} </td> -->
          <td>Data 3</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    SearchResults: Array,
  },
  data() {
    return {
      name: "ResultsTable",
      mounted: function () {
        this.setText();
      },
      methods: {
        getPhoto(photo_reference) {
          var axios = require("axios");
          //url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
          var config = {
            method: "get",
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo`
          };
          //let self = this; // strange :P
          axios(config)
            .then(function (response) {
              console.log(response)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },
    };
  },
};
</script>

<style scoped>
.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  position: relative;
  justify-content: middle;

  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
}
.content-table thead tr {
  background-color: #09a8d9;
  color: #fff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type {
  border-bottom: 3px solid #09a8d9;
}
</style>