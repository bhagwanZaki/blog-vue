<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }" class="navTitle">Bloggy</router-link>
    <router-link
      v-if="isLoggedIn"
      :to="{ name: 'profile', params: { name: 'khanZaki' } }"
      class="profile"
    >
      Hey Zaki !!
    </router-link>
    <router-link v-if="!isLoggedIn" :to="{ name: 'login' }" class="loginBtn">
      Login
    </router-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn:
        localStorage.getItem("authToken") !== null &&
        localStorage.getItem("authToken") !== "",
    };
  },
};
</script>
<style scoped src="../css/component/navbar.css"></style>
