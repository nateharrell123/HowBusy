<template>
    <div>
        {{this.SpecificData}}
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
    }
}
</script>

<style>

</style>