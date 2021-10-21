<template>

<div class="clock">
	<div class="top"></div>
	<div class="right"></div>
	<div class="bottom"></div>
	<div class="left"></div>
	<div class="center"></div>
	<div class="shadow"></div>
	<div class="hour"></div>
	<div class="minute"></div>
	<div class="second"></div>
</div> 

    <div class="title">
        <span>How</span>
        <span class="logo_alt">Busy</span>
    </div>
    <div class="subtitle">
        Find out how busy local establishments are.
    </div>
</template>
<script>
export default {
    name: "Clock"
}
</script>

<style scoped>
.logo_alt{
    color:#22702A;
}
.subtitle{
	margin-top:270px;
	text-align: center;
	white-space: nowrap;
	font-weight : 600;
	letter-spacing:4px;
	line-height:100px;
	text-transform: lowercase;
	font-size:40px;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
	font-weight: 200;
	color: #777;
}
.title{
	transform:translateY(290px);
	margin:auto; 
    white-space: nowrap;
    font-weight : 600;
    letter-spacing:4px;
    line-height:100px;
    text-transform: uppercase;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    color:#212121;
    /* position: absolute; */
    font-size:40px;
	width: 200px;
	
}
.clock {
	position: fixed;
	top: 15%;
	left: 50%;
	margin-top: -50px;
	margin-left: -100px;
	
	height: 200px;
	width: 200px;
	background-color: #fff;
	border-radius: 100%;
	border: 10px solid #005F70;
}
.clock .top {
	position: absolute;
	width: 3px;
	height: 8px;
	background-color: #262626;
	left: 0;
	right: 0;
	margin: 0 auto;
    
}
.clock .right {
	position: absolute;
	width: 8px;
	height: 3px;
	background-color: #262626;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
}
.clock .bottom {
	position: absolute;
	width: 3px;
	height: 8px;
	background-color: #262626;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0 auto;
}
.clock .left {
	position: absolute;
	width: 8px;
	height: 3px;
	background-color: #262626;
	top: 0;
	left: 0;
	bottom: 0;
	margin: auto;
}
.clock .center {
	height: 6px;
	width: 6px;
	background-color: #262626;
	border-radius: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
}
.clock .shadow {
	background:linear-gradient(rgba(0, 0, 0, 0), 
								rgba(0, 0, 0, 0.1));
	height: 200px;
	width: 200px;
	position: absolute;
	left: 60px;
	top: 60px;
	transform: rotate(135deg);
}
.clock .hour {
	width: 3px;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	animation: time 3600s infinite linear;
}
.clock .hour:before {
	content: "";
	height: 60px;
	width: 3px;
	background-color: #262626;
	position: absolute;
	top: 30px;
}

.clock .minute {
	width: 1px;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	animation: time 360s infinite linear;
}
.clock .minute:before {
	position: absolute;
	content: "";
	background-color: #262626;
	height: 40px;
	width: 1px;
	top: 50px;
}
.clock .second {
	width: 2px;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	animation: time 15s infinite linear;
}
.clock .second:before {
	position: absolute;
	content: "";
	background-color: red;
	height: 45px;
	width: 2px;
	top: 45px;
}

@keyframes time {
	to {
		transform: rotate(360deg);
	}
} 
</style>