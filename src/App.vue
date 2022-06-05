<template>
	<router-view />
	<img src="./assets/logo.png" alt="logo vue" class="logo" />
</template>

<style>
body,
html {
	margin: 0px;
	padding: 0px;
	min-height: 100vh;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.logo {
	right: 20px;
	width: 100px;
	bottom: 10px;
	position: absolute;
}
</style>

