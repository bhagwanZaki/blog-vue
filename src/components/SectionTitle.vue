<template>
  <div class="sectionTitlediv">
    <h2 class="sectionTitle">
      {{ title }}
    </h2>
    <a href="{{ link }}" class="sTlink">View</a>
  </div>
</template>

<script>
export default {
  props: ["title", "link"],
};
</script>

<style scoped src="../css/component/sectionTitle.css"></style>
