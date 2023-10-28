<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar />
  <router-view />
  <Footer></Footer>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style src="./css/index.css"></style>
