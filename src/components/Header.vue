<template>
<header class="banner">
    <div class="wrapper">
        <div class="logo">
            <a href="#" class="HowBusyText">HowBusy.com</a>
        </div>
        <nav class="nav"> 
            <a href="#" class="HowItWorksText">How it works</a>
        </nav>
    </div>
</header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.logo{
    width: 30%;
    float: left;
    line-height:100px;
}
.HowBusyText{
    text-decoration: none;
    font-size: 30px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:#fff;
    letter-spacing:5px;
}
.wrapper {
  margin: 0 auto;
}
.banner{
    height:100px;
    background: #09A8D9;
    width: 100%;
    z-index: 12;
    position:fixed;
}
body{
    text-align: center;
}
.nav{
    float:right;
    line-height: 100px;
}
.HowItWorksText{
    text-decoration: none;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing:4px;
    font-size:20px;
    margin:0 10px;
    color:#fff;
    padding-right: 50px;
}

</style>