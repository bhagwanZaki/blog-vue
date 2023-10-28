<template>
  <router-link
    :to="{ name: 'blogdetail', params: { id: 4 } }"
    class="latestDiv"
  >
    <img src="../assets/img4.jpg" alt="ls" class="lsimg" />
    <div class="lsd">
      <div>
        <h4 class="lsddate">{{ date }}</h4>
        <h2 class="lsdtitle">{{ title }}</h2>
      </div>
      <h4 class="lsdwritten">Written by {{ author }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["date", "title", "author", "customClass"],
};
</script>

<style scoped src="../css/component/latestSideDiv.css"></style>
