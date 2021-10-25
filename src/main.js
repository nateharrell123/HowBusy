import { createApp } from 'vue'
import App from './App.vue'
import Vue3Geolocation from 'vue3-geolocation';
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.use(Vue3Geolocation)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDASvg4ATeMQcAsocmem5kFdTMDw_NSJwo',
        libraries: "places"
    },
}).mount('#app')