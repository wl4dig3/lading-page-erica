<template>
  <div class="about">
    
    <!-- <div data-tf-widget="ybmTrS" style="width: 100%; height: 400px"></div> -->
    <Sobremi class="mt-5"/>
    <!-- card de bootstrap  -->
    <Cardsobremi />
    <!-- fin de la card  -->
  </div>
</template>

<script>

import Sobremi from '../components/Sobremi.vue';
import Cardsobremi from "../components/Cardsobremi.vue";
export default {
  components:{
    Sobremi,
    Cardsobremi,
  },
};
</script>
<style scoped>
.about {
  margin:  4rem 0 0 0; 
  background-image: url("../assets/relax.jpg");
  width: 100%;
  max-width: 100%;
  height: 88vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
