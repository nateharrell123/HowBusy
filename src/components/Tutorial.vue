<template>
<div class="ui-grid">
    <div class="six wide column">
        <form class="ui segment large form">

            <div class="field">
                <div class="ui right icon input large">
                    <input type="text" placeholder="Enter your address" />
                    <i class="dot circle link icon"> </i>
                </div>
            </div>

        </form>
    </div>
    <div class="ten wide column segment ui" ref="map"></div>
</div>
</template>

<script>
export default {
  name: "Tutorial"
}
</script>

<style scoped>

</style>