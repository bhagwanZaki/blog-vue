<template>
  <router-link
    :to="{ name: 'blogdetail', params: { id: 4 } }"
    class="popularDiv"
  >
    <span>
      <h4 class="pdate">{{ date }}</h4>
      <h2 class="ptitle">{{ title }}</h2>
    </span>
    <router-link
      :to="{ name: 'profile', params: { name: author.replace(/\s/g, '') } }"
      class="pwritten"
      >Written by {{ author }}</router-link
    >
  </router-link>
</template>

<script>
export default {
  props: ["date", "title", "author"],
};
</script>
<style scoped src="../css/component/popularDiv.css"></style>
