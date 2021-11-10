<template>
<footer class="footer">
    <div class="links">

    </div>
</footer>
</template>

<script>
export default {
    name : "Footer"
}
</script>

<style>
.links{
    background: #32363b;
    width : 100%;
}
.footer{
    background: #222;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;
    color: #aeb3ba;
    flex-direction: column;
   position:absolute;
   bottom:0;
   width:100%;
}
body{
    margin:0;
}
</style>