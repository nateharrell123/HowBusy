<template>
    <footer class="bottom">
        <div class="links">
        </div>
        <section class="bottom-body">

        </section>
    </footer>
</template>

<script>
export default {
    name : "Footer"
}
</script>

<style>
.bottom{
    background: #222;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;
    color: #aeb3ba;
    flex-direction: column;
}

.links{
    color : #32363b;
}

.bottom-body{
    display: flex;
    max-width: 800px;
    padding: 30px 10px;
    margin: auto;
}

/* White space be gone */
body 
{ 
   margin:0; 
}  

.links{
    width: 100%;
    background: #32363b;
    padding: 0 20px;
}
</style>