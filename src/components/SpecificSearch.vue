<template>
    <div>
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
                        <button class="howBusyButton" @click="howBusyClick(this.SpecificData.place_id, place)">
                             <span :class="{placeClicked: place.clicked}">Click to find busy-ness: </span>
                                <span :class="
                                    { 
                                        busyTextGreen: place.isGreen,
                                        busyTextYellow: place.isYellow,
                                        busyTextOrange: place.isOrange,
                                        busyTextDarkOrange : place.isDarkOrange,
                                        busyTextRed: place.isRed
                                    }"
                                    > 
                                    {{place.busyness}} 
                                    <br> 
                                    <span class="placeAddressText"> {{place.desc}} </span>
                                </span> 
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="click"> click me </button>
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
        click()
        {
            console.log(this.SpecificData)
        }
    }
}
</script>

<style>

</style>