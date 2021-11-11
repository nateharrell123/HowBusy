<template>
<footer class="footer">
    <div class="links">
        <div class="black">
            Black here
        </div>
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
    padding:100px 0px 0px;
}
.black{
    background: #222;

    padding:100px;
}
.footer{
    flex-shrink: 0;
}
body{
    margin:0;
}
</style>