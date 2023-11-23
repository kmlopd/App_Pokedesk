<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view/>
  <!-- <video autoplay muted loop id="video-background">
        <source src="@/assets/pokemons.mp4" type="video/mp4">
  </video> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  width: 100%;
  height: 100%;
  // background-image: url('https://i.pinimg.com/564x/df/cf/4f/dfcf4f4c1f18b0d07344c68f4a04ba62.jpg');
  //background-image: url('https://i.pinimg.com/564x/04/4c/95/044c95857d622049292dea708d3b541a.jpg');
  background-image: url('https://i.pinimg.com/564x/35/1d/75/351d75afb0a2e0de68dede0b2ba3629e.jpg');
  background-position: center;
  background-size: cover;
  z-index: -1;
}
/*
#video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}*/

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
