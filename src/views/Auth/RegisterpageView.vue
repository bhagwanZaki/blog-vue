<template>
  <div class="loginSec">
    <img src="../../assets/register.png" alt="login page" class="rimg" />
    <form class="rform">
      <h1 class="header">Register Page</h1>
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
        <label for="fname">Full Name</label>
        <input
          class="textfield"
          type="text"
          id="fname"
          placeholder="Your Name"
          required
          v-model="fname"
        />
      </div>
      <div class="inputGrp">
        <label for="email">Email</label>
        <input
          class="textfield"
          type="email"
          id="email"
          placeholder="Email"
          required
          v-model="email"
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
        <label for="cpassword">Confirm Password</label>
        <input
          class="textfield"
          type="password"
          id="cpassword"
          placeholder="Confirm Password"
          required
          v-model="cpassword"
        />
      </div>
      <div class="inputGrp">
        <input type="submit" value="Register" class="loginBtn" />
        <router-link :to="{ name: 'login' }" class="link">
          Already have an account?</router-link
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
      fname: "",
      email: "",
      password: "",
      cpassword: "",
    };
  },
};
</script>

<style scoped src="../../css/login.css"></style>
