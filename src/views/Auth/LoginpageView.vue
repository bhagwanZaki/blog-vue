<template>
  <div class="loginSec">
    <img src="../../assets/login.png" alt="login page" class="limg" />
    <form class="form" @submit.prevent="login">
      <h1 class="header">Login Page</h1>
      <div class="inputGrp">
        <label for="username">Username</label>
        <input
          class="textfield"
          type="text"
          id="username"
          placeholder="Username"
          required
          v-model="username"
        />
      </div>
      <div class="inputGrp">
        <label for="password">Password</label>
        <input
          class="textfield"
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="inputGrp">
        <input type="submit" value="Login" class="loginBtn" />
        <router-link :to="{ name: 'register' }" class="link">
          Dont have an account?</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username !== "" && this.password !== "") {
        localStorage.setItem("authToken", "q5fdv598c2casd*&^%");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped src="../../css/login.css"></style>
