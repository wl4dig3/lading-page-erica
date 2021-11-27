<template>
  <div class="contenedor">
    <h2>Contacto</h2>
    <form class="formulario">
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Clave">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
  </div>
</template>

<style scoped>
    .contenedor{
        margin: 6rem 0 0 0;
    }
    .formulario{
        width: 60%;
        max-width: 100%;
        margin: 1rem auto 1rem;
    }
</style>