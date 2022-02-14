<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Buscamos el mejor plan para ti</h1>
        <div class="image mx-auto"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image {
  background-image: url("../assets/isapres.jpg");
  width: 60%;
  max-width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
}
  
/* estilo de fuente  */
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap");
h1 {
  color: #5499c7;
  font-family: "Merriweather", serif;
  text-shadow: 2px 1.5px #000;
}
  
@media (max-width: 1091px) {
  h1 {
    font-size: 1.2em;
    padding: 0 20px;
  }

  .image {
    display: grid;
    grid-template-areas: 1;
    grid-auto-rows: 100vh;
    background-size: contain;
    width: 70%;
    max-width: 100%;
    height: 50vh;
    
  }
}
</style>
