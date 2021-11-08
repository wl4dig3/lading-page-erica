<template>
  <div class="home">
    <h1 class="pt-5">{{ titulo }}</h1>
    <!-- <img alt="home logo" src="../assets/familia.jpg"> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Boton class="pt-5 boton" />
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
  color: #006600;
  font-family: 'Merriweather', serif;
}
img {
  max-width: 100%;
  height: auto;
}
.home {
  background-image: url("../assets/familia.jpg");
  width: 100%;
  height: 530px;
  background-size: cover;
  background-repeat: no-repeat;
}
.boton {
  padding-top: 25px;
}

@media (max-width: 364px) {
  .main {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>