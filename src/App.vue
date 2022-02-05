<template>
  <div>
    <header class="contenedor">
      <Nav />
      <!-- <transition name="mi-transicion">
        <router-view/>
      </transition> -->
      <!-- <Footer/> -->
      <!-- para agregar la animacion  -->
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </header>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* transicion*/
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 0.3s, padding 0.25s;
}

.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
  padding: 10px;
}

.mi-transicion-enter-to,
.mi-transicion-leave {
  opacity: 0.9;
  padding: 0px;
}
@keyframes entrada {
  0% {
    transform: scale (2);
  }

  50% {
    transform: scale (1.5);
  }

  100% {
    transform: scale (1);
  }
}

@keyframes salida {
  0% {
    transform: scale (1);
  }

  50% {
    transform: scale (1.5);
  }

  100% {
    transform: scale (2);
  }
}
/* nueva animacion */
.route-enter-active,
.route-leave-active {
  transition: opacity 1s, transform 1s;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
