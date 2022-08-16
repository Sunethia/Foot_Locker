<template>
  <navbar />
  <Footer />
  <router-view />
</template>
<script>
import navbar from "./components/navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Rampart One";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  overflow-x: hidden;
}
</style>
