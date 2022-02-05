<template>
  <div>
    <h3>Formulario de contato</h3>
    <form class="formulario">
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
    <small id="emailHelp" class="form-text text-muted">Tus datos nunca serán compartidos con nadie.</small>
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Clave">
  </div>
  <!-- <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
  <button type="submit" class="btn btn-primary my-3">Enviar</button>
</form>
  </div>
</template>

<style scoped>
.formulario{
        width: 60%;
        max-width: 100%;
        margin: 1rem auto 1rem;
    }
</style>