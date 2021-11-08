<template>
  <div id="nav">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link to="/" class="px-3">Home</router-link>
          <router-link to="/about" class="px-3">About</router-link>
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        </div>
      </nav>
    </div>
  </div>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #beeed2;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-lg,
.navbar > .container-md,
.navbar > .container-sm,
.navbar > .container-xl,
.navbar > .container-xxl {
  justify-content: end !important;
}
</style>
