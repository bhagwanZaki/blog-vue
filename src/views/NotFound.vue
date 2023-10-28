<template>
  <div class="pageNotFound">
    <img src="../assets/404.png" alt="404 not found" class="imgnotfound" />
    <div class="sidebar">
      <h2 class="lostLink">Looks like you lost your way !!</h2>
      <router-link :to="{ name: 'home' }" class="guidelink"
        >Let me take you back
      </router-link>
    </div>
  </div>
</template>

<style scoped src="../css/404.css"></style>
