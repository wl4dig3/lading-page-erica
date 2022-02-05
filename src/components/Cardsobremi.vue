<template>
  <div class="container pt-5">
    <div class="card container border border-primary p-2" style="width: 18rem">
      <img class="card-img-top mx-auto" src="@/assets/erica.jpg" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
          {{ descripcion }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      descripcion: "Hola mi nombre es Erica Ortiz asesora de isapre con una trayectoria de más de 10 años, te ayudaré de la mejor manera con información objetiva y oportuna sobre planes, convenios y prestadores en las diferentes isapres de Chile",
    };
  },
};
</script>
<style scoped>
    img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }
</style>
