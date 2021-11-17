<template>
  <div id="nav" class="fixed-top">
    <div class="container-fluid ">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Erica Ortiz</a>
          <div class="derecha">
          <router-link to="/" class="px-3">Inicio</router-link>
          <router-link to="/about" class="px-3">Sobre mí</router-link>
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
  #1AFA3B;
}

#nav a {
  font-weight: bold;
  color: #d4e2cc;
}

#nav a.router-link-exact-active {
  color: #074711;
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