<template>
  <div id="nav" class="fixed-top">
    <div class="container-fluid ">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand text-light">Erica Ortiz</a>
          <div class="derecha">
          <router-link to="/" class="px-3">Inicio</router-link>
          <router-link to="/about" class="px-3">Sobre mí</router-link>
          <router-link to="/isapres" class="px-3">Isapres</router-link>

          </div>
        </div>
      </nav>
    </div>
  </div>

</template>

<script>
export default {
name: "Nav"
}
</script>

<style scoped>
#nav {
  padding: 5px;
  background:
   #5499c7  ;
}

#nav a {
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  font-family: 'Lobster';
  font-weight: bold;
  color: #96d7e7;
}

#nav a.router-link-exact-active {
  color: #f0f7f1;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-lg,
.navbar > .container-md,
.navbar > .container-sm,
.navbar > .container-xl,
.navbar > .container-xxl {
  justify-content: space-between !important;
}

/* media querie */
@media only screen and (max-width: 768px) {
 .navbar > .container,
.navbar > .container-fluid,
.navbar > .container-lg,
.navbar > .container-md,
.navbar > .container-sm,
.navbar > .container-xl,
.navbar > .container-xxl {
  justify-content: center !important;
}
}

 
</style>