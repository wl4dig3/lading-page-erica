<template>
  <div class="home">
    <div class="arriba">
      <h1 class="pt-5">{{ titulo }}</h1>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

      <Boton class="pt-5 boton" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Boton from "@/components/Boton.vue";

export default {
  name: "Home",
  data() {
    return {
      titulo: "Elige la Isapre que necesites",
    };
  },
  components: {
    // HelloWorld
    Boton,
  },
};
</script>

<style scoped>
/* estilo de fuente  */
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap");
h1 {
  color: #5499c7;
  font-family: "Merriweather", serif;
  text-shadow: 2px 1.5px #07471198;
  /* padding-top: 20rem; */
}
.arriba {
  padding-top: 10rem;
}
img {
  max-width: 100%;
  height: 100%;
}
.home {
  background-image: url("../assets/familia.jpg");
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
.boton {
  padding-top: 25px;
}
.abajo {
  margin-top: 8rem;
}

@media (max-width: 364px) {
  .home {
    display: grid;
    grid-template-areas: 1;
    grid-auto-rows: 100vh;
    background-image: url("../assets/famili.jpg");
    background-size: cover;
    /* height: 100vh; */
  }
}
</style>