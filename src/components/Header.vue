<template>
<header>
    <div class="wrapper">
        <div class="logo">
            <a href="#">Website Title</a>
        </div>
        <nav>
            <a href="#">How it works</a>
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
.logo a{
    text-decoration: none;
    font-size: 30px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:#fff;
    letter-spacing:5px;
}
.wrapper {
  margin: 0 auto;
}
header{
    height:100px;
    background: #09A8D9;
    width: 100%;
    z-index: 12;
    position:fixed;
}
body{
    text-align: center;
}
nav{
    float:right;
    line-height: 100px;
}
nav a{
    text-decoration: none;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing:4px;
    font-size:20px;
    margin:0 10px;
    color:#fff;
    padding-right: 50px;
}

</style>