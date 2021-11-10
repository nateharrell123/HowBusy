<template>
    <footer class="bottom">
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