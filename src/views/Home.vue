<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1>FOOT LOCKER</h1>
      </div>
    </div>
    <div class="row">
      <img src="../assets/home.jpg" alt="home" />
    </div>
  </div>
</template>
<script>
import Home from "../components/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>
<style scoped>
h1 {
  font-size: 10rem;
  font-family: "Bree Serif", serif;
}
img {
  width:50rem;
}
</style>
